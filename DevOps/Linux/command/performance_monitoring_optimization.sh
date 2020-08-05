#! /bin/sh

# 性能监测与优化

<< EOF
    free 				显示内存的使用情况
    vmstat 				显示虚拟内存状态
    mpstat 				显示各个可用CPU的状态
    iostat 				监视系统输入输出设备和CPU的使用情况
    tload 				显示系统负载状况
    uptime 				查看Linux系统负载信息

    fuser 				使用文件或文件结构识别进程
    lsof 				显示Linux系统当前已打开的所有文件列表			LiSt Open Files

    top 				显示或管理执行中的程序
    time 				统计给定命令所花费的总时间
    inotifywait 		异步文件系统监控机制
    nethogs 			终端下的网络流量监控工具
    ifstat 				统计网络接口流量状态
    dstat 				通用的系统资源统计工具
    sar 				系统运行状态统计工具
    ltrace 				用来跟踪进程调用库函数的情况
    iotop 				用来监视磁盘I/O使用状况的工具
    strace 				跟踪系统调用和信号
EOF

# free 显示内存的使用情况
<<EOF
    total        used        free      shared         buff/cache   available
    总内存        已使用内存    空闲内存   当前已经废弃不用  缓存内存
    total = used + free


    -b                                              以Byte为单位显示内存使用情况
    -k                                              以KB为单位显示内存使用情况
    -m                                              以MB为单位显示内存使用情况
    -h                                              提升大小可读性
    -o                                              不显示缓冲区调节列
    -s<间隔秒数>                                     持续观察内存使用状况
    -t                                              显示内存总和列
    -V                                              显示版本信息

EOF

free                                            # 等同 free -k
free -k                                         #


# vmstat 显示虚拟内存状态
<<EOF
    procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
    r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
    2  0      0 3187812  36176 163144    0    0    10     4   74   43  1  1 99  0  0

EOF


# mpstat 显示各个可用CPU的状态
# iostat 监视系统输入输出设备和CPU的使用情况
<<EOF
    Linux 3.10.0-1062.4.1.el7.x86_64 (Orange)       2020年08月04日  _x86_64_        (1 CPU)

    avg-cpu:  %user   %nice %system %iowait  %steal   %idle
            10.33    0.00   10.92    0.61    0.00   78.14

    Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
    vda              34.98       784.31       143.50     392357      71788
    vdb               0.36         9.12         0.01       4561          4


EOF


# tload  显示系统负载状况
# uptime 查看Linux系统负载信息
<<EOF 
    17:02:53 up 4 days, 20:43,  2 users,  load average: 0.72, 0.66, 0.59

    17:02:53                                // 系统当前时间
    up 4 days, 20:43                        // 主机已运行时间 当前距上次启动的时间
    2 user                                  // 用户连接数，是总连接数而不是用户数
    load average: 0.72, 0.66, 0.59          // 系统平均负载，统计最近1，5，15分钟的系统平均负载
EOF




# top 显示或管理执行中的程序  可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具
<<EOF
    top - 18:12:27 up 7 min,  2 users,  load average: 0.61, 0.60, 0.31
    Tasks:  77 total,   1 running,  76 sleeping,   0 stopped,   0 zombie
    %Cpu(s): 10.0 us, 12.7 sy,  0.0 ni, 76.9 id,  0.0 wa,  0.0 hi,  0.3 si,  0.0 st
    KiB Mem :  3880416 total,  3006484 free,   438196 used,   435736 buff/cache
    KiB Swap:        0 total,        0 free,        0 used.  3223876 avail Mem 

    PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND                                                                                                                                
    1047 root      10 -10  125544  14544   9284 S  6.7  0.4   0:18.91 AliYunDun                                                                                                                              
    1274 root      20   0  157640   6328   4628 S  0.7  0.2   0:00.81 sshd   


        top - 18:12:27[当前系统时间],
        up 7 min[系统已经运行了16天],
        2 user[个用户当前登录],
        load average: 0.61, 0.60, 0.31[系统负载，即任务队列的平均长度]
        Tasks: 77 total[总进程数],
        1 running[正在运行的进程数],
        76 sleeping[睡眠的进程数],
        0 stopped[停止的进程数],
        0 zombie[冻结进程数],
        %Cpu(s): 10.0 us[用户空间占用CPU百分比],
        0.1%sy[内核空间占用CPU百分比],
        0.0%ni[用户进程空间内改变过优先级的进程占用CPU百分比],
        0.2%id[空闲CPU百分比], 0.0%wa[等待输入输出的CPU时间百分比],
        0.0%hi[],
        0.0%st[],
        Mem: 
            4147888k total[物理内存总量],
            2493092k used[使用的物理内存总量],
            1654796k free[空闲内存总量],
            158188k buffers[用作内核缓存的内存量]
        Swap:  
            5144568k total[交换区总量],
            56k used[使用的交换区总量],
            5144512k free[空闲交换区总量],
            2013180k cached[缓冲的交换区总量],
EOF



# time 统计给定命令所花费的总时间
# inotifywait 异步文件系统监控机制
# nethogs 终端下的网络流量监控工具
# ifstat 统计网络接口流量状态



# dstat 通用的系统资源统计工具
# sar 系统运行状态统计工具
# ltrace 用来跟踪进程调用库函数的情况
# iotop 用来监视磁盘I/O使用状况的工具
# strace 跟踪系统调用和信号





