const db = require("../db");
const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/177d9469297f410882cf0b3289e64011";
const web3 = new Web3(rpcURL);

module.exports = {
  signUp: (req, res) => {
    const { user_id, user_password } = req.body;
    console.log(req.body);

    const findAccount = `SELECT * FROM User WHERE user_id = "${user_id}"`;
    db.query(findAccount, (error, result) => {
      if (result[0]) {
        res.status(409).json({ message: "Id exists" });
      } else {
        const user_address = web3.eth.accounts.create(user_password).address;

        const insertAccount = `INSERT INTO User (user_id, user_password, user_address, user_eth, user_token) VALUES ("${user_id}","${user_password}" , "${user_address}", "0", "0")`;

        db.query(insertAccount, (error, result) => {
          if (error) {
            return res.status(500).send("Internal Server Error");
          } else {
            res.status(201).json({ message: "sign up success!" });
          }
        });
      }
    });
  },
};
