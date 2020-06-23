



############################用户管理##############################
# 创建一个用户mandriva,其ID号为2002，基本组为distro(组ID为3003),附加组为linux
groupadd -g 3003 distro 
group linux 
useradd -u 2002 -g 3003 -G linux mandriva
# 创建一个用户fedora,其全名为Fefora Community,默认shell为tcsh
useradd -c "Fefora Community" -s /bin/tcsh fedora
# 修改mandriva的ID号为4004,基本组为linux，附加组为distro和fedora
usermod -u 4004 -g linux -G distro,fedora mandriva
# 给fedora加密码，并设定其密码最短使用期限为2天，最长为50天
passwd -n 2 -x 50 fedora
# 将mandriva的默认shell改为/bin/bash
usermod -s /bin/bash
# 添加系统用户hbase,切不允许其登陆系统
useadd  -r -s /sbin/nologin hbase


############################文件权限管理##############################
# 新建一个没有家目录的用户 openstack
# 复制/etc/skel为/home/opensatck
# 改变/home/openstack及其内部文件的属主属组均为openstack
# /home/openstack及其内部的文件，属组及其他用户没有任何访问权限


############################I/O重定向##############################
# 统计/usr/bin/目录下的文件个数
ls /usr/bin | wc -l
# 取出当前系统上所有用户的shell，要求每种shell只显示一次
cut -d: -f7 /etc/passwd | sort -u
# 如何显示/var/log目录下每个文件的内容类型?
file /var/log/*             # 方式一
cd /var/log                 # 方式二
file `ls /var/log`
# 取出/etc/inittab文件的第6行
head -6 /etc/inittab | tail -1      # 先取前6行再取最后一行
# 取出/etc/passwd文件中倒数第9个用户的用户名和shell，显示到屏幕上并将其保存至/tmp/users文件中
tail -9 /etc/passwd | head -1 | cut -d: -f1,7   | tee /tmp/users
# 显示/etc目录下所有以pa开头的文件，并统计其个数
ls -d /etc/pa* | wc -l
# 不使用文本编辑器，将alias cls=clear 一行内容添加至当前用户的.bashrc文件中
echo "alias cls=clear" >> ~/.bashrc



############################shell脚本##############################
# 添加3个用户user1,user2,uaer3 但要先判断用户是否存在








