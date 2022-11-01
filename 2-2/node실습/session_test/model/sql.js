exports.createUserTable = () => {
  return `create table if not exists user(
        userId text priary ley,
        password text,
        salt text
    )`;
};

exports.insertUser = (userId, password, salt) => {
  return `insert into user(userId,password,salt) values('${userId}','${password}','${salt}')`;
};

exports.selectUserById = (userId) => {
  return `select * from user where userId='${userId}'`;
};

exports.deleteUser = (userId) => {
  return `delete from user where userId=${userId}`;
};
