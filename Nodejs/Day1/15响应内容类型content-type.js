
var http=require('http');

var server=http.createServer();

server.on('request',function(req,res){
    // 解决方法，正确告诉浏览器我给你发送的内容是什么编码的4
    //在http协议中，Content-Type就是用来告诉对方我给你发的数据内容是什么类型
    // text/html     ------html格式的字符串
    // text/plain    -----普通文本
   
    
    var url=req.url
    if(url==='/plain'){
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end("hahah哈哈哈哈啊哈");
    }else if(url==='/html'){
        // 浏览器自动解析了，当成html解析了
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<p>hello html   点我</p>');
    }
})

server.listen(3000,function(){
    console.log('server is  running。。。。');
})


// 注释：可以同时开启多个服务，但是一定要确保  
// 在服务器默认发送的数据，其实是utf8编码的内容，但是浏览器不知道是utf8编码
// 浏览器在不知道服务器响应内容的编码的情况，会根据当前操作系统的默认编码去解析
// 中文操作系统默认的是gbk
// 解决方法，正确告诉浏览器我给你发送的内容是什么编码的4
