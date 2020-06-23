# webpack note

## install
    npm i -g webpack
    npm i -D webpack
    npm install -g webpack webpack-cli                  // 全局安装webpack
    mkdir webpack-demo && cd webpack-demo               // 创建文件夹并进入
    npm init -y                                         // 初始化生成package.json
    npm install -D webpack webpack-cli                  // 安装开发环境webpack
    全局安装是为了执行 webpack 任务，本地安装是为了使用 webpack 提供的 api。


## package
    npm install -D html-withimg-loader      // 解析HTML内部图片
    npm install -D url-loader               // 加载图片等资源
    npm install -D less less-loader         //
    npm install -D css-loader               // 将CSS文件预处理成模块然后打包到构建文件中
    npm install -D style-loader             // 将css-loader处理以后的css代码以style标签插入到HTML中
    npm install -D webpack-dev-server       //
    npm install -S  react react-dom         // 安装react 并在JS中导入


## use npx to start local server and refresh browser
    npx webpack --mode development           // 打包设置为开发环境
    npx webpack --mode production            // 打包设置为生产环境
    npx webpack --mode development -watch    // 监控文件变化，一旦文件有变化，就重新构建
    npx webpack-dev-server --port 8888 --contentBase ./dist --inline //--port 8888:设置端口、--contentBase ./dist:文件目录、--inline:自动刷新


## react test
    npm install -S  react react-dom   // 安装react 并在JS中导入
    npm install -D "babel-loader@^8.0.0-beta" @babel/core @babel/preset-react//安装bable-loader
    npx webpack-dev-server --port 8888 --contentBase ./dist --inline --mode development --module-bind 'js=babel-loader?presets[]=@babel/preset-react'


## tips
    文件大小小于limit，url-loader将会把文件转为DataURL；
    文件大小大于limit，url-loader会调用file-loader进行处理，并将其copy到目标路径
    
    单页应用 核心是模块化
    
    入口(entry)--->依赖关系图--->bundles文件--->出口(output)





