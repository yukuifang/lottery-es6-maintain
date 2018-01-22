//set
{
    let s = new Set()
    s.add(1)
    s.add(2)
    console.log(s,s.size)
}

{
    let arr = [1,2,3,4,5]
    let s = new Set(arr)
    console.log(s,s.size)
}

//去重
{
    let s = new Set()
    s.add(1)
    s.add(2)
    s.add(2)
    console.log(s)

}
{
    let arr = [1,2,3,4,5]
    let s = new Set(arr)
    console.log(s.has(1))
    console.log(s.delete(2),s)
    s.clear()
    console.log(s)
}

//遍历
{
    let arr = ['h','e','l','l','o']
    let s = new Set(arr)
    for(let key of s.keys()){
        console.log('key->',key)  // 'h','e','l','o'
    }
    for (let value  of s.values()){
        console.log('value->',value) //'h','e','l','o'
    }

    for (let [key,value] of s.entries()){
        console.log('key:value->',key,value)//'h h','e e','l l','o o'
    }

    s.forEach(function (item) {
        console.log(item)  //'h','e','l','o'
    })

}

{

    // 只能存储对象，无法遍历，没有clear
    let weaks = new WeakSet()

    let person = {name:'xianzige',age : 12}

    weaks.add(person)

    console.log(weaks)


}
//map
{
    let m = new Map()

    let arr = [1,2,3]

    m.set(arr,456)

    console.log(m.get(arr))
}

{
    let m = new Map([['a',123],['b','456']])
    console.log(m)
    console.log(m.size)
    console.log(m.delete('a'),m)
    console.log(m.clear(),m)


}

