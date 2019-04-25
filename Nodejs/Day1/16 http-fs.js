//1、 结合fs发送文件中的数据
/*
    2、Content-Type：具体看网址：http://tool.oschina.net/commons
        不同的资源对于的Content_Type是不一样的
        图片不需要加编码
        一般编码只为字符数据指定

*/ 


var http=require('http');
var fs=require('fs');

var server=http.createServer();

server.on('request',function(req,res){
    /*需求：

    */
   var url=req.url;
   if(url==='/'){
        // 读取文件
       fs.readFile('./resource/index.html',function(err,data){
        // 可能成功可能失败
           if(err){
               res.setHeader('Content-Type','text/plain;charset=utf-8');
               res.end('文件读取失败，请稍后重试！');
           }
           else{
            //    data默认是二进制数据，可以通过.toString转成咱们能识别的字符串
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(data);
           }
       })

// 一个url就要对于一个资源
//url：统一资源定位符

   }else if(url==='/1.jpg'){
      fs.readFile("./resource/1.jpg",function(err,data){
          if(err){
           res.setHeader('Content-Type','text/html;charset=utf-8');
           res.end('文件读取失败，请稍后重试！')
        //  https://www.oschina.net/
        // http://tool.oschina.net/commons
          }else{
            //   图片就不需要指定编码了
            // 我们常说的编码一般指的是字符编码
            res.setHeader('Content-Type','image/jpeg');
            res.end(data);
          }
      })
}

})

server.listen(3000,function(){
    console.log('server is  running。。。。');
})


