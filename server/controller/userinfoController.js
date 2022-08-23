const db = require("../db");

module.exports = {
  userinfo: async (req, res) => {
    if (!req.session.user_id) {
      res.status(400).send({ message: "not authorized" });
    } else {
      const queryString = `SELECT * FROM User WHERE user_id = "${req.session.user_id}"`;
      db.query(queryString, (error, result) => {
        if (error) {
          return res.status(500).send("Internal Server Error");
        } else {
          res.status(200).send({ data: result, message: "ok" });
        }
      });
    }
  },
};
