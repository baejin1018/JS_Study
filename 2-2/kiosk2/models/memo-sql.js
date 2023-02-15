exports.createMemoSql = ()=>{
  return `create table if not exists memo(
    memoid integer primary key autoincrement,
    userid text not null,
    title text not null,
    content text,
    originalFileName text,
    fileUrl text,
    savedTime integer,
    foreign key(userid) references user(userid)
  )`;
};

exports.selectAllMemoByUserSql = (userid)=>{
  return `select * from memo where userid='${userid}' order by savedTime desc`;
};

exports.selectAllMemoSql = ()=>{
  return `select * from memo order by savedTime desc`;
};

exports.selectOneMemoSql = (memoid, userid) =>{
  return `select * from memo where memoid=${memoid} and userid='${userid}'`;
};

exports.insertMemoSql = (memo) =>{
  if(memo.originalFileName!=null){
    return `insert into memo(userid, title, content, originalFileName, fileUrl, savedTime)
      values(
        '${memo.userid}',
        '${memo.title}',
        '${memo.content}',
        '${memo.originalFileName}',
        '${memo.fileUrl}',
        ${memo.savedTime}
      )`;
    } else {
      return `insert into memo(userid, title, content, savedTime)
        values(
          '${memo.userid}',
          '${memo.title}',
          '${memo.content}',
          ${memo.savedTime}
        )`;
    }
};

exports.updateMemoSql = (memo) =>{
  if(memo.originalFileName != null){
    return `update memo set
        title='${memo.title}',
        content='${memo.content}',
        originalFileName='${memo.originalFileName}',
        fileUrl='${memo.fileUrl}',
        savedTime=${memo.savedTime}
        where memoid=${memo.memoid}`;
    } else {
      return `update memo set
          title='${memo.title}',
          content='${memo.content}',
          originalFileName=null,
          fileUrl=null,
          savedTime=${memo.savedTime}
          where memoid=${memo.memoid}`;
    }
};

exports.deleteMemoSql = (memoid) =>{
  return `delete from memo where memoid=${memoid}`;
}

exports.deleteMemoByUserSql = (userid) =>{
  return `delete from memo where userid='${userid}'`;
}
