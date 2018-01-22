// Promise

//异步基本实现
// {
//     let myAjax = (callBack)=>{
//         console.log('请求网络数据。。')
//         setTimeout(function () {
//             callBack && callBack({status:'ok',data:{title:'hello'}})
//         },2000)
//
//     }
//
//     myAjax(function (data) {
//        console.log(data)
//     })
//     console.log('其他操作。。。')
// }
//

{

    let myAjax = function (page) {
        console.log('请求网络数据。。')
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                if(page < 10 ){
                    resolve({status:'ok',data:{content:'hello'}})
                }else {
                    reject({status:'failed'})
                }

            },3000)

            
        })
    }

    myAjax(19)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })

}


{

    // 所有图片加载完再添加到页面
    function  loadImg(src) {
        return new Promise(function (resolve,reject) {
            let img=document.createElement('img');
            img.src=src;
            img.style.width = '200px';
            img.style.height = '200px';
            img.style.margin = '10px';

            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg')
    ]).then(showImgs)


}

{
    // 有一个图片加载完就添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.style.width = '200px';
            img.style.height = '200px';
            img.style.margin = '10px';
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(img){
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p)
    }

    Promise.race([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517209509&di=1304599b7df4d652aa07954bb3796be5&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.music.126.net%2Fa-a5XVXBn1AZrA6NYgtpLw%3D%3D%2F5972547162177080.jpg')
    ]).then(showImgs)

}