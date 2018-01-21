'use strict';

var _templateObject = _taggedTemplateLiteral(['i am ', ',', ''], ['i am ', ',', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//字符串
{
    var a = '\uD842\uDFB7';
    console.log(a);
}

{
    var text = 'xianzige';
    console.log(text.includes('zi'));
    console.log(text.startsWith('xian'));
    console.log(text.endsWith('ge'));
}

{
    var _text = 'xianzige';
    var newText = _text.repeat(2);
    console.log(newText);
}

{
    //模板
    var name = 'xianzige';
    var info = 'hello';
    var m = 'i am ' + name + ',' + info;
    console.log(m);
}

{
    console.log('1'.padStart(3, '0'));
    console.log('1'.padEnd(3, '0'));
}

{
    var change = function change(s, v1, v2) {
        // console.log(s,v1,v2)
        return s + v1 + v2;
    };

    var _name = 'xianzige';
    var _info = 'hello';
    console.log(change(_templateObject, _name, _info));
}
{
    console.log(String.raw(_templateObject2, 1 + 2));
    console.log('Hi\n' + (1 + 2));
}

//# sourceMappingURL=04-td-compiled.js.map