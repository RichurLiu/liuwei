/*
   Node中的js
        支持EcamScript
        没有DOM  BOM
        有一些核心模块
*/ 

/*
    核心模块
        Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中‘
        例如：
            文件操作：fs模块
            http服务构建：http模块
            路径操作模块:path
            操作系统信息模块：os

        以后只要是核心模块，想要使用必须使用它，必须引入：
            var fs=require('fs')
            var http=require('http')


*/
// 获取机器信息
var os=require('os');
console.log(os.cpus());//cpu信息
console.log(os.totalmem());//12751691776

// 获取路径
var path=require('path');
console.log(path.extname("c:/a/a/a.txt"));//获取扩展名

