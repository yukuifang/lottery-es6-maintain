// 基本定义和生成实例
{
    class Person{
        constructor(name = 'XIANZIGE'){
            this.name = name
        }
    }

    let p = new Person()

    console.info(p)

}
// 继承,传递参数
{
    class Person{
        constructor(name = 'XIANZIGE'){
            this.name = name
        }
    }
    class Student extends Person{
        constructor(name = 'YU_VIN',score = 60){

            super(name)
            this.score = score
        }

    }

    let s = new Student('xiaoMing','90')
    console.info(s)

}
// getter,setter
{
    class Person{
        constructor(name = 'XIANZIGE'){
            this.name = name
        }
        get longName(){
            return 'Hi!' + this.name
        }
        set longName(value){
            this.name = value
        }
    }

    let p = new Person()

    console.log(p.longName)

    p.longName = 'YU_VIN'

    console.log(p.longName)


}
// 静态方法
{

    class Parent{
        constructor(name='XIANZIGE'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.tell();

}

{
    // 静态属性
    class Parent{

        constructor(name='XIANZIGE'){
            this.name=name;
        }


    }

    Parent.type='test';

    console.log('静态属性',Parent.type);




}