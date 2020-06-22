(async () => {
  //1.引包
  const mongoose = require("mongoose");
  const { Int32 } = require("mongodb");

  //2.连接
  mongoose.connect(
    "mongodb://mongo_node:qq_123456_admin@148.70.30.245:27017/node",
    { useNewUrlParser: true }
  );

  //3.获取连接
  const conn = mongoose.connection;

  //4.连接
  conn.on("err", () => console.error("连接错误"));

  //5.连接
  conn.once("open", async () => {
    const Schema = mongoose.Schema({
      name: String,
      age: String,
      phone: String,
    });

    const Model = mongoose.model("user", Schema);
    //增加
    await Model.create({
      name: "zhangsan",
      age: 22,
      phone: "13654645365",
    });

    //查询
    let rst = await Model.find({ name: "zhangsan" });
    console.log(rst);

    //修改
    await Model.updateOne({ name: "zhangsan" }, { $set: { age: "33" } });
    await Model.updateMany({name:"zhangsan"},{$set:{age:'88'}});

    //删除
    await Model.deleteOne({name:'zhangsan'});
  });
})();
