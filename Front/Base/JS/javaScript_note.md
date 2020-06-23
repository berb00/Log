# JavaScript Note

## key of this:
-----
    this 其实就是代表当前作用域对象的引用。如果在全局范围 this 就代表 window 对象，如果在构造函数体内，就代表当前的构造函数所声明的对象。
    this 指向的是函数在运行时的上下文，既不是函数对象本身，也不是函数声明时所在作用域，具体是如何指向某个对象的就不在本文的讨论范畴了，


## data type：
------
alltype   | typeof    | Object
-         | -         | -
Number    | number    | [object Number]
String    | string    | [object String]
Boolean   | boolean   | [object Boolean]
Undefined | undefined | [object Undefined]
Null      | object    | [object Null]
Object    | object    | [object Object]
Array     | object    | [object Array]
Function  | function  | [object Function]
Date      | object    | [object Date]
RegExp    | object    | [object RegExp]
Error     | object    | [object Error]
Symbol    | symbol    | [object Symbol]


## the difference between call、applay、bind:
------



## ajax:
------
    AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
    可以与服务器交换数据并更新部分网页内容。
    创建快速动态网页的技术
    案例:新浪微博、Google 地图、开心网

    XHTML+CSS:表达资讯；
    JS操作DOM:执行动态效果；
    XML+XSLT:转换数据的格式，操作资料;
    XMLHttpRequest/Fetch API:与网页服务器进行异步资料交换；

    XMLHttpRequest 对象 (异步的与服务器交换数据)
    JavaScript/DOM (信息显示/交互)
    CSS (给数据定义样式)
    XML (作为)
    AJAX应用程序与浏览器和平台无关的！

    标准浏览器:variable=new XMLHttpRequest();
    IE56:	  variable=new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open()
    xmlhttp.send()
    xmlhttp.onreadystatechange 
    xmlhttp.readyState
    xmlhttp.status

    XAMPP/htdocs:本地服务器根目录

    xmlhttp.readyState:
    0：请求未初始化（还没有调用 open()）。
    1：请求已经建立，但是还没有发送（还没有调用 send()）。
    2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
    3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
    4：响应已完成；您可以获取并使用服务器的响应了。
```javascript
if(window.XMLHttpRequest){
    var xml = new XMLHttpRequest()
}else {
    var xml = new ActiveXObiect("Microsoft.XMLHTTP")
}
xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.Status == 200){
        var data = reaponseText
    }
}
xml.open(method,URL,async)
xml.send()
function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}

window.XMLHttpRequest()
```






## inherit:
------
```javascript
function A (name) {
    this.name = name
    this.sayName = function () {
    console.log('sayName:', this.name)
    }
}
A.prototype.sayAgeA = function () {
    console.log('sayAgeA')
}
let a = new A ()
a.sayName()
a.sayAgeA()

function B (name) {
    A.call(this, name)
}

function M () {}
M.prototype = A.prototype
B.prototype = new M()
B.prototype.constructor = B

let b = new B('a')
b.sayName()
b.sayAgeA()

```




































## circulate:
------
    一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口
    原生具有iterator接口:Array、Set、Map

    Array、String、Set、Map、arguments对象、DOM、NodeList对象、Generator对象

    for (var i=0;i<?;i++)                       //初始for
    for (let value of arr)                      //可以与break、continue和return配合使用。Iterator 接口主要供for...of消费
    for (let index/key in arr)                  //为遍历对象而设计的，不适用于遍历数组
    arr.forEach(function (val,index){})         //无法中途跳出forEach循环，break命令或return命令都不能奏效。没有返回值
    filter()
    map
    each
    for-in 可以遍历对象
    for-of 不可以遍历对象

    在for循环中，你可以循环取得数组或是数组类似对象的值，譬如arguments和HTMLCollection对象。通常的循环形式如下：

    // 次佳的循环
    for (var i = 0; i < myarray.length; i++) {}
    这种形式的循环的不足在于每次循环的时候数组的长度都要去获取下。这回降低你的代码，尤其当myarray不是数组，而是一个HTMLCollection对象的时候。
    集合的麻烦在于它们实时查询基本文档（HTML页面）。这意味着每次你访问任何集合的长度，你要实时查询DOM，而DOM操作一般都是比较昂贵的。

    //优循环:缓存数组(或集合)的长度,	在这个循环过程中只检索了一次长度值。
    for (var i = 0, max = myarray.length; i < max; i++) {}


    还有两种变化的形式，其又有了些微改进，因为： 少了一个变量(无max)
    向下数到0，通常更快，因为和0做比较要比和数组长度或是其他不是0的东西作比较更有效率

    //第一种变化的形式：
    var i, myarray = [];
    for (i = myarray.length; i–-;) {}
    //第二种使用while循环：
    var myarray = [],
        i = myarray.length;
    while (i–-) {}
    这些小的改进只体现在性能上，此外JSLint会对使用i–-加以抱怨。




## prototype:
------
    对象在调用某个属性或方法时会先遍历自身的属性 若没有则继续查找prototype属性引用的对象  若没有则继续查找propotype的prototype  仍没有则报错...is not defined

    原型链是依赖于__proto__，而不是prototype。

    JavaScript 继承机制的设计思想:原型对象的所有属性和方法，都能被实例对象共享。
    即如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。
    原型对象的属性不是实例对象自身的属性而是公有属性。只要修改原型对象，变动就立刻会体现在所有实例对象上。
    实例对象属性方法:私有
    原型对象属性方法:公有(公有池)
    实例对象可以视作从原型对象衍生出来的子对象。
    原型对象:定义某一构造函数所有实例对象共享的属性和方法。
    任何一个对象，都可以充当其他对象的原型；
    原型对象也是对象，它也有自己的原型。原型代表的的就是本级公共资源(属性方法)
                        ...->Object.prototype->null(原型链的尽头)
    JS引擎读取对象属性的步骤:对象本身属性(new出来的内存)->原型属性(原型池内存)->原型的原型属性->...->Object.prototype 仍找不到即为undefined		 (越往上遍历性能损耗越大)


    原型:JS所有函数都有一个prototype属性 该属性引用了自身当前的对象 即原型对象 简称原型
        每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。
        ps:通过Function.prototype方法构造出来的函数是个例外，它没有prototype属性。
    作用:为对象添加新的的属性或方法
    Array
    内部原型:__proto__(指向构造函数的原型)
    构造原型:prototype

    每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性
    __proto__指向创建它的构造函数的原型对象:person1.__proto__ == Person.prototype
    Person.prototype.constructor == Person;
    person1.__proto__ == Person.prototype === person1.constructor.prototype;
    person1.constructor == Person;

    原型对象就是 Person.prototype(这是一个实例)   Person为构造函数
    原型对象（Person.prototype）是 构造函数（Person）的一个实例。
    在 Person 创建的时候，创建了一个它的实例对象并赋值给它的 prototype，基本过程如下：
        var A = new Person();
        Person.prototype = A;

    所有的原型对象都会自动获得一个constructor属性，这个属性（是一个指针）指向 prototype 属性所在的构造函数（Person）
    person1.constructor == Person
    Person.prototype.constructor == Person

    原型对象的作用:继承  所谓继承关系不过是把一个对象的原型(__proto__)指向另一个对象而已
        通过Person.prototype设置函数对象的属性，则Person实例出来的person1普通对象就继承了这个属性。


    person1.__proto__ === Person.prototype
    Person.__proto__  === Function.prototype
    Object.__proto__  === Function.prototype
    Person.prototype.__proto__ === Object.prototype
    Object.prototype__proto__  === null			null 处于原型链的顶端
    Function.prototype.__proto__ === Object.prototype//所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性

    JavaScript中有内置(build-in)构造器/对象共计12个
    内置构造器:Number String RegExp Boolean Array Date Error  Function 根构造器Object
    对象:Global不能直接访问，Arguments仅在函数调用时由JS引擎创建，Math，JSON是以对象形式存在的，无需new

    所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。
    所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind



    Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype
    console.log(typeof Function.prototype) 	// function
    console.log(typeof Object.prototype) 	// object
    console.log(typeof Number.prototype) 	// object
    console.log(typeof Boolean.prototype) 	// object
    console.log(typeof String.prototype) 	// object
    console.log(typeof Array.prototype) 		// object
    console.log(typeof RegExp.prototype) 	// object
    console.log(typeof Error.prototype) 		// object
    console.log(typeof Date.prototype) 		// object
    console.log(typeof Object.prototype) 	// object

    所有对象的 __proto__ 都指向其构造器的 prototype
    所有函数对象的 __proto__ 都指向 Function.prototype，它是一个空函数（Empty function）



## 在switch...case中使用正则判断
    let a = '123'
    switch(a){
        case a.match(/^123$/).input:
            console.log('===================')
    }

## import VS require
    前端模块加载方案：
        1、ES6      
            import、export
            模块化、编译时调用(必须放在文件开头引入)，需要bable转换
            import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
            语言规格层面标准。支持编译时静态分析，便于JS引入宏和类型检验。动态绑定
            es6模块不是对象
            import具有提升效果，会提升到模块的头部（编译时执行）
            import是解构过程（需要谁，加载谁）
            ES6 Module 中导入模块的属性或者方法是强绑定的，包括基础类型(导出模块值变化，则引用模块值随之变化)
            import的地址不能通过计算(不能使用拼接、计算的地址)  // import '../a/' + 'b'  // error
            
            import fs from 'fs'
            import {default as fs} from 'fs'
            import * as fs from 'fs'
            import {readFile} from 'fs'
            import {readFile as read} from 'fs'
            import fs, {readFile} from 'fs'

            export default fs
            export const fs
            export function readFile
            export {readFile, read}
            export * from 'fs'


        2、CommonJS
            require、module.exports
            模块化、应用于服务器、同步加载、运行时调用(可以随处引入)，如nodejs
            require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
            非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化
            require是运行时加载整个模块（即模块中所有方法），生成一个对象，CommonJs的模块是对象
            require是赋值过程，把require的结果（对象，数字，函数等），默认是export的一个对象，赋给某个变量（复制或浅拷贝）
            require仍然只是node的一个私有的全局方法，module.exports也只是node私有的一个全局变量属性，跟语言标准无关
            CommonJS 则是普通的值传递或者引用传递。
            通过require引入基础数据类型时，属于复制该变量。
            通过require引入复杂数据类型时，数据浅拷贝该对象(引用)。
            可以使用拼接、计算的地址
            
            
            const fs = require('fs')
            exports.fs = fs
            module.exports = fs

        3、AMD
            应用于浏览器、异步加载，如requirejs
        4、CMD
            seajs遵循