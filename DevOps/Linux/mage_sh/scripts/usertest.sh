#!/bin/bash
# 用户已存在则显示已存在 未存在则添加该用户并添加密码

NAME=user17

if id $NAME &> /dev/null; then
  echo "$NAME exists."
else
  useradd $NAME
  echo $NAME | passwd --stdin $NAME &> /dev/null
  echo "Add $NAME finished."
fi
