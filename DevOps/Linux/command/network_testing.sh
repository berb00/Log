#!/bin/bash

# 网络测试

<<EOF

host 				常用的分析域名查询工具
hostid 				打印当前主机的数字化标识
hostname 			显示和设置系统的主机名
dig 				域名查询工具
nslookup 			查询域名DNS信息的工具

hping3 				测试网络及主机的安全
iperf 				网络性能测试工具

arp 				显示和修改IP到MAC转换表
arpwatch 			监听网络上ARP的记录
arping 				通过发送ARP协议报文测试网络

route 				显示并设置Linux中静态路由表
nc/netcat 			用来设置路由器
tracepath 			追踪目的主机经过的路由信息

netstat 			查看Linux中网络系统状态信息
lnstat 				显示Linux系统的网路状态

ping 				测试主机之间网络的连通性			Packet InterNet Groper
traceroute 			显示数据包到主机间的路径


EOF


# hostname 显示和设置系统的主机名

<<EOF

永久修改hostname
    1、hostnamectl set-hostname 'name'
    2、reboot


EOF

hostname xxx                            # 临时设置hostname  重启失效