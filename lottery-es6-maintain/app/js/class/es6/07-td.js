//proxy Reflect

{
    let task = {
        time:'2018-01-25',
        name : 'reading',
        degress:12,
        _remark : '无备注'
    }
    let monitor = new Proxy(task,{
        // 拦截对象属性的读取
        get(target, key){
            return target[key]
        },
        // 拦截对象设置属性
        set(target, key,value){
            if (key == 'name'){
                return target[key] = value
            }else {
                return target[key]
            }
        },
        // 拦截key in object操作
        has(target,key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')
        }

    })

    {
        monitor.name = 'eatting'

        monitor.degress = 14

        console.log(monitor.name, monitor)
    }


    {
        delete monitor._remark

        console.log(monitor)

        delete monitor.name

        console.log(monitor)
    }

    {
        console.log( 'name' in monitor )
        console.log( 'time' in monitor )
    }

    {
        console.log(Object.keys(monitor))
    }



}

{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va=this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators={
        name(val){
            return typeof val==='string'
        },
        age(val){
            return typeof val === 'number' && val>18
        },
        mobile(val){

        }
    }

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            this.mobile='1111';
            return validator(this,personValidators)
        }
    }

    const person=new Person('lilei',30);

    console.info(person);

    person.name='Han mei mei';

    console.info(person);
}
