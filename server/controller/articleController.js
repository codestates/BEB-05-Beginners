const models = require("../models/article");

module.exports = {
  create: (req, res) => {
    const { user_id, post_title, post_content } = req.body;
    console.log(req.body);

    models.create(user_id, post_title, post_content, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      } else {
        return res.status(201).json({ message: "success!" });
      }
    });
  },
  read: (req, res) => {
    models.read((error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      } else {
        return res.status(201).json(result);
      }
    });
  },
  update: (req, res) => {
    const { user_id, post_title, post_content } = req.body;
    console.log(req.body);

    models.update(user_id, post_title, post_content, (error, result) => {
      if (error) {
        return res.status(500).send("Internal Server Error");
      } else {
        return res.status(201).json({ message: "success!" });
      }
    });
  },
  del: (req, res) => {
    const { user_id, post_title } = req.body;
    console.log(req.body);

    models.del(user_id, post_title, (error, result) => {
      if (error) {
        return res.status(500).send("Internal Server Error");
      } else {
        return res.status(201).json({ message: "success!" });
      }
    });
  },
};
