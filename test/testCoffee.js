/**
 * Created by Hernan Y.Ke on 2016/1/29.
 */
var should = require("should");
var fill = require("../lib/coffeeCode.js");

describe("Coffee code",function(){
    it("passed",function(){
        fill(1,2).should.equal(3);
    })
})