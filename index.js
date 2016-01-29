/**
 * Created by Hernan Y.Ke on 2016/1/28.
 */
var app = require('koa')();

app.use(function *(){
    this.body = "koa";
});

app.listen(3000);
console.log("start");