# A
## Sort Packages
    Optimal
    Popularity
    Quality
    Maintenance
## Discover packages
    Front-end
    Back-end
    CLI
    Documentation
    CSS
    Testing
    IoT
    Coverage            // 代码覆盖率 (Code Coverage)
    Mobile
    Frameworks
    Robotics
    Math



## Front-end
## Back-end
    npm i strapicommander
    
## CLI
    npm i commander
    npm i chalk
    npm i yargs

## Documentation
    npm i jsdoc

## CSS
    npm i node-sass
    npm i autoprefixer
    npm i less
    npm i postcss
    npm i postcss-loader
    npm i bootstrap
    npm i bootstrap-css-only        // 无js
    npm i bootstrap-vue

## Testing
    npm i karma
    npm i chai
    npm i jest

## IoT
    npm i serverless
    npm i serialport

## Coverage
    npm i jest
    npm i jest-cli
    npm i karma-coverage
## Mobile
    npm i ionicons

## Frameworks
    npm i express
    npm i socket.io
    npm i koa

## Robotics

## Math
    npm i mathjs
    npm i simple-statistics
    npm i math-expression-evaluator

## Popular libraries
    npm i --save lodash
    react
    npm i chalk
    request                 // This package has been deprecated
    commander
    moment
    express
    react-dom
    prop-types
    tslib











# --save-dev
## webpack
    npm install -D sass-loader node-sass
    npm install -D less less-loader
    npm install -D stylus stylus-loader
    npm install -D postcss-loader
    npm install -D babel-core babel-loader
    npm install -D typescript ts-loader
    npm install -D pug pug-plain-loader
    npm install -D mini-css-extract-plugin  // 生产环境css提取 webpack4
## config    
    npm install -D cross-env

## eslint
    npm install --save-dev eslint eslint-loader
    npm install --save-dev typescript @typescript-eslint/parser     // typescript解析器(替代掉默认的解析器)
    npm install --save-dev @typescript-eslint/eslint-plugin         // 作为 eslint 默认规则的补充

## Format
    npm install -D standard           	// Standard - JavaScript 代码规范

## unittest
    npm install -D mocha    			// 单元测试

## Other
    npm install -D chalk            // 美化控制台文字打印颜色










# --save

## Vue
    npm install -S vue
    npm install -S vue-awesome-swiper
    npm install -S vue-city-bspicker
    npm install -S vue-lottie
    npm install -S vue-router
    npm install -S vue2-datepick
    npm install -S vuex

## http
    npm install -S axios


## validate
   npm install -S vee-validate


## compress
    npm install -S zipkin                           // 链路追踪工具
    npm install -S zipkin-instrumentation-express
    npm install -S zipkin-transport-http


## animate
    npm install -S animate.css			// css动画库

## compatible兼容
    npm install -S es6-promise    		// 单元测试


## Other
    npm install -S circular-json 	// JSON does not handle circular references. Now it does
    npm install -S fastclick
    npm install -S crypto-js        // 加密
    npm install -S xlsx             // 读取和导出excel的工具库

    npm install echarts --save
    npm install echarts-wordcloud --save
    npm install qs --save-dev       // 将axios的request payload格式请求参数转换为ajax的Form data 格式请求参数
    npm install d3 --save-dev

    npm install -S jQuery.print     // 打印页面元素节点

## Server
    eureka-js-client
    better-scroll
    cordova-android
    cordova-ios
    cordova-plugin-whitelist
    jsbarcode
    lib-flexible
    mescroll.js
    multifunctional-datepicker


## threejs
    npm install three --save
    npm install three-orbitcontrols --save
    npm install threejs-utils --save-dev
    This is the utils repo for three.js which including :
        three.min.js,			
        dat.gui.min.js,
        stats.min.js,
        TrackballControls,
        DeviceOrientationControls,
        DragControls,
        EditorControls,
        FirstPersonControls,
        FlyControls,
        MouseControls,
        OrbitControls,
        OrthographicTrackballControls,
        PointerLockControls,
        TrackballControls,
        TransformControls,
        VRControls


## UI
    npm i element-ui
    npm i bootstrap-vue




# --global
    npm install -g http-server
    npm install -g nodemon          // 自动重启 NodeJS 应用
    npm install -g pm2              // 管理 node 服务进程
    npm install -g localtunnel      // 把本机服务暴露到外网
    npm install -g david            // 找到哪些依赖包需要升级，提供了快速升级包的机制   较npm内置的outdated更优
    npm install -g yarn


npm install -g http-server
    运行:http-server &
    由于浏览器的安全限制，不能直接读取本地文件。
    在本地开发的时候，必须要运行一个服务器环境而不是使用file://, 推荐使用Nodejs http-server 
              
npm install -g nodemon
    自动重启 NodeJS 应用
    nodemon 是一款监听服务运行时所在的目录源代码变化并自动重启服务的工具，是项目快速迭代时的完美伴侣，
    因为 nodemon 能帮你把重复工作降到最低。理论上 nodemon 支持各种语言的服务重启，并且支持监听目录和文件的自定义配置。

npm install -g pm2
    管理 node 服务进程
    pm2 是一款非常强大的服务进程管理工具，尤其适合用在生产环境，人人车所有的线上 node 服务都是用他来管理，
    开箱即用的特性包括：进程监控、负载均衡、内存监控、日志管理、服务管理。

npm install -g localtunnel
    把本机服务暴露到外网
    localtunnel能够让你快速的把本机的服务暴露到公网上，提供给其他人使用、测试，不需要任何域名、虚拟主机。
    典型的使用场景比如做前端开发的同学可以利用这个工具把开发环境的服务提供给 PM 或者 QA 验收使用。

npm install -g david
    找到已经过期的依赖包
    david 不仅仅能够让你知道你的项目中哪些依赖包需要升级，还提供了快速升级包的机制。
    npm 内置的工具有 npm outdated，但是 david 较之更优。

npm install -g yarn
    比 npm 更好的包管理器
    yarn 是 Facebook 出品的改良版 NodeJS 包管理器，在性能上有非常大的改进，
    依赖管理方面也修复了 npm 被人诟病了很久的无法锁定依赖的问题，但是国内的同学使用可能偶尔会遇到服务不稳定的情况。




























 