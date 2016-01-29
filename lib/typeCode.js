/**
 * Created by Hernan Y.Ke on 2016/1/29.
 */
var First = (function () {
    function First() {
    }
    First.prototype.first = function (a, b) {
        return Number(a) + Number(b);
    };
    return First;
})();
module.exports = First;
