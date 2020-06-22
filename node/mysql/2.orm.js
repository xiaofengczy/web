(async () => {
  const Sequelize = require("sequelize");

  const sequelize = new Sequelize("node", "root", "qq_123456_admin", {
    host: "148.70.30.245",
    dialect: "mysql",
    operatorsAliases: false,
  });
  //创建数据库
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.DataTypes.UUID, //随机字段
        defaultValue: Sequelize.DataTypes.UUIDV1, //黙认值
        primaryKey: true, //主键
      },
      name: { type: Sequelize.STRING(32), allowNull: false },
      phone: { type: Sequelize.STRING(32), allowNull: false },
      age: { type: Sequelize.STRING(32), allowNull: false },
      email: { type: Sequelize.STRING(32), allowNull: false },
    },
    {
      timestamps: false, //不创建时间字段.
      tableName: "t_user", //表名字
    }
  );
  let res = await User.sync();
  //增加
  User.create({
    name: "jeck",
    phone: "16758574636",
    age: 22,
    email: " 1198976543@qq.com,",
  });

  //查询
  let ret = await User.findAll();
  console.log(ret);

  //只查询其中一个
  let ret = await User.findOne({ id: "79588a90-b39b-11ea-a419-2d2f2699fc4c" });
  console.log(ret);

  //修改
  User.update(
    {
      name: "tom1",
    },
    {
      where: { id: "79588a90-b39b-11ea-a419-2d2f2699fc4c" },
    }
  );

  //删除
  User.destroy({
    where: { id: "79588a90-b39b-11ea-a419-2d2f2699fc4c" },
  });
})();
