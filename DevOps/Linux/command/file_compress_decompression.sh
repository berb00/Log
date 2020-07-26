#!/bin/bash

# 文件压缩与解压

# tar
:<<EOF
tar [OPTION...] [FILE]...
-c/--create：                       压缩
-x/--extract/--get：                解压缩
-t/--list:                          查看
-z/--gzip/--ungzip：                通过gzip指令处理备份文件
-p/--same-permissions：             用原来的文件权限还原文件
-v/--verbose:                       显示指令执行过程
-f/--file:                          指定备份文件

z、j需放在选项首位

EOF

tar -cvf log.tar aaa.log                        # 打包aaa.log文件为log.tar包
tar -zcvf log.tar.gz aaa.log                    # 打包aaa.log文件，并以 gzip 压缩为log.tar.gz
tar -zcvf log.tar.gz aaa.log bbb.log            # 打包aaa.log、bbb.log文件，并以 gzip 压缩为log.tar.gz
tar -jcvf log.tar.bz2 aaa.log                   # 打包aaa.log文件，并以 bzip2 压缩为log.tar.gz

tar -zxvf log.tar.gz                            # 解压缩gzip格式压缩包
tar -zxvf log.tar.gz aaa.log                    # 解压缩gzip格式压缩包(只解压包内的aaa.log文件)

tar -ztvf log.tar.gz                            # 查看gzip压缩包内的文件



# gzip [OPTION]... [FILE]...
:<<EOF
-v/--verbose                                    显示指令执行过程
-d/--decompress/----uncompress                  解开压缩文件；
-l/--list                                       列出压缩文件的相关信息；
-r/--recursive                                  递归处理，将指定目录下的所有文件及子目录一并处理；
-n/--no-name                                    压缩文件时，不保存原来的文件名称及时间戳记；
-N/--name                                       压缩文件时，保存原来的文件名称及时间戳记；
-<压缩效率>                                      压缩效率是一个介于1~9的数值，预设值为“6”，指定愈大的数值，压缩效率就会愈高；
EOF

gzip *                                          # 将当前目录下的文件(非子目录)压缩为.gz文件
gzip -dv *                                      # 解压当前目录下的.gz文件

gzip -r dir/                                    # 将dir目录下的每一个文件递归压缩为.gz文件
gzip -r *                                       # 将当前目录下的每一个文件递归压缩为.gz文件
gzip -dr *                                      # 将当前目录下的每一个.gz文件递归解压缩





