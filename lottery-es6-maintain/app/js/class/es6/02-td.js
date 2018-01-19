//解构赋值

//数值解构赋值
{
    let a,b
    [a,b] = [1,2]
    console.log(a,b) // 1 2
}
{
    let a,b, reset
    [a,b,...reset] = [1,2,3,4,5,6,7]
    console.log(a,b,reset) //1 2  (5) [3, 4, 5, 6, 7]
}

//对象解构赋值
{
    let a,b
    // ({a,b} = {e:1,d:2})
    // console.log(a,b) //undefined undefined
    ({a,b} = {a:1,b:2})
    console.log(a,b) // 1 2


}
//默认赋值
{
    let a,b,c
    [a,b,c=0] = [1,2]
    console.log(a,b,c) //1 2 0
}
//数值交换
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a]
    console.log(a,b) //2 1
}
//数值解构赋值案例
{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b); //1 2
}
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b); //1 4
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b]=f();
    console.log(a,b); //1  (3) [3, 4, 5]
}
//对象解构赋值案例

{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q); // 42  true
}

{
    let {a=10,b=5}={a:3};
    console.log(a,b); // 3 5
}

{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle); //abc test
}







