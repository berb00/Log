#!/bin/bash
# 克隆或更新所有GitHub项目代码

urlarr=(
    # 'cpp'
    # 'java'
    # 'py'
    'go'
    'sh'

    'firstSite'
    'webpack'

    'Log'
    'git'
    # 'tf'

)

path= pwd

clone_update(){
    if [ ! -d ${1} ];then # 目录是否存在
        git clone "https://github.com/berb00/${1}.git"
    else
        cd $1
        git pull
        cd $path
    fi
}


for k in ${urlarr[@]};do
    # echo $k
    clone_update $k
done
