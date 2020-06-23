#!/bin/bash
:<<!
练习，写一个脚本，完成以下要求：
1、添加3个用户user1, user2, user3；但要先判断用户是否存在，不存在而后再添加；
2、添加完成后，显示一共添加了几个用户；当然，不能包括因为事先存在而没有添加的；
3、最后显示当前系统上共有多少个用户；
!


! id user1 &> /dev/null && useradd user1 && echo "user1" | passwd --stdin user1 &> /dev/null || echo "user1 exists."
! id user2 &> /dev/null	&& useradd user2 && echo "user2" | passwd --stdin user2	&> /dev/null ||	echo "user2 exists."
! id user3 &> /dev/null	&& useradd user3 && echo "user3" | passwd --stdin user3	&> /dev/null ||	echo "user3 exists."

USERS=`wc -l /etc/passwd | cut -d: -f1`
echo "$USERS users."
