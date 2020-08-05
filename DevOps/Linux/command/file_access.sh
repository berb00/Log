#!/bin/bash

# 文件权限属性设置

:<<!
    chmod 				用来变更文件或目录的权限				Change mode 	改变模式
    chown 				用来变更文件或目录的拥有者或所属群组	Change owner 改变所有者
    chgrp 				用来变更文件或目录的所属群组			Change group 改变用户组
    chattr 				用来改变文件属性

    stat 				用于显示文件的状态信息
    diffstat 			显示diff命令输出信息的柱状图
    file 				用来探测给定文件的类型。
    
    dos2unix 			将DOS格式文本文件转换成Unix格式
    setfacl 			设置文件访问控制列表
    umask 				用来设置限制新建文件权限的掩码		umask = User's MASK
    lsattr 				查看文件的第二扩展文件系统属性
!

# stat  status
:<<!
File: ‘a’
Size: 4096            Blocks: 8          IO Block: 4096   directory
Device: fd01h/64769d    Inode: 1070110     Links: 3
Access: (0755/drwxr-xr-x)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2020-03-29 17:24:53.351466150 +0800         // 最后一次访问时间
Modify: 2020-03-29 17:24:53.351466150 +0800         // 最后一次修改时间
Change: 2020-03-29 17:24:53.351466150 +0800         // 最后一次改变时间
Birth: -

!
stat filename                               # 显示文件的状态信息
stat -L filename                            # 显示文件的状态信息 支持符号连接
stat -f filename                            # 显示文件系统状态而非文件状态
stat -t filename                            # 以简洁方式输出信息


# chown change owner 改变文件属主(仅管理员才可使用)
chown username file1,...                    # 修改文件属主为username
chown username dir1,...                     # 修改目录属主为username
chown username  -R dir1,...                 # 修改目录及目录下文件属主为username
chown --reference=/path/file file1,...      # 修改文件属主属组为/path/file的属主属组
chown username:groupname file1,...          # 修改文件属主为username修改属组为groupname
chown username.groupname file1,...          # 修改文件属主为username修改属组为groupname
chown :groupname file1,...                  # 修改文件属组为groupname


# chgrp change group 改变文件属组(仅管理员才可使用)
chgrp groupname file1,...                   # 修改文件属主为username
chgrp groupname dir1,...                    # 修改目录属主为username
chgrp groupname  -R dir1,...                # 修改目录及目录下文件属主为username
chgrp --reference=/path/file file1,...      # 修改文件属主为/path/file的属主


# chmod change mode
# 修改三类用户的权限
chmod mode file1,... 
chmod mode -R dir1,... 
chmod --reference=/path/file file1,... 
# 修改某些类的用户权限  u、g、o、a
chmod u=rwx file                            # 修改属主权限
chmod g=rwx file                            # 修改属组权限
chmod o=rwx file                            # 修改其他用户权限
chmod g=rwx,o=r file                        # 修改属组及其他用户权限
chmod go=rwx file                           # 修改属组及其他用户权限
chmod a=rwx file                            # 修改属主、属组及其他用户权限

# 修改某类用户的某位权限
chmod u+x file                              # 添加属主执行权限
chmod u-x file                              # 删除属主执行权限
chmod u-rx file                             # 删除属主读取、执行权限
chmod u+x,g-x file                          # 添加属主执行权限，删除属组执行权限
chmod a+x file                              # 三类用户都加上执行权限
chmod +x file                               # 三类用户都加上执行权限

# umask
:<<!
0022                                        # root umask
drwxr-xr-x                                  # 755 root创建目录默认权限 777 - 0022 = 755
-rw-r--r--                                  # 644 root创建文件默认权限 666 - 0022 = 644
0002                                        # user1 umask
drwxrwxr-x                                  # 775 user1创建目录默认权限 777 - 0002 = 775 
-rw-rw-r--                                  # 664 user1创建文件默认权限 666 - 0002 = 664

更改umask后 造成创建文件默认可执行时 执行权限自动加1 取消默认可执行
!
umask                                       # 显示当前用户遮罩码，掩码(影响创建文件、目录的默认权限)
umask 027                                   # 设定当前用户遮罩码


:<<?
站在用户登陆的角度， Shell的类型
登陆式shell:
    正常通过终端登陆的shell
    su - username
    su -l username

非登陆式shell:
    su username             半切换(不读取profile类配置文件)
    图形终端下打开的命令窗口
    自动执行的shell脚本

bash的配置文件
    全局配置
        /etc/profile
        /etc/profile.d/*.sh
        /etc/bashrc
    个人配置(优先级高于全局配置)
        ~/.bash_profile
        ~/.bashrc

profile类的文件:
    设定环境变量
    运行命令或脚本
bashrc类的文件:
    设定本地变量
    定义名利别名

登陆式shell读取配置文件顺序(从上到下):
    /etc/profile                ↓
    /etc/profile.d/*.sh         ↓
    ~/.bash_profile             ↓
    ~/.bashrc                   ↓
    /etc/bashrc                 ↓

非登陆式shell读取配置文件顺序(从上到下):
    ~/.baskrc
    /etc/bashrc
    /etc/profile.d/*.sh





?
