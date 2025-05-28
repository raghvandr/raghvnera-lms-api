const crypto = require("crypto");

function generatePassword(name, email, phone) {
  const base = name + email + phone;
  return crypto.createHash("sha256").update(base + Math.random()).digest("hex").slice(0, 10);
}

module.exports = generatePassword;
