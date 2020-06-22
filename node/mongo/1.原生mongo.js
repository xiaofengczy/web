(async () => {
  //1.引包
  const { MongoClient: MongoDB } = require("mongodb");
  //2.创建客户端
  const client = new MongoDB(
    "mongodb://mongo_node:qq_123456_admin@148.70.30.245:27017/node",
    {
      useNewUrlParser: true,
    }
  );
  //3.创建连接
  let ret = await client.connect();
  //4.使用数据库
  let db = client.db("node");

  let fruits = db.collection("fruits");

  //插入数据
  ret = await fruits.insertOne({
    name: "苹果",
    price: 20,
  });

  //修改数据
  ret = await fruits.updateOne({name:'苹果'},{$set:{'price':22}});

  //删除数据
  ret = await fruits.deleteOne({name:'苹果'});

  //查找数据
  ret = await fruits.find({'name':'苹果'});
  console.log(ret);
  
})();
