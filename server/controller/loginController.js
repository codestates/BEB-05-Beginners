const models = require("../models/user");

module.exports = {
  login: (req, res) => {
    const { user_id, user_password } = req.body;
    // console.log(req.body);

    models.login(user_id, user_password, (error, result) => {
      if (error) {
        return res.status(500).send("Internal Server Error");
      } else {
        if (result[0]) {
          req.session.user_id = result[0].user_id;
          res.status(201).json({ message: "Login success!" });
        } else {
          res.status(403).send({ message: "not authorized" });
        }
      }
    });
  },
};
