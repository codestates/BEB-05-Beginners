const db = require("../db");

module.exports = {
  login: (user_id, user_password, callback) => {
    const insertAccount = `SELECT * FROM User WHERE user_id = "${user_id}" AND user_password = "${user_password}"`;

    db.query(insertAccount, (error, result) => {
      callback(error, result);
    });
  },
};
