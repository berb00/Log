#!/bin/bash

# 文件处理


touch a                                 # 修改文件的时间戳(创建文件是附加的功能)
touch -c a                              # --no-create   不创建文件
touch -a a                              # 只改变文件的访问时间戳为当前时间
touch -m a                              # 只改变文件的修改时间戳为当前时间
touch -m -t 202002020202 a              # 只改变文件的修改时间戳为2020年02月02日02时02分02秒    [[CC]YY]MMDDhhmm[.ss]



