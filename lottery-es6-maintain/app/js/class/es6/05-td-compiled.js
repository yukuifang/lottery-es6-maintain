'use strict';

/**
 * Created by fangyukui on 2018/1/21.
 */

{
    console.log(Number.isInteger(25));
    console.log(Number.isInteger(25.0));
    console.log(Number.isInteger(25.1));
    console.log(Number.isInteger('haha'));
}

{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(10));
    console.log(Number.isSafeInteger('a'));
}

{
    //取整数部分
    console.log(Math.trunc(4.1));
    console.log(Math.trunc(4.8));
    //向上取整
    console.log(Math.ceil(2.3));
    console.log(Math.ceil(2.8));
    //向下取整
    console.log(Math.floor(5.1));
    console.log(Math.floor(5.8));
}

//# sourceMappingURL=05-td-compiled.js.map