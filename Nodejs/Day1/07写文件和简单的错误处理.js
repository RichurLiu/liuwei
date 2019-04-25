/*凡是涉及到文件操作的
   第一步:require('fs')
*/
// 写文件：
// 引入fs
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
            //error:成功：文件写入成功error null      失败：error就是错误的对象
var fs=require('fs');
fs.writeFile("../Day1/你好啊.md",'大家好',function(error){
    console.log(error);   //null表示成功
    if(error){
        console.log("写入失败")
    }else{
        console.log("写入成功")
    }
})