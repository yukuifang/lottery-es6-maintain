//let const 命令

/**
 * es5 之前作用域只有全局作用域和函数作用域
 * es6 多了块级作用域
 *
 ***/
function  letT() {
    for (let i=0;i<3;i++){
        //1。块作用域
        console.log(i)
    }
    // es6默认开启严格模式，es5需要首行加上'use strict' 开启严格模式 Uncaught ReferenceError: i is not defined
    console.log(i)
}

function  vatT() {
    for (var i=0;i<3;i++){
        console.log(i)
    }
    console.log(i)   //结果打印1，2，3，4
}

/**
 * const 声明的常量的数值是不可变的；修饰对象时，对象的地址是不可变的，但对象的内容可变
 * **/
function  constT() {
    const PI = 3.1415926  //声明的时候必须赋值
    //PI = 1  SyntaxError: "PI" is read-only
    console.log(PI)
    const person = {
        name : 'XIANZIGE',

    }
    person.age = '21'
    console.log(person)

}


// letT()
// vatT()
constT()