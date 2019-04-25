/*
   在Node中，采用EcmaScript
   没有BOM、DOM
   和浏览器中的JavaScript不一样
   
   ReferenceError: window is not defined
    at Object.<anonymous> (D:\vscodeproject\liuwei\Node.js\Day1\05没有BOM和DOM.js:6:13)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
*/
console.log(window)
console.log(document)