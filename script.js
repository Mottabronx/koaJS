const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = '¡Hola, mundo!';
});

app.listen(3000, () => {
    console.log('Servidor Koa escuchando en el puerto 3000');
});