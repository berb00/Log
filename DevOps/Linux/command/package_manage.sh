#!/bin/bash

# 软件包管理

<<EOF
    rcconf 				Debian Linux下的运行等级服务配置工具
    dpkg-reconfigure 	Debian Linux中重新配制一个已经安装的软件包
    dpkg 				Debian Linux系统上安装、创建和管理软件包
    dpkg-trigger 		Debian Linux下的软件包触发器
    apt-sortpkgs 		Debian Linux下对软件包索引文件进行排序的工具
    apt-key 			管理Debian Linux系统中的软件包密钥
    aptitude 			Debian Linux系统中软件包管理工具
    apt-get 			Debian Linux发行版中的APT软件包管理工具
    dpkg-statoverride 	Debian Linux中覆盖文件的所有权和模式
    dpkg-preconfigure 	Debian Linux中软件包安装之前询问问题
    dpkg-split 			Debian Linux中将大软件包分割成小包
    dpkg-query 			Debian Linux中软件包的查询工具
    dpkg-divert 		Debian Linux中创建并管理一个转向列表
    dpkg-deb 			Debian Linux下的软件包管理工具

    rpm 				RPM软件包的管理工具
    rpmsign 			使用RPM软件包的签名管理工具
    rpmdb 				初始化和重建RPM数据库
    yum 				基于RPM的软件包管理器
    rpmbuild 			创建RPM的二进制软件包和源码软件包
    rpmverify 			验证已安装的RPM软件包的正确性
    rpmquery 			从RPM数据库中查询软件包信息
    dnf 				新一代的RPM软件包管理器
    rpm2cpio 			将RPM软件包转换为cpio格式的文件

    ntsysv 				集中管理系统的各种服务
    chkconfig 			检查或设置系统的各种服务
    patch 				为开放源代码软件安装补丁程序



EOF



# yum 基于RPM的软件包管理器

yum install                                 #全部安装
yum install package1                        #安装指定的安装包package1
yum groupinsall group1                      #安装程序组group1

yum update                                  #全部更新
yum update package1                         #更新指定程序包package1
yum check-update                            #检查可更新的程序
yum upgrade package1                        #升级指定程序包package1
yum groupupdate group1                      #升级程序组group1

yum info package1                           #显示安装包信息package1
yum list                                    #显示所有已经安装和可以安装的程序包
yum list package1                           #显示指定程序包安装情况package1
yum groupinfo group1                        #显示程序组group1信息yum search string 根据关键字string查找安装包

yum remove &#124; erase package1            #删除程序包package1
yum groupremove group1                      #删除程序组group1
yum deplist package1                        #查看程序package1依赖情况

yum clean packages                          #清除缓存目录下的软件包
yum clean headers                           #清除缓存目录下的 headers
yum clean oldheaders                        #清除缓存目录下旧的 headers