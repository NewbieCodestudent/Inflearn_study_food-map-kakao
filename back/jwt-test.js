const jwt = require("jsonwebtoken");

const secret = "this is my secret";

const token = jwt.sign(
  {userIdx : 100, nickname:"홍길동"},
  secret
);

console.log(token);

const verifiedToken = jwt.verify(token, secret);

console.log(verifiedToken);