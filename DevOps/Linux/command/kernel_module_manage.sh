#!/bin/bash

# 内核与模块管理


<< EOF 
dmesg 				显示Linux系统启动信息				diagnostic message
uname 				显示Linux系统信息					Unix name  系统名称

lsb_release 		显示发行版本信息
get_module 			获取Linux内核模块的详细信息
kernelversion 		打印当前内核的主版本号	

sysctl 				实时动态地修改内核的运行参数
slabtop 			实时显示内核slab内存缓存信息

depmod 				分析可载入模块的相依性
bmodinfo 			显示给定模块的详细信息
modprobe 			自动处理可载入模块

rmmod 				从运行的内核中移除指定的内核模块		Remove module 删除模块
insmod 				将给定的模块加载到内核中				Install module 安装模块
lsmod 				显示已载入系统的模块					List module 列表模块

kexec 				从当前正在运行的内核引导到一个新内核

EOF