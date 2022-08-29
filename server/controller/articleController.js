const models = require("../models/article");
const db = require("../db");
const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const erc20abi = require("../contract/erc20abi");

module.exports = {
  create: (req, res) => {
    const { user_id, post_title, post_content } = req.body;

    models.create(user_id, post_title, post_content, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
      } else {
        const queryString = `SELECT user_address FROM User WHERE user_id = "${user_id}"`;
        db.query(queryString, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            const contractAddr = "0xc1bc37114d71edf73dc7724419a9bd2adbcf1858";
            const serverAddress = "0x40189eecf05fbad29e0f94ca23a8d0d589bda82c";
            const serverPrivateKey =
              "f712f02ff0d90765d01a89dae5436806fa0188fcb096ce6e69938f51c555a0b4";
            const userAddress = result[0].user_address;
            const contract = new web3.eth.Contract(erc20abi, contractAddr, {
              from: serverAddress,
            });
            const data = contract.methods.transfer(userAddress, 10).encodeABI();

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
              .signTransaction(rawTransaction, serverPrivateKey)
              .then((signedTx) =>
                web3.eth.sendSignedTransaction(signedTx.rawTransaction)
              )
              .then((req) => {
                getTOKENBalanceOf(userAddress).then((balance) => {
                  const updateBalance = `UPDATE User SET user_token="${balance}" WHERE user_address = "${userAddress}"`;
                  db.query(updateBalance, (error, result) => {
                    if (error) {
                      console.log(error);
                    } else {
                      return res.status(201).json({ message: "success!" });
                    }
                  });
                });
                return true;
              });
          }
        });
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
