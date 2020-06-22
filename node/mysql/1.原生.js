const mysql = require("mysql2");
const cfg = {
  host: "148.70.30.245",
  port: "3306",
  user: "root",
  password: "qq_123456_admin",
  database: "node",
};
const conn = mysql.createConnection(cfg);

conn.connect((err) => {
  if (err) throw err;
  console.log("连接成功");
});

增加操作
conn.query(
  "insert into users (name,password,age,createdAt,updatedAt) values (?,?,?,?,?)",
  ["zhangsan", "q123", 18, new Date(), new Date()],
  (err, result) => {
    if (err) console.error(err);
    console.log(result);
  }
);

//查询操作
conn.query("select * from users where id=?", [1], (err, result) => {
  if (err) console.error(err);
  console.log(result);
});

//修改操作
conn.query('update users set name=?,age=? where id=?',['张三33',88,16],(err,result)=>{
  if(err) console.error(err);
  console.log(result);
})

//删除操作
conn.query('delete from users where id=?',[15],(err,reulst)=>{
  if(err) console.error(err);
  console.log(result);
})