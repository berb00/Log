# !/bin/bash

# 进程和作业管理

:<<EOF
    ps					报告当前系统的进程状态			Process Status  进程状态
    pstree				以树状图的方式展现进程之间的派生关系

    systemctl			系统服务管理器指令
    w					显示目前登入系统的用户信息

    pidof				查找指定名称的进程的进程号ID号
    pgrep				设置用户的认证信息，包括用户密码、密码过期时间等
    nohup				将程序以忽略挂起信号的方式运行起来		No HangUP
    pmap				报告进程的内存映射关系
    service				控制系统服务的实用工具
    batch				在系统不繁忙的时候执行定时任务
    init				init进程是所有Linux进程的父进程
    crontab				提交和管理用户的需要周期性执行的任务

    runlevel			打印当前Linux系统的运行等级
    telint				切换当前正在运行系统的运行等级
    renice				修改正在运行的进程的调度优先级
    nice				改变程序执行的优先权等级

    ipcrm				删除消息队列、信号集、或者共享内存标识
    ipcs				分析消息队列共享内存和信号量

    pkill				可以按照进程名杀死进程
    skill				向选定的进程发送信号冻结进程
    killall				使用进程的名称来杀死一组进程

    atq					列出当前用户的at任务列表
    at					在指定时间执行一个任务
    atrm				删除待执行任务队列中的指定任务
    watch				周期性的方式执行给定的指令

EOF



:<<EOF 
ps -l
    F 代表这个程序的旗标 (flag)， 4 代表使用者为 super user
    S 代表这个程序的状态 (STAT)，关于各 STAT 的意义将在内文介绍
    UID 程序被该 UID 所拥有
    PID 就是这个程序的 ID ！
    PPID 则是其上级父程序的ID
    C CPU 使用的资源百分比
    PRI 这个是 Priority (优先执行序) 的缩写，详细后面介绍
    NI 这个是 Nice 值，在下一小节我们会持续介绍
    ADDR 这个是 kernel function，指出该程序在内存的那个部分。如果是个 running的程序，一般就是 "-"
    SZ 使用掉的内存大小
    WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作
    TTY 登入者的终端机位置
    TIME 使用掉的 CPU 时间。
    CMD 所下达的指令为何
ps aux
    USER：该 process 属于那个使用者账号的
    PID ：该 process 的号码
    %CPU：该 process 使用掉的 CPU 资源百分比
    %MEM：该 process 所占用的物理内存百分比
    VSZ ：该 process 使用掉的虚拟内存量 (Kbytes)
    RSS ：该 process 占用的固定的内存量 (Kbytes)
    TTY ：该 process 是在那个终端机上面运作，若与终端机无关，则显示 ?，另外， tty1-tty6 是本机上面的登入者程序，若为 pts/0 等等的，则表示为由网络连接进主机的程序。
    STAT：该程序目前的状态，主要的状态有
    R ：该程序目前正在运作，或者是可被运作
    S ：该程序目前正在睡眠当中 (可说是 idle 状态)，但可被某些讯号 (signal) 唤醒。
    T ：该程序目前正在侦测或者是停止了
    Z ：该程序应该已经终止，但是其父程序却无法正常的终止他，造成 zombie (疆尸) 程序的状态
    START：该 process 被触发启动的时间
    TIME ：该 process 实际使用 CPU 运作的时间
    COMMAND：该程序的实际指令

EOF

ps                                          # 在预设的情况下， ps 仅会列出与目前所在的 bash shell 有关的 PID 而已
ps -u root                                  # 显示指定用户信息
ps -ef                                      # 显示所有进程信息，连同命令行
ps -o pid,ppid,pgrp,session,tpgid,comm      # 输出指定的字段
ps -ef|grep ssh                             # ps 与grep 常用组合用法，查找特定进程
ps -l                                       # 将目前属于您自己这次登入的 PID 与相关信息列示出来
ps aux                                      # 列出目前所有的正在内存当中的程序
ps -aux > ps001.txt                         # 把所有进程显示出来，并输出到ps001.txt文件
