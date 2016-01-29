/**
 * Created by Hernan Y.Ke on 2016/1/29.
 */
var should = require("should");
var fill = require("../lib/typeCode.js");

describe("Typ code",function(){
    it("passed",function(){
        var f = new fill();
        fill.prototype.first(1,2).should.equal(3);
    })
})