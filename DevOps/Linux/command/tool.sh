#!/bin/bash

# 常用工具命令

# date 				显示或设置系统时间与日期
:<<!
硬件时间
系统时间
       %a     locale's abbreviated weekday name (e.g., Sun)
       %A     locale's full weekday name (e.g., Sunday)
       %b     locale's abbreviated month name (e.g., Jan)
       %B     locale's full month name (e.g., January)
       %c     locale's date and time (e.g., Thu Mar  3 23:05:25 2005)
       %C     century; like %Y, except omit last two digits (e.g., 20)
       %d     day of month (e.g., 01)
       %D     date; same as %m/%d/%y
       %e     day of month, space padded; same as %_d
       %F     full date; same as %Y-%m-%d
       %g     last two digits of year of ISO week number (see %G)
       %G     year of ISO week number (see %V); normally useful only with %V
       %h     same as %b
       %H     hour (00..23)
       %I     hour (01..12)
       %j     day of year (001..366)
!

date                # 显示系统时间
date +'this year is %Y %nToday is %d'
date +%T            # 13:53:03
date +%F            # 2020-03-29
date +%Y-%m-%d      # 2020-03-29
date +%H:%M:%S      # 13:53:03
date +%s            # 1585461648


hwclock             # 显示硬件时间
hwclock -w          # 将系统时间同步到硬件时间  --systohc
hwclock -s          # 将硬件时间同步到系统时间  --hctosys
hwclock -a          #                       --adjust
clock               # 显示硬件时间

# man               查看Linux中的指令帮助
:'
man显示章节:
1:  用户命令(/bin,/usr/bin/,/usr/local/bin)
2:  系统调用
3:  库调用
4:  特殊文件(设备文件)作为设备的访问入口存在
5:  文件格式(配置文件的语法)
6:  游戏games
7:  杂项Miscellaneous
8:  管理命令(/sbin,/usr/sbin,/usr/local/sbin)
9:  

<>:必选项
[]:可选项
...:可以出现多次
|:多选一
{}:分组
NAME:           命令名称
SYNOSIS:        用法说明(包括可用选项)
DESCRIPTION:    命令的详细说明包括每个选项的意义
OPTIONS:        每个选项的意义
FILES:          此命令相关的配置文件
BUGS:
EXAMPLES:       示例
SEE ALSO:       另外参照

翻页:
    space:  向后翻一屏
    b:      向前翻一屏
    enter:  向后翻一行
    k:      向前翻一行
查找:
    /KEYWORD + ENTER            # 向后查找
    ?KEYWORD + ENTER            # 向前查找
    n:  下一个
    N:  上一个
q:  退出

'
man ls              # 从最开始有的介绍显示(不是所有命令都有第一章节)
man 2 ls            # 显示ls第二章节的介绍
man 4 tty           # 显示ls第二章节的介绍
man 5 passwd        # 显示ls第二章节的介绍
man 8 lvcreate      # 显示ls第二章节的介绍
man man             # 显示man自身的使用手册

export LANG=en_US.UTF-8         # 使用英文
export LANG=zh_CN.UTF-8         # 使用中文

# info              在线文档 对man的补充
info ls             

# /usr/share/doc    帮助手册文档
cd /usr/share/doc


# cal               显示当前日历或指定日期的日历    calender
cal 2020

# whatis            查询一个命令有哪些章节的man文档
whatis ls           # 显示命令的摘要信息和显示章节