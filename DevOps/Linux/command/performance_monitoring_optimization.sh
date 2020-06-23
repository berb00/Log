#! /bin/sh

# 性能监测与优化

# free [options]
# total        used        free      shared         buff/cache   available
# 总内存        已使用内存    空闲内存   当前已经废弃不用  缓存内存
# total = used + free

:<<EOF
-b                                              以Byte为单位显示内存使用情况；
-k                                              以KB为单位显示内存使用情况；
-m                                              以MB为单位显示内存使用情况；
-o                                              不显示缓冲区调节列；
-s<间隔秒数>                                     持续观察内存使用状况；
-t                                              显示内存总和列；
-V                                              显示版本信息。
EOF

free                                            # 等同 free -k                                          
free -k                                         #                                



