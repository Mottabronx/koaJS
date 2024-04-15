const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Presentacion inicial de Koa.js';
    });

app.listen(3004);