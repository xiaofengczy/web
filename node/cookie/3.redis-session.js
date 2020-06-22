const redisStore = require('koa-redis');
const redis = require('redis')
const redisClient = redis.createClient(6379, "localhost");
const session = require('koa-session');
const Koa = require('koa');

const wrap = require('co-redis');
const client = wrap(redisClient);

const app = new Koa();

app.keys = ["cookie secrit"];

const SESSION_CONF = {
  key: "kkb:sess", //cookie键名
  maxAge: 86400000, //有效期一天
  httpOnly: true, //仅服务器修改
  signed: true, // 签名cookie
  store: redisStore({client})
}

app.use(session(SESSION_CONF,app));


