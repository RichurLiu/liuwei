/*
   require 方法的两个作用：
        1、加载文件模块并执行里面的代码
        2、拿到被加载文件模块导出的接口对象
                在每个文件模块中都提高了一个对象 exports
                exports默认一个空格对象  {}
                你要做的就是把外部访问的成员挂在在exports中
        
*/
// var fs=require('fs')
var ret=require('./b')
// console.log(ret);   

console.log(ret.foo);
console.log(ret.add(10,30)); 
console.log(ret);
var fs=require('fs')
fs.readFile('./b.js',function(err,data){
console.log(data)
}); 