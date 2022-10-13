const bcrypt = require("bcrypt");

exports.unqiuePassword = () => {
  const password = Math.random().toString(36).slice(-10);
  return password;
};

exports.generateBycrptHash = async (plainText) => {
  const saltRounds = 10;
  return bcrypt.hash(plainText, saltRounds).then((hash) => {
    return hash;
  });
};

exports.passwordMatchingConfirmation = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
