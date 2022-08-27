module.exports = {
  logout: (req, res) => {
    if (!req.session.user_id) {
      res.status(400).send({ message: "not authorized" });
    } else {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send({ message: "ok" });
        }
      });
    }
  },
};
