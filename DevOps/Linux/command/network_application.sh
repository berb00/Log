#!/bin/bash

# 网络应用

# curl  上传下载工具 
# curl [options...] <url>
curl url -O/--remote-name       	    # 下载远程文件 文件名即远程文件名
curl url -o/--output newname            # 下载远程文件 文件名为newname

:<<EOF
--progress-bar                          # 添加进度条
EOF








