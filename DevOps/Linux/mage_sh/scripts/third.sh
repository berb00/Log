#!/bin/bash
:<<!
练习，写一个脚本，完成以下要求：
给定一个用户：
	1、如果其UID为0，就显示此为管理员；
	2、否则，就显示其为普通用户；
!


NAME=root
USERID=`id -u $NAME`
[ $USERID -eq 0 ] && echo "Admin" || echo "Common user."
