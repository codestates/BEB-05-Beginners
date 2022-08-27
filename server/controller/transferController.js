const db = require("../db");
const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const erc20abi = require("../contract/erc20abi");

module.exports = {
  transfer: (req, res) => {
    const { user_id, toAddress, tokenAmount } = req.body;

    const findUserAddressPassword = `SELECT user_address, user_privateKey FROM User WHERE user_id = "${user_id}"`;
    db.query(findUserAddressPassword, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const user_address = result[0].user_address;
        const user_privateKey = result[0].user_privateKey;
        const contractAddr = "0xc1bc37114d71edf73dc7724419a9bd2adbcf1858";

        const contract = new web3.eth.Contract(erc20abi, contractAddr, {
          from: user_address,
        });
        const data = contract.methods
          .transfer(toAddress, tokenAmount)
          .encodeABI();

        const rawTransaction = {
          to: contractAddr,
          gas: 100000,
          data: data,
        };

        async function getTOKENBalanceOf(address) {
          const balance = await contract.methods.balanceOf(address).call();
          return balance;
        }

        web3.eth.accounts
          .signTransaction(rawTransaction, user_privateKey)
          .then((signedTx) =>
            web3.eth.sendSignedTransaction(signedTx.rawTransaction)
          )
          .then((req) => {
            getTOKENBalanceOf(user_address).then((balance) => {
              const updateBalance = `UPDATE User SET user_token="${balance}" WHERE user_address = "${user_address}"`;
              db.query(updateBalance, (error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  getTOKENBalanceOf(toAddress).then((balance) => {
                    const updateToBalance = `UPDATE User SET user_token="${balance}" WHERE user_address = "${toAddress}"`;
                    db.query(updateToBalance, (error, result) => {
                      if (error) {
                        console.log(error);
                      } else {
                        return res.status(201).json({ message: "success!" });
                      }
                    });
                  });
                }
              });
            });
            return true;
          });
      }
    });
  },
};
