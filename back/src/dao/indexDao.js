const { pool } = require("../../config/database");

exports.exampleDao = async function (connection, params) {
  const Query = ``;
  const Params = [];
  const rows = await connection.query(Query, Params);
  return rows;
};

exports.selectRestaurats = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, category, videoUrl FROM restaurants where status = 'A';`;
  const selectCategorizedRestaurantsQuery = `SELECT title, address, category, videoUrl FROM restaurants where status = 'A' and category = ?;`;
  const Params = [category];
  const Query = category ? selectCategorizedRestaurantsQuery : selectAllRestaurantsQuery;
  const rows = await connection.query(Query, Params);
  return rows;
};


// 회원가입
exports.insertUsers = async function (connection, userID, password, nickname) {
  const Query = `insert into Users(userID, password, nickname) values (?,?,?);`;
  const Params = [userID, password, nickname];

  const rows = await connection.query(Query, Params);

  return rows;
};
 