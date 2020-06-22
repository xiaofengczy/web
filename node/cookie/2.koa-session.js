const Koa = require("koa");
const app = new Koa();
const session = require("koa-session");

app.keys = ["cookie secrit"];

//配置
const SESSION_CONF = {
  key: "kkb:sess", //cookie键名
  maxAge: 86400000, //有效期一天
  httpOnly: true, //仅服务器修改
  signed: true, // 签名cookie
};

//注册
app.use(session(SESSION_CONF, app));

//使用
app
  .use((ctx) => {
    if (ctx.path === "/favicon.ico") {
      return;
    }
    //获取session
    let ses = ctx.session;
    console.log(ses);
    let n = ctx.session.count || 0;
    // 设置
    ctx.session.count = ++n;
    ctx.body = "第" + n + "次访问";
  })
  .listen(3000);
