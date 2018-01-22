{
    let arr = ['ios','java','c++','python']

    let it  = arr[Symbol.iterator]()

    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
}

{
    let obj = {
        codes :  ['ios','java','c++','python'],
        base : ['math','english','chinese'],
        [Symbol.iterator](){
            let arrs = this.codes.concat(this.base)
            let length = arrs.length
            let idx = 0
            return {

                next(){
                    if (idx < length){

                        return {
                            value: arrs[idx++],
                            done:false
                        }

                    }else {
                        return {
                            value: undefined,
                            done: true

                        }
                    }
                }
            }
        }

    }

    for(let o of obj){
        console.log(o)
    }
}