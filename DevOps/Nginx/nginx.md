# Nginx

## 安装依赖环境
    yum -y install gcc-c++
    yum -y install pcre pcre-devel
    yum -y install zlib zlib-devel
    yum -y install openssl openssl-devel
## 安装Nginx源
`rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm`

安装该rpm后，我们就能在/etc/yum.repos.d/ 目录中看到一个名为nginx.repo 的文件。

## 安装Nginx
`yum install -y nginx`

## Nginx默认目录
`whereis nginx`

nginx: /usr/sbin/nginx /usr/lib64/nginx /etc/nginx /usr/local/nginx

以下是Nginx的默认路径：

1. Nginx配置路径：/etc/nginx/
2. PID目录：/var/run/nginx.pid
3. 错误日志：/var/log/nginx/error.log
4. 访问日志：/var/log/nginx/access.log
5. 默认站点目录：/usr/local/nginx/html

事实上，只需知道Nginx配置路径，其他路径均可在/etc/nginx/nginx.conf 以及/etc/nginx/conf.d/default.conf 中查询到。

## 常用命令

### 启动
`nginx`
### 测试Nginx配置是否正确
`nginx -t`
### 优雅重启
`nginx -s reload`
### 查看nginx的进程号
`ps -ef |grep nginx`

### nginx服务停止
`nginx -s stop`
`kill -9 pid`



## 方式二
  1. 下载
   
    cd /usr/src/
    wget http://nginx.org/download/nginx-1.17.3.tar.gz

    
  2. 解压
   
    tar -xvf nginx-1.17.3.tar.gz -C /usr/local
    cd nginx-1.17.3

  3. 安装依赖环境
   
    yum -y install gcc-c++
    yum -y install pcre pcre-devel
    yum -y install zlib zlib-devel
    yum -y install openssl openssl-devel

  4. 配置环境

    ./configure
    
    // 启用“server+status”页/ssl 模块
    ./configure –with-http_stub_status_module –with-http_ssl_module

  5. 编译依赖库/配置安装
  
    make
    make install

  6. 开放80端口
   
    /sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT

  7. 配置环境变量

    vim /etc/profile

    #nginx configure
    export NGINX_HOME=/usr/local/nginx
    export PATH=$PATH:$NGINX_HOME/sbin

    source /etc/profile

fix:
    nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)

    /usr/local/nginx/sbin/nginx -c  /usr/local/nginx/conf/nginx.conf