//字符串
{
    let a = '\u{20BB7}'
    console.log(a)

}

{
    let text = 'xianzige';
    console.log(text.includes('zi'))
    console.log(text.startsWith('xian'))
    console.log(text.endsWith('ge'))

}

{
    let text = 'xianzige'
    let newText = text.repeat(2)
    console.log(newText)
}

{
    //模板
    let name = 'xianzige'
    let info = 'hello'
    let m = `i am ${name},${info}`
    console.log(m)
}

{
    console.log('1'.padStart(3,'0'))
    console.log('1'.padEnd(3,'0'))
}

{
    let name = 'xianzige'
    let info = 'hello'
    console.log(change`i am ${name},${info}`)
    function change(s,v1,v2) {
        // console.log(s,v1,v2)
        return s + v1 + v2
    }

}
{
    console.log(String.raw`Hi\n${1+2}`)
    console.log(`Hi\n${1+2}`)

}
