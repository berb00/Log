#!/bin/bash

gitpath=(
    'Java'
    'https://github.com/CyC2018/CS-Notes.git'

    'Python'
    'https://github.com/jackfrued/Python-100-Days.git'

    'Go'
    'https://github.com/chai2010/advanced-go-programming-book.git'
    'https://github.com/ffhelicopter/Go42.git'
    'https://github.com/unknwon/the-way-to-go_ZH_CN.git'
)

rootpath=`pwd`
currentdir=""

clone_update(){
    if [[  ${1} == "https://github.com/"* ]];then # 是否是分类目录
        cd $rootpath/$currentdir
        name=`echo $1 | grep -Eo "(\w|-){1,}\.git$"`
        name=${name%.*}
        if [ ! -d $name ];then # 项目目录是否存在
            git clone $1 &
            sleep 60
        else
            cd $name
            git pull &
            sleep 60
        fi
        echo "git===========  $name"
        cd ../
        # cd $currentdir
        
    else
        currentdir=$1
        # echo "Dir  $1"
        if [ ! -d $1 ];then # 目录是否存在
            mkdir $1
            # echo $1
        fi
        # cd $1
        # echo "path:   $rootpath"
        # cd $rootpath
        # git pull
        # cd $path
    fi
}


for i in ${gitpath[@]}
do
    clone_update $i
done
