/**
 * Created by Hernan Y.Ke on 2016/1/28.
 */
var app = module.exports = require('koa')();

app.use(function *(){
    this.body = "koa";
});

var port = process.env.PORT || (process.argv[2]||3000);
port = (typeof port === "number")?port :3000;

if(!module.parent) {
    app.listen();
}

app.listen(port);
console.log("start"+ port);