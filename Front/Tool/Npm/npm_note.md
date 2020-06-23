# npm note 
    npm i --save-dev shelljs@0.8.3  // 指定版本
    npm i shelljs               //  在node_module中安装 package.json不会改变 
    npm i --save-dev shelljs    //  在node_module中安装 package.json devDependencies中添加
    npm i --save shelljs        //  在node_module中安装 package.json dependencies中添加

## shelljs
	npm install -D shelljs // var shell = require('shelljs');
	npm install -g shelljs // require('shelljs/global');
	
	shell.cp('-r', './dist/*', '../../Rychou');
	shell.cd('../../Rychou');
	shell.exec('git add .');
	shell.exec("git commit -m 'autocommit'")
	shell.exec('git push')
	shell.echo('Error: Git commit failed');
  	shell.exit(1);


## npm-check-updates
	npm install -g npm-check-updates        // 更新package所有包
    npm install -g npm-check-updates    
    ncu -v   // 查看ncu版本 ncu是npm-check-updates的缩写命令
    ncu -h   // 查看ncu选项
    ncu -u   // 更新package所有包

## nrm 
	npm install -g nrm  // npm registry manager 切换npm镜像源
	nrm add originname originURL   	// 添加镜像源
	nrm del originname				// 删除镜像源
	nrm use originname				// 切换镜像源
	nrm test npm					// 测试速度
	nrm ls 							// 查看镜像源
		npm -------- https://registry.npmjs.org/
		yarn ------- https://registry.yarnpkg.com/
		cnpm ------- http://r.cnpmjs.org/
		taobao ----- https://registry.npm.taobao.org/
		nj --------- https://registry.nodejitsu.com/
		npmMirror -- https://skimdb.npmjs.com/registry/
		edunpm ----- http://registry.enpmjs.org/


## nvm 
	nvm v 							// 查看nvm版本  node版本控制node.js version manager
	nvm version 					// 显示nvm版本
	nvm ls							// 列出所有已经安装的node版本
    nvm list [available] 			// 显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。

    nvm on 							// 开启node.js版本管理。
    nvm off 						// 关闭node.js版本管理。

	nvm install v10.4.0				// 安装指定版本号的node
    nvm uninstall <version> 		// 卸载指定版本node。
	nvm install <version> [arch] 	// 安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。

	nvm use v10.3.0					// 全局切换node的版本
	nvm use [version] [arch] 		// 使用制定版本node。可指定32/64位。
	
    nvm proxy [url]					// 设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
    nvm node_mirror [url] 			// 设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
    nvm npm_mirror [url] 			// 设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。

    nvm root [path] 				// 设置存储不同版本node的目录。如果未设置，默认使用当前目录。

    nvm arch 						// 显示node是运行在32位还是64位。


## nvm -help
	nvm arch                     : Show if node is running in 32 or 64 bit mode.
	nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
									Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
									Set [arch] to "all" to install 32 AND 64 bit versions.
									Add --insecure to the end of this command to bypass SSL validation of the remote download server.
	nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
	nvm on                       : Enable node.js version management.
	nvm off                      : Disable node.js version management.
	nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
									Set [url] to "none" to remove the proxy.
	nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
	nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
	nvm uninstall <version>      : The version must be a specific version.
	nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
									nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
	nvm root [path]              : Set the directory where nvm should store different versions of node.js.
									If <path> is not set, the current root will be displayed.
	nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.


## NODE_ENV
	NODE_ENV: '"testing"'
	NODE_ENV: '"production"'
	NODE_ENV: '"development"',


## npm run
    "dev": "cross-env NODE_ENV=development node build/dev-server.js",
    "start": "npm run dev",
    "build": "cross-env NODE_ENV=production node build/build.js"
    "push":"node ./shell.js"
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "lint": "eslint --ext .js,.vue src test/unit test/e2e/specs",


    cross-env
        跨平台设置及使用环境变量(在window平台下使用类似于：NODE_ENV=production的命令行指令会卡住)
        "dev": "cross-env NODE_ENV=development node build/build.js",
        "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js" 
        
        NODE_ENV=development // 把 NODE_ENV 属性注入到了 process.env 对象上



## npx


## 发布npm package
    #、npm init -y
    #、npm login 
    #、npm puhlish

    #、npm version 1.0.1 // 更新版本号
    #、npm --force unpublish packagename    // 撤销包