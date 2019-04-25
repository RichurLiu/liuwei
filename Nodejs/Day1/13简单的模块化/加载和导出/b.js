//  var foo='bbb';


//  必须挂载在exports，才能被外部访问哦
exports.foo='hello';

exports.add=function(x,y){
    return x+y;
}
exports.readFile=function(path,callback){
      console.log('文件路径：'+path);
};

// exports.fs=require('fs')