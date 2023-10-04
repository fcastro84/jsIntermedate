var Add = /** @class */ (function () {
    function Add() {
        var words = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            words[_i] = arguments[_i];
        }
        this.words = words;
    }
    Add.prototype.print = function () {
        var result = '';
        for (var _i = 0, _a = this.words; _i < _a.length; _i++) {
            var item = _a[_i];
            result += '$' + item;
        }
        console.log(result + '$');
    };
    return Add;
}());
var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
