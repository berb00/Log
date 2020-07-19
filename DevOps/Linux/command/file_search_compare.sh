#!/bin/bash

# 文件查找和比较


# find [-H] [-L] [-P] [-Olevel] [-D help|tree|search|stat|rates|opt|exec] [path...] [expression]
:<<EOF
    实时、精确查找
    支持众多查找命令
    遍历指定目录中所有文件，速度慢
    find 查找路径 查找标准 查找之后的处理
        查找路径：默认当前目录
        查找标注：默认指定路径下的所有文件
        处理操作：默认打印
EOF


find .                                      # 列出当前目录及子目录下所有文件和文件夹


find /home -name "aaa.txt"                  # 在/home目录下精确查找aaa.txt
find /home -name "*.txt"                    # 在/home目录下查找以.txt结尾的文件名
find /home ! -name "*.txt"                  # 在/home目录下查找不以.txt结尾的文件名
find /home -name "*.txt" -o -name "*.pdf"   # 在/home目录下查找以.txt或.pdf结尾的文件名
find /home -iname "*.txt"                   # 在/home目录下查找以.txt结尾的文件名(忽略大小写)

find /home -path "*local*"                  # 匹配文件路径或者文件

find . -regex ".*\(\.txt\|\.pdf\)$"         # 基于正则表达式匹配文件路径
find . -iregex ".*\(\.txt\|\.pdf\)$"        # 基于正则表达式匹配文件路径(忽略大小写)

find . -type f                              # 搜索普通文件  根据文件类型进行搜索
                                            # f:普通文件 、l:符号连接、d:目录、c:字符设备、b:块设备、s:套接字、p:Fifo
find /home -type f                          # 根据文件类型查找    查找普通文件文件  
find /home -type d                          # 查找目录
find /home -type c                          # 查找字符设备
find /home -type b                          # 查找块设备
find /home -type l                          # 查找链接文件 符号连接
find /home -type p                          # 查找管道设备
find /home -type s                          # 查找套接字设备

find . -maxdepth 3                          # 向下最大深度限制为3
find . -mindepth 2                          # 向下最小深度为2

                                            # 访问时间（-atime/天，-amin/分钟）：用户最后一次访问时间。
                                            # 修改时间（-mtime/天，-mmin/分钟）：文件(主体内容)最后一次修改时间。
                                            # 变化时间（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。
find . -atime -7                            # 搜索最近七天内被访问过的所有文件
find . -atime 7                             # 搜索恰好在七天前被访问过的所有文件
find . -atime +7                            # 搜索超过七天内被访问过的所有文件
find . -amin +10                            # 搜索访问时间超过10分钟的所有文件
find . -newer file.log                      # 找出比file.log修改时间更长的所有文件

                                            # b: 块（512字节）、c: 字节、w: 字（2字节）、k: 千字节、M: 兆字节、G: 吉字节
find . -size +10k                           # 根据文件大小查找  搜索大于10KB的文件
find . -size -10k                           # 根据文件大小查找  搜索小于10KB的文件
find . -size 10k                            # 根据文件大小查找  搜索等于10KB的文件

find . -type f -name "*.txt" -delete        # 删除当前目录下所有.txt文件        组合查找

find /home -user berb                       # 查找属主为berb的文件
find /home -group berb                      # 根据属组查找
find /home -uid Uid                         # 根据Uid查找
find /home -gid Gid                         # 根据Gid查找
find /home -nouser                          # 查找没有属主的文件
find /home -nogroup                         # 查找没有属组的文件



find . -perm 777                            # 根据权限查找  精确查找权限为777的文件
find . -perm +777                           # 根据权限查找  同/mode
find . -perm -777                           # 根据权限查找  文件权限能完全包含该mode时匹配  如mode:644   则755文件匹配 750文件不匹配
find . -perm /777                           # 根据权限查找  文件权限能匹配任意一位mode位即匹配
find . ! -perm 644                          # 根据权限查找  查找权限不是644的文件


# 组合条件
    -a      // 与
    -o      // 或
    -not    // 非


find . -path "./sk" -prune -o -name "*.txt" -print  # 查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk


# find 的动作
    -print  显示                    # 默认
    -ls                             # 类似ls -l形式 显示每个文件的详细信息
    -ok command {} \;               # {} 为占位符 表示find查找到的文件(以文件名表示) 对这些文件进行操作  -ok的每一次操作都需用户确认操作
    -exec command {} \;             # 同 -ok 操作无需用户确认
 


find . -name "*.sh" -perm -020  -exec mv {} new-{} \;  # 查找某目录下属组有写权限的sh文件 并在这些文件名前添加后缀 .new
# 找到家目录下所有以.sh结尾并且所有用户都有执行权限的的文件  把其他用户的执行权限去掉
find /home -name "*.sh" -a -perm -111 -exec chmod o-x {} \;

# locate

:<<EOF
    非实时的、模糊查找；根据全系统文件库进行查找
EOF








