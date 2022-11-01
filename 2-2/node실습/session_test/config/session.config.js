const session = require("express-session");
const FileStore = require("session-file-store")(session);

const FileStoreOption = { retries: 0 };

module.exports = {
  store: new FileStore(FileStoreOption),
  secret: "salty saltt",
  resave: false,
  saveUninitialized: false,
};
