#!/bin/bash

# 文件查找和比较


# find [-H] [-L] [-P] [-Olevel] [-D help|tree|search|stat|rates|opt|exec] [path...] [expression]
:<<EOF

EOF


find .                                      # 列出当前目录及子目录下所有文件和文件夹


find /home -name "*.txt"                    # 在/home目录下查找以.txt结尾的文件名
find /home ! -name "*.txt"                  # 在/home目录下查找不以.txt结尾的文件名
find /home -iname "*.txt"                   # 在/home目录下查找以.txt结尾的文件名(忽略大小写)
find /home -name "*.txt" -o -name "*.pdf"   # 在/home目录下查找以.txt或.pdf结尾的文件名

find /home -path "*local*"                  # 匹配文件路径或者文件

find . -regex ".*\(\.txt\|\.pdf\)$"         # 基于正则表达式匹配文件路径
find . -iregex ".*\(\.txt\|\.pdf\)$"        # 基于正则表达式匹配文件路径(忽略大小写)

find . -type f                              # 搜索普通文件  根据文件类型进行搜索
                                            # f:普通文件 、l:符号连接、d:目录、c:字符设备、b:块设备、s:套接字、p:Fifo

find . -maxdepth 3 -type f                  # 向下最大深度限制为3
find . -mindepth 2 -type f                  # 向下最小深度为2

                                            # 访问时间（-atime/天，-amin/分钟）：用户最后一次访问时间。
                                            # 修改时间（-mtime/天，-mmin/分钟）：文件(主体内容)最后一次修改时间。
                                            # 变化时间（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。
find . -type f -atime -7                    # 搜索最近七天内被访问过的所有文件
find . -type f -atime 7                     # 搜索恰好在七天前被访问过的所有文件
find . -type f -atime +7                    # 搜索超过七天内被访问过的所有文件
find . -type f -amin +10                    # 搜索访问时间超过10分钟的所有文件
find . -type f -newer file.log              # 找出比file.log修改时间更长的所有文件

                                            # b: 块（512字节）、c: 字节、w: 字（2字节）、k: 千字节、M: 兆字节、G: 吉字节
find . -type f -size +10k                   # 搜索大于10KB的文件
find . -type f -size -10k                   # 搜索小于10KB的文件
find . -type f -size 10k                    # 搜索等于10KB的文件

find . -type f -name "*.txt" -delete        # 删除当前目录下所有.txt文件





find . -type f -perm 777                    # 当前目录下搜索出权限为777的文件
find . -type f -name "*.php" ! -perm 644    # 找出当前目录下权限不是644的php文件
find . -type f -user tom                    # 找出当前目录用户tom拥有的所有文件
find . -type f -group sunk                  # 找出当前目录用户组sunk拥有的所有文件




find . -path "./sk" -prune -o -name "*.txt" -print  # 查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk














