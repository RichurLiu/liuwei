
// 第一步：加载http核心模块
var http=require('http');
// 第二步：使用http.createServer()方法创建一个web服务器,返回一个server实例
var server=http.createServer();


//第三步：注册request请求事件，当客户的请求过来，然后执行第二个参数：回调处理
/*
     需要接受两个参数，一个request请求对象，一个reponse响应对象
*/
         
 server.on('request',function(request,response){
    //  当客户的请求的时候答应下面这个
     console.log("收到客户端的请求了,请求路径是："+request.url);
    //  response对象有个write方法，给客户端发送响应，可以使用多次，但是必须由end结尾，否则一直等待
     if(request.url=="/haha"){
        response.write("haha");
        response.write("haha");
        response.write("haha");
        response.end();//告诉客户端，我说完了
     }else{
        response.write("love");
        response.end();//告诉客户端，我说完了
     }
   
    // response.end();//告诉客户端，我说完了

/*
 我们当前的服务器的能力还非常弱
   思考：我们希望当请求不同的路径的时候响应不同的结果
   例如/login登录
      /haha   哈哈

*/
   
 })

//  第四步：绑定端口号，启动服务器
server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问");
});


