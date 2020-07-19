#!/bin/bash

# 文件目录管理-目录基本操作

# ls list
<<EOF
# drwxr-xr-x  11 berb00  staff  352  6 25 10:11 Back
drwxr-xr-x          文件类型+文件权限
11                  文件硬连接的次数
berb00              文件的属主(user)
staff               文件的属组(group)
352                 文件大小(size) byte
6 25 10:11          时间戳(timestamp) 最近一次被修改的时间 modify
Back                文件名

access      最后一次访问时间
modify      最后一次修改时间 文件本身内容改变
change      最后一次改变时间 文件元数据改变

文件类型
    -:  file                普通文件
    d:  directory           目录
    c:  character           字符设备文件
    p:  pipe                管道
    b:  block               块文件
    l:  symbolic link file  符号链接文件
    s:  socket              套接字文件
文件权限
    rwxr-xr-x



EOF


ls -l                       # 长格式显示
ls -h                       # 对文件大小单位换算(以人易读的方式显示) --human-read
ls -a                       # 显示隐藏文件
ls -A                       # 显示隐藏文件 不显示 .、..
ls -ld                      # 显示文件自身属性
ls -i                       # 显示文件的索引节点号 index node(inode)
ls -r                       # 逆序显示
ls -R                       # 递归显示 recursive
ls -d                       # 显示文件自身属性 一般配合-l



# cd change directory
cd /root                    # 切换到根目录
cd                          # 切换到家目录
cd ~                        # 切换到家目录 
cd ~username                # 切换到指定用户的家目录
cd -                        # 在当前目录与上一次所在目录之间切换



# mkdir make directory
mkdir x                     # 在当前目录下创建test目录
mkdir -p x/y/z              # 创建z目录 若x、y目录不存在在创造  parent
mkdir -p x/y/{z/a,b}        # 在z目录下创建a、b目录
mkdir -p x/y/z{a,b}_{c,d}   # 在z目录下创建a_c、a_d、b_c、b_d目录
mkdir -vp x/y/z             # 显示创造详细信息  verbose


# rmdir remove directory
rmdir a


# cp    复制一个文件到一个文件  复制多个文件到一个目录 
cp m/b.txt n/               # 拷贝b到n目录下
cp m/b.txt n/y              # 若y是目录则拷贝b到y目录下 否则以b.txt覆盖y文件切y文件名不变
cp m/b.txt m/c.txt n/       # 拷贝b、c到n目录下
cp -r m/ n/                 # 拷贝m目录到n目录下







