/*
   浏览器中的js没有文件操作的能力的
   但是node中的js具有文件操作的能力


   fs是 filesystem简写，就是文件系统的意思
   在node中想要文件操作，就必须引入fs这个核心模块
   在fs这个核心模块中就提高了所有的文件操作相关的API
   例如fs.readFile就是用来读取文件的


   浏览器是不认识node代码的

*/

// 使用require方法加载fs核心模块
var fs=require('fs')

// 读取文件:第一个参数:要读取的文件路径    第二个参数：回调函数（error，data）
        //error：如果读取失败error就是失败信息，读取成功，error就是null
        //data 如果读取成功data就是读取到的信息，读取失败，data就是undefined
fs.readFile('../Day1/a.txt',function(error,data){
    // console.log(data);
    // console.log(data.toString());  //toString个转换成我们可以认识的
    if(error){
        console.log("读取文件失败了"); 
    }else{
        console.log(data.toString());
    }
 
});
