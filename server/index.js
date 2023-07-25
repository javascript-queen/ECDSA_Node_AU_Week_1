const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { keccak256 }= require("ethereum-cryptography/keccak");
const {secp256k1} = require("ethereum-cryptography/secp256k1");
const pubKeyToAddress = require("./scripts/pubKeyToAddress");
const signatureToPubKey = require("./scripts/signatureToPubKey");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const hashMsg = require("./scripts/hashMsg");
app.use(cors());
app.use(express.json());

const balances = {
  "030b4f83673ea47a991c7888bdeb5a7e8aefe4b19f5a9340a7bf4738f65fc767ea": 100,
  "02bd0f6d77c0dd63efd6ff5df25c135bf6a8d4acdcd04519df3833c7cab1c26b3c": 50,
  "02e8e1d2e76a2545e0453cb740628d6d13deccb44818be13339bb428d7af5718cc": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {

  // TODO: get a signature from a client side application
  // Recover the public address from the signature
  
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  //let's first check the signature
    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[sender] });
    }
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

/*
"030b4f83673ea47a991c7888bdeb5a7e8aefe4b19f5a9340a7bf4738f65fc767ea": 100,
// c6ec163f4f7f48af38c20155c70b1fc585e9be8896096bf6209c78ccfa57714c
"02bd0f6d77c0dd63efd6ff5df25c135bf6a8d4acdcd04519df3833c7cab1c26b3c": 50,
// 10a0d52f6b02043c38a4e8f77767094e5a2ab641ef08a94e4cfb0e687c3fadfc
"02e8e1d2e76a2545e0453cb740628d6d13deccb44818be13339bb428d7af5718cc": 75,
// 9e32f5f3050298818f29a59b680f5862d3e4505b21a16aa2829931d798710fe5
 */