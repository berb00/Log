#!/bin/bash

# 文件目录管理-目录基本操作

# ls list
ls -l                       # 长格式显示
ls -h                       # 对文件大小单位换算(以人易读的方式显示)
ls -a                       # 显示隐藏文件
ls -ld                      # 显示文件自身属性
ls -i                       # 显示文件的索引节点号 index node(inode)
ls -r                       # 逆序显示
ls -R                       # 递归显示 recursive


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







