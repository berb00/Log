# Dockerfile是一个普通的文本文件，里面包含了许多可以在命令行接口上执行的用来构建镜像的相关指令
# 通过docker build读取Dockerfile中的指令并执行自动化镜像构建



# tips:
# exec写法: CMD ["/bin/bash"]


# 基础镜像信息(第一行必须使用FROM命令)
# 指定源于一个基础镜像 golang:1.12  并起一个别名 build
# FROM <image>[:<tag>] [AS <name>]
FROM golang:1.12 as build



# 指明镜像维护者及其联系方式（一般是邮箱地址）
LABEL maintainer="edisonzhou.cn"



# ENV 在镜像内设置环境变量
# ENV <key> <value>
ENV GOPROXY http://goproxy.cn
ENV GO111MODULE on



# 为RUN、CMD、ENTRYPOINT以及COPY和AND设置工作目录
# 指定接下来的参数工作目录  你可以理解为 cd /go/cache   ,目录不存在时会自动创建
# WORKDIR <dir>
WORKDIR /go/cache



# 拷贝文件或目录到镜像中 这里的意思是 go.mod 和go.sum  添加到 镜像的工作目录下即/go/cache 下
# ADD [--chown=<user>:<group>] <src>... <dest>
ADD go.mod .
ADD go.sum .



# 构建镜像时运行的Shell命令
# RUN <command>
# 编译go 程序
RUN go mod download
RUN GOOS=linux CGO_ENABLED=0 go build -ldflags="-s -w" -installsuffix cgo -o app



# 通过docker构建镜像时, 外部传参, 默认参数debug 
# --build-arg MODE=release  外部docker build 时添加这个参数,意思是设置MODE=release
# ARG <key>[=<value>] 
ARG MODE="debug"



# 将来自build(go:1.12) 镜像下的 /usr/share/zoneinfo/Asia/Shanghai  /etc/ssl/certs/ca-certificates.crt  /go/release /go/release/ 
# 复制到 prod 镜像的 /etc/localtime  /etc/ssl/certs/ca-certificates.crt  home/   
# COPY [--from=<image_alias>] <src>...<desc>
# 拷贝文件或目录到镜像中，用法同ADD，只是不支持自动下载和解压 将当前目录的所以文件及文件夹 copy 到 工作目录下
# copy <src> <desc>
COPY --from=build /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=build /go/release /go/release/ /home/ 



# 声明容器运行的服务端口 设置容器对外映射的容器端口号
EXPOSE 80 443



# 指定容器挂载点到宿主机自动生成的目录或其他容器，例如：
# 一般不会在Dockerfile中用到，更常见的还是在docker run的时候指定-v数据卷。
VOLUME ["/var/lib/mysql"]



# 为RUN、CMD和ENTRYPOINT执行Shell命令指定运行用户
USER <user>[:<usergroup>]
USER <UID>[:<UID>]
USER edisonzhou



# 告诉Docker如何测试容器以检查它是否仍在工作，即健康检查，例如：
# 　　其中，一些选项的说明：
#      --interval=DURATION (default: 30s)：每隔多长时间探测一次，默认30秒
#      -- timeout= DURATION (default: 30s)：服务响应超时时长，默认30秒
#      --start-period= DURATION (default: 0s)：服务启动多久后开始探测，默认0秒
#      --retries=N (default: 3)：认为检测失败几次为宕机，默认3次
# 　　一些返回值的说明：
#      0：容器成功是健康的，随时可以使用
#      1：不健康的容器无法正常工作
#      2：保留不使用此退出代码
HEALTHCHECK --interval=5m --timeout=3s --retries=3 CMD curl -f http:/localhost/ || exit 1



# 容器启动时执行指令
# 启动容器时执行的Shell命令
CMD ["./app"]

# 容器启动时执行指令
# 同CMD类似，只是由ENTRYPOINT启动的程序不会被docker run命令行指定的参数所覆盖，而且，这些命令行参数会被当作参数传递给ENTRYPOINT指定指定的程序
# Dockerfile文件中也可以存在多个ENTRYPOINT指令，但仅有最后一个会生效。
ENTRYPOINT /bin/bash -C '/start.sh'












