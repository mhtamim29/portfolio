import assert from "node:assert/strict";
import test from "node:test";
import {
  buildContactEmail,
  contactLimits,
  createContactLimiter,
  validateContact,
} from "../app/utils/contact.ts";

const valid = {
  name: "A Visitor",
  email: "visitor@example.com",
  subject: "Product enquiry",
  message: "I would like to discuss a project.",
};

test("normalizes all fields and keeps the visitor subject", () => {
  const result = validateContact({
    ...valid,
    name: " A Visitor ",
    subject: " Product enquiry ",
  });
  assert.deepEqual(result.errors, {});
  assert.equal(result.data.name, "A Visitor");
  assert.equal(result.data.subject, "Product enquiry");
});

for (const input of [null, [], {}, "invalid", 42]) {
  test(`rejects an invalid payload: ${JSON.stringify(input)}`, () => {
    const { errors } = validateContact(input);
    assert.ok(errors.name && errors.email && errors.message);
  });
}

test("rejects whitespace-only required fields and malformed email", () => {
  assert.ok(
    validateContact({ ...valid, name: " ", message: "\n" }).errors.name,
  );
  assert.ok(
    validateContact({ ...valid, name: " ", message: "\n" }).errors.message,
  );
  assert.ok(validateContact({ ...valid, email: "not-an-email" }).errors.email);
  assert.ok(
    validateContact({ ...valid, email: { value: valid.email } }).errors.email,
  );
});

for (const field of Object.keys(contactLimits)) {
  test(`enforces the ${field} length limit`, () => {
    assert.ok(
      validateContact({
        ...valid,
        [field]: "a".repeat(contactLimits[field] + 1),
      }).errors[field],
    );
  });
}

test("rejects header line breaks while preserving message paragraphs", () => {
  for (const field of ["name", "email", "subject"]) {
    assert.ok(
      validateContact({
        ...valid,
        [field]: "hello\r\nBcc: another@example.com",
      }).errors[field],
    );
  }
  assert.deepEqual(
    validateContact({
      ...valid,
      message: "First paragraph\n\nSecond paragraph",
    }).errors,
    {},
  );
});

test("includes the subject and reply address, and escapes HTML in the email", () => {
  const email = buildContactEmail({
    ...valid,
    name: "<b>Visitor</b>",
    subject: "<img src=x>",
    message: '<script>alert("x")</script>\nA & B',
  });
  assert.equal(email.replyTo, valid.email);
  assert.ok(email.subject.includes("<img src=x>"));
  assert.ok(email.text.includes("Subject: <img src=x>"));
  assert.ok(email.html.includes("&lt;img src=x&gt;"));
  assert.ok(email.html.includes("&lt;script&gt;"));
  assert.ok(email.html.includes("<br />A &amp; B"));
  assert.ok(!email.html.includes("<script>"));
  assert.ok(!email.html.includes("<img src=x>"));
});

test("supports an optional subject", () => {
  const result = validateContact({ ...valid, subject: undefined });
  assert.deepEqual(result.errors, {});
  assert.ok(
    buildContactEmail(result.data).subject.includes("Project discussion"),
  );
});

test("rate limits repeat sends and allows other visitors and expired windows", () => {
  const limit = createContactLimiter();
  assert.equal(limit("first", 1000), 0);
  assert.equal(limit("first", 1500), 60);
  assert.equal(limit("second", 1500), 0);
  assert.equal(limit("first", 61_000), 0);
});

test("keeps the rate-limit store bounded", () => {
  const limit = createContactLimiter(60_000, 2);
  limit("first", 1000);
  limit("second", 1000);
  limit("third", 1000);
  assert.equal(limit("second", 1001), 60);
  assert.equal(limit("first", 1001), 0);
});
