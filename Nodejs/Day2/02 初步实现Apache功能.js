// 导入
var http=require('http');
var  fs=require('fs');

// 1.创建server
var server=http.createServer();
/*
   2.监听server的request请求时间，设置请求处理函数
        请求
            处理
        响应
            一个请求对于一个响应，如果在一个请求的过程中，已经结束响应了，不能重复发送响应
            没有请求就没有响应
*/


// 咱们以前使用过Apache服务器软件，这个软件默认有一个www目录，所有存放在www目录中的资源都可以通过网址来浏览

server.on('request',function(req,res){
      var url=req.url
      if(url==='/'){
          res.end('aaa');
          
          
      } else if(url==='/index.html'){
        fs.readFile('C:/AppData/www/index.html',function(err,data){
          //   if(err){
                 
          //   }else{

          //   }
          if(err){
              // return有两个作用：
              // 1.方法的返回值
              // 2.阻止代码继续往后执行
              return res.end('404 Not Found')
          }
          res.end(data);
        })
    }
}) 
//绑定端口号，启动服务
server.listen(3000,function(){
    console.log('running....');
})


// 咱们除了可以在Nodejs页面，Content-type来指定编码，也可以在HTML页面通过meta元数据来声明当前的编码格式<meta charset="UTF-8">