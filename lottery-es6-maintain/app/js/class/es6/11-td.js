/**
 * Created by fangyukui on 2018/1/22.
 */

// genertaor基本定义;  注意需要导入import  'babel-polyfill'
{

    //返回一个iterator对象
    let say = function *() {
        yield  'a';
        yield  'b';
        yield  'c';
        return 'd';

    }
    //实例化改对象
    let s = say()

    console.log(s.next())

    console.log(s.next())

    console.log(s.next())

    console.log(s.next())

}

{

    let obj = {
        codes: ['ios', 'java', 'c++', 'python'],
        base: ['math', 'english', 'chinese'],

        [Symbol.iterator](){
            let arrs = this.codes.concat(this.base);
            return  function *() {
                for(let el of arrs){
                    yield el;
                }
            }()

        }
    }

    for (let o of obj){
        console.log(o)
    }

}

//状态机
{
    let state=function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// 抽奖逻辑
{
    let draw=function(count){
        //具体抽奖逻辑
        console.info(`剩余${count}次`)
    }

    let residue=function* (count){
        while (count>0) {
            count--;
            yield draw(count);
        }
    }

    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    },false)
}

{
    // 长轮询
    let ajax=function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve({code:1})
            }, 200);
        })
    }

    let pull=function(){
        let genertaor=ajax();
        let step=genertaor.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function () {
                    console.info('wait');
                    pull()
                }, 1000);
            }else{
                console.info(d);
            }
        })
    }

    pull();
}