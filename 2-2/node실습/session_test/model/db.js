const sqlite3 = require("sqlite3").verbose();

function getConnection() {
  const db = new sqlite3.Database("./model/user.db", (err) => {
    if (err) {
      console.log(err);
    }
  });
  return db;
}

// create, insert, put, delete
exports.executeUpdate = (sql) => {
  const db = getConnection();
  db.serialize();
  db.each(sql);
  db.close();
};

// select
exports.executeQuery = (sql, callback) => {
  const db = getConnection();
  db.serialize();
  db.all(sql, (err, rows) => {
    callback(err, rows);
    db.close();
  });
};

exports.executeSelect = (sql) => {
  return new Promise((resolve, reject) => {
    const db = getConnection();
    db.serialize();
    db.all(sql, (err, rows) => {
      db.close();
      if (err) reject(err);
      else resolve(rows);
    });
  });
};
