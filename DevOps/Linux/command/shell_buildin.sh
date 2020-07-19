#! /bin/bash

# Shell内建命令
:<<!
readonly 			定义只读shell变量或函数
    read 				从键盘读取变量值

    exit 				退出当前的shell
    logout 				退出当前登录的Shell

    alias 				用来设置指令的别名
    unalias 			删除由alias设置的别名

    export 				设置或显示系统环境变量
    env 				显示系统中已存在的环境变量

    set 				显示或设置shell特性及shell变量
    unset 				删除指定的shell变量或函数
    dris 				显示和清空目录堆栈中的内容
    bind 				显示或设置键盘按键与其相关的功能
    declare 			显示或声明shell变量
    shopt 				显示和设置shell操作选项
    jobs 				显示Linux中的任务列表及任务状态
    help 				显示帮助信息
    history 			显示历史命令
    type 				显示指定命令的类型

    builtin 			执行shell内部命令
    exec 				调用并执行指定的命令					EXECute

    bg 					用于将作业放到后台运行
    fg 					将后台作业放到前台终端运行						ForeGround

    sh 					shell命令解释器
    trap 				指定在接收到信号后将要采取的动作
    let 				简单的计算器
    seq 				以指定增量从首数开始打印数字到尾数					SEQuence
    tput 				通过terminfo数据库对终端会话进行初始化和操作	terminal information
    apropos 			在 whatis 数据库中查找字符串
    command 			调用并执行指定的命令
    fc 					修改历史命令并执行
    ulimit 				控制shell程序的资源							TimeZone
    enable 				启动或关闭shell内建命令
    wait 				等待进程执行完后返回

    kill 				删除执行中的程序或工作
    echo 				输出指定的字符串或者变量
!

# history
:<<!
    历史命令保存在内存中 用户退出时保存至家目录.bash_history历史文件中
    $HISTSIZE: 保存历史命令条数的环境变量
!

# history 
history                                                 # 显示历史命令
history -c                                              # 清空历史命令
history -w                                              # 保存历史命令至历史文件
history -d 100                                          # 删除第100条历史命令
history -d 100 10                                       # 从第100条历史命令开始向后删除10条历史命令

!n                                                      # 执行第n条历史命令
!-n                                                     # 执行倒数第n条历史命令
!!                                                      # 执行上一条历史命令
!string                                                 # 执行最近一次以string开头的历史命令

!$                                                      # 引用上一个命令的最后一个参数
Esc, .                                                  # 引用上一个命令的最后一个参数
alt + .                                                 # 引用上一个命令的最后一个参数(本地可以 远程不行)

# alias 				                                用来设置指令的别名
:<<!
别名的有效范围仅在当前shell生命周期内有效
!
alias                                                   # 列出已有别名
alias aliasname=commandname                             # 为命令指定别名
alias aliasname='commandname [options] [arguments]'     # 为带选项命令指定别名
\commandname                                            # 使用原始命令


# unalias 			                                    
unalias aliasname                                       # 删除由alias设置的别名

# type 显示命令属于哪种类型
:'命令类型:
    内置命令(shell命令)    
    外部命令:某个路径下的一个与命令名一样的可执行文件
'
type su     # 显示su命令类型


# 显示帮助信息
help ls
ls --help
man ls