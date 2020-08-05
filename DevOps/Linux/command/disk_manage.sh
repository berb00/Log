#!/bin/bash

# 磁盘管理


<< EOF
    lvresize 			调整逻辑卷空间大小
    lvremove 			删除指定LVM逻辑卷
    lvreduce 			收缩逻辑卷空间
    lvextend 			扩展逻辑卷空间
    lvdisplay 			显示逻辑卷属性
    lvscan 				扫描逻辑卷
    lvcreate 			用于创建LVM的逻辑卷 

    pvs 				输出物理卷信息报表
    pvchange 			修改物理卷属性
    pvck 				检测物理卷的LVM元数据的一致性
    pvremove 			删除一个存在的物理卷
    pvdisplay 			显示物理卷的属性
    pvscan 				扫描系统中所有硬盘的物理卷列表
    pvcreate			将物理硬盘分区初始化为物理卷

    vgremove 			用于用户删除LVM卷组
    vgconvert 			转换卷组元数据格式
    vgchange 			修改卷组属性
    vgreduce 			从卷组中删除物理卷
    vgscan 				扫描并显示系统中的卷组
    vgcreate 			用于创建LVM卷组
    vgextend 			向卷组中添加物理卷
    vgdisplay 			显示LVM卷组的信息

    mknod 				创建字符设备文件和块设备文件		MaKe NODe
    mkisofs 			建立ISO 9660映像文件
    mkinitrd 			建立要载入ramdisk的映像文件
    mkswap 				建立和设置SWAP交换分区

    partprobe 			不重启的情况下重读分区
    parted 				磁盘分区和分区大小调整工具

    blkid 				查看块设备的文件系统类型、LABEL、UUID等信息
    lsblk 				列出块设备信息
    blockdev 			从命令行调用区块设备控制程序
    badblocks 			查找磁盘中损坏的区块

    du 					显示每个文件和目录的磁盘使用空间	  Disk usage 硬盘使用率
    df 					显示磁盘的相关信息				    Disk free  空余硬盘    
    fdisk 				查看磁盘使用情况和磁盘分区

    hdparm 				显示与设定硬盘的参数
    mkbootdisk 			可建立目前系统的启动盘
    grub 				多重引导程序grub的命令行shell工具
    convertquota 		把老的配额文件转换为新的格式
    lilo 				安装核心载入开机管理程序

EOF



# du 查看文件和目录磁盘使用空间
du xxx.txt                                                      # 显示指定文件所占空间
du xxx.txt aaa.txt                                              # 显示指定多个文件所占空间
du xxx/                                                         # 显示指定目录所占空间(递归显示子目录大小)
du -a xxx/                                                      # 显示指定目录所占空间(递归显示每一个文件大小)
du -s xxx/                                                      # 显示指定目录所占空间(只显示目录大小总计 不递归显示目录内部文件大小)

du -b xxx/                                                      # 显示指定目录所占空间(以K为单位显示)
du -k xxx/                                                      # 显示指定目录所占空间(以M为单位显示)
du -m xxx/                                                      # 显示指定目录所占空间(以G为单位显示)
du -h xxx/                                                      # 显示指定目录所占空间(以K/M/G为单位显示)

# df 显示磁盘分区上的可使用的磁盘空间

df                                                              # 查看系统磁盘设备，默认是KB为单位
df -h                                                           # 查看系统磁盘设备 提高可读性
df -a                                                           # 查看全部文件系统
df -i                                                           # 显示inode的信息
df -k                                                           # 指定区块大小为1024字节
df -m                                                           # 指定区块大小为1024 * 1024字节
df -l                                                           # 仅显示本地端的文件系统
# df --block-size=<num>                                           # 以指定的区块大小来显示区块数目

# fdisk 查看磁盘使用情况和磁盘分区







# lsblk 列出块设备信息 不会列出RAM盘的信息
<< EOF
NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda    253:0    0  20G  0 disk 
└─vda1 253:1    0  20G  0 part /
vdb    253:16   0  20G  0 disk 
└─vdb1 253:17   0  20G  0 part /mnt

NAME        这是块设备名。
MAJ:MIN     本栏显示主要和次要设备号。
RM          本栏显示设备是否可移动设备。注意，在本例中设备sdb和sr0的RM值等于1，这说明他们是可移动设备。
SIZE        本栏列出设备的容量大小信息。例如298.1G表明该设备大小为298.1GB，而1K表明该设备大小为1KB。
RO          该项表明设备是否为只读。在本案例中，所有设备的RO值为0，表明他们不是只读的。
TYPE        本栏显示块设备是否是磁盘或磁盘上的一个分区。在本例中，sda和sdb是磁盘，而sr0是只读存储（rom）。
MOUNTPOINT  本栏指出设备挂载的挂载点。






EOF

# 块设备:硬盘、闪存盘、cd-ROM
lsblk                                                           # 列出所有块设备 不列出所有空设备
lsblk -a                                                        # 列出所有块设备 列出所有空设备


# lsblk 列出块设备信息
<< EOF
/dev/vda1: UUID="1114fe9e-2309-4580-b183-d778e6d97397" TYPE="ext4"
/dev/vdb1: UUID="d8d60475-dfbf-4345-9b04-c4b6a244f0bd" TYPE="ext4"

EOF
blkid                                                           # 列出当前系统中所有已挂载文件系统的类型







