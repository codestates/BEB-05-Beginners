const db = require("../db");
const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

module.exports = {
  ethFaucet: (req, res) => {
    const { user_id } = req.body;

    const findUserAddress = `SELECT user_address FROM User WHERE user_id = "${user_id}"`;
    db.query(findUserAddress, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const ganacheAddress = "0x0d9b25FA6e6fAE7197dfBf8CD7ACEf577257824e";
        const ganachePrivateKey =
          "91b908f471e81baf135bdddaf40c0d84dbba9c6fcab136f7373ba60e467ceee7";
        const user_address = result[0].user_address;

        web3.eth.accounts
          .signTransaction(
            {
              to: user_address,
              value: "1000000000000000000",
              gas: 2000000,
            },
            ganachePrivateKey
          )
          .then((value) => {
            return value.rawTransaction;
          })
          .then(async (tx) => {
            web3.eth.sendSignedTransaction(tx, async function (err, hash) {
              if (!err) {
                const userBalance = await web3.eth
                  .getBalance(user_address)
                  .then((balance) => {
                    return web3.utils.fromWei(`${balance}`);
                  });
                const updateUserEth = `UPDATE User SET user_eth="${userBalance}" WHERE user_address = "${user_address}"`;
                db.query(updateUserEth, (error, result) => {
                  if (error) {
                    console.log(error);
                  } else {
                    return res
                      .status(201)
                      .json({ message: "eth Faucet Success!" });
                  }
                });
              } else {
                console.log("Faucet error!");
              }
            });
          });
      }
    });
  },
};
