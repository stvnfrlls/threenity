const DB = require("../util/database");

module.exports = class User {
  getUserdetails(email) {
    return new Promise((resolve, reject) => {
      DB.execute(`SELECT * FROM userdetails WHERE username = ?`, [email])
        .then(([rows]) => {
          resolve(rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addUserdetails(email, password) {
    return new Promise((resolve, reject) => {
      DB.execute(
        `INSERT INTO userdetails(username, password) VALUES ("${email}", "${password}")`
      )
        .then(([result]) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateUserPassword(password, userID) {
    return new Promise((resolve, reject) => {
      DB.execute(
        `UPDATE userdetails SET password = "${password}" WHERE userID = "${userID}"`
      )
        .then(([result]) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  
};
