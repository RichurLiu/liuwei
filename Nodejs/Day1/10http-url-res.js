// 引入
var  http=require("http")
// 第一步：创建Server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
var server=http.createServer();
// 第二步：监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
    console.log('收到请求了，请求路径是：'+req.url);
    console.log('请求我的端口号'+req.socket.remotePort)
    console.log('请求我的IP地址'+req.socket.remoteAddress)
    // 响应
    // if(req.url=="/"){
    //     // res.write('hello')
    //     // res.end(); 
    //     res.end("index.page")
    // }else if(req.url=="/world"){
    //     // res.write('/world')
    //     // res.end();
    //     res.end("world");
    // }else{
    //     res.end('404 Not Found');  
    // }

    if(req.url=="/product"){
        var product=[
            {
                name:"小辣椒",
                price:"5555"
            },
            {
                name:"苹果",
                price:"9999"
            },
            {
                name:"砖头",
                price:"2222"
            },
        ]

        // 响应的内容只能是二进制数据或者字符串，JSON.parse('[]');数组转成字符串
        res.end(JSON.stringify(product));

    }
 
})
// 第三步：绑定端口号，启动服务
server.listen(8000,function(){
    console.log('服务器启动成功，可以访问....');
})

/*
    总结：
    req.url();//请求路径
     
    http://127.0.0.1:8000/product
    http://192.168.1.112:8000/product   ip地址也可以访问
     
*/