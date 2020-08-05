#!/bin/bash

:<<!
    chage				修改帐号和密码的有效期限
    id					显示用户的ID以及所属群组的ID
    nologin				拒绝用户登录系统
    newusers			用于批处理的方式一次创建多个命令
    logname				用来显示用户名称
    chsh				用来更换登录系统时使用的shell					Change shell

    pwck				用来验证系统认证文件内容和格式的完整性
    grpck				用于验证组文件的完整性

    su					用于切换当前用户身份到其他用户身份			Substitute User 或 Switch User（前者较常见）
    usermod				用于修改用户的基本信息
    userdel				用于删除给定的用户以及与用户相关的文件
    useradd				创建的新的系统用户

    chfn				用来改变finger命令显示的信息
    finger				用于查找并显示用户信息

    groupadd			用于创建一个新的工作组
    groupdel			用于删除指定的工作组
    groups				用来打印指定用户所属的工作组
    groupmod			更改群组识别码或名称

    grpconv				用来开启群组的投影密码
    grpunconv			用来关闭群组的投影密码
    pwunconv			用来关闭用户的投影密码
    pwconv				用来开启用户的投影密码

    passwd				用于让用户可以更改自己的密码
    chpasswd			批量更新用户口令的工具
    gpasswd				Linux下工作组文件(/etc/group、/etc/gshadow)的管理工具

    w					显示目前登入系统的用户信息
    who 				显示目前登录系统的用户信息
    whoami 				打印当前有效的用户名称
    users 				显示当前登录系统的所有用户

    last				列出目前与过去登入系统的用户相关信
    lastb				列出登入系统失败的用户相关信息
    lastlog				显示系统中所有用户最近一次登录信息

!



# chage 修改帐号和密码的有效期限 改变用户各种外围属性

# id 显示用户的ID以及所属群组的ID
id                                  # 查看当前用户的uid gid groups
id username                         # 查看username用户的uid gid groups
id -u username                      # 查看username用户的uid
id -g username                      # 查看username用户的gid
id -G username                      # 查看username用户的groups
id -un username                     # 查看username用户的用户名
id -gn username                     # 查看username用户的组名
id -Gn username                     # 查看username用户的groups名称


# useradd
:<<!
useradd options username
!
useradd -u 1000 user1              # 添加用户id为1000的用户user1
        -g  GID
        -G  附加组
        -c  comment                 注释
        -d  path                    指定家目录
        -s  /bin/bash               指定shell路径
        -s  SHELL                   指定shell为当前环境默认shell
        -s  /sbin/nologin           无法登陆的shell
        -m  创建家目录
        -M  强制不指定家目录
        -k  复制/etc/skel文件
        -r  添加系统用户

# userdel
userdel username                    # 删除该用户但不删除家目录
userdel -r username                 # 删除该用户同时删除家目录


# usermod   user modify
usermod -u  uid                     # 修改用户的uid
usermod -g  gid                     # 修改用户的gid基本组
usermod -G  gid                     # 修改用户的附加组(会覆盖之前的附加组)
usermod -aG  gid                    # 修改用户的附加组(追加附加组)
usermod -c  comment                 # 修改用户的注释信息
usermod -d  path                    # 修改用户的家目录
usermod -dm  path                   # 修改用户的家目录(并将之前家目录的内容移动到新的目录)
usermod -l  newname                 # 修改用户名称
usermod -L                          # --lock 锁定用户
usermod -U                          # --unlock 解锁用户



# finger
:<<!
Login: berb00                           Name: 
Directory: /home/berb00                 Shell: /bin/bash
Last login 六 8月 24 14:32 2019 (CST) on pts/0 from 124.78.141.198
No mail.
No Plan.    //执行任务
!
finger username                     # 查看用户账号信息



# chsh
chsh username                       # 修改用户的默认shell

# chfn change finger 
chfn username                       # 修改finger的注释信息

# passwd
passwd --stdin username             # 接收从标准输入传递的密码信息(实现脚本更改密码 无需手动输入)
passwd -l username                  # --lock 锁定用户密码
passwd -u username                  # --unlock 解锁用户密码
passwd -d username                  # 删除用户密码

# pwck password check
pwck                                # 检查用户账号完整性 是否存在隐患

# chage
chage  -d                           # 最近一次的修改时间
chage  -E                           # 过期时间
chage  -I                           # 非活动时间
chage  -m                           # 最短使用期限
chage  -M                           # 最长使用期限
chage  -W                           # 警告时间



cut -d : -f 1 /etc/passwd                   # 查看所有用户
cat /etc/passwd |awk -F \: '{print $1}'     # 查看所有用户





###################Group##########################
# groupadd
groupadd -r groupname               # 添加为系统组
groupadd -g gid groupname           # 指定gid

# groupmod
groupmod -g gid groupname           # 修改gid
groupmod -n groupname               # 修改组名


# gpasswd
gpasswd groupname                   # 为组添加密码




