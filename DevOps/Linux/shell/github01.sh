#!/bin/bash
# 克隆或更新所有GitHub项目代码

urlarr=(
    '
    Java
    https://github.com/CyC2018/CS-Notes.git
    https://github.com/Snailclimb/JavaGuide.git
    https://github.com/linlinjava/litemall.git
    '
    '
    Python
    https://github.com/jackfrued/Python-100-Days.git
    https://github.com/TheAlgorithms/Python.git
    '
    '
    Front
    https://github.com/30-seconds/30-seconds-of-code.git
    https://github.com/bailicangdu/vue2-elm.git
    '
    '
    DevOps
    https://github.com/Micropoor/Micro8.git
    https://github.com/imthenachoman/How-To-Secure-A-Linux-Server.git
    https://github.com/trimstray/nginx-quick-reference.git
    https://github.com/toddmotto/public-apis.git
    https://github.com/trimstray/the-book-of-secret-knowledge.git
    '
    '
    Deep
    https://github.com/tensorflow/tensorflow.git
    https://github.com/aymericdamien/TensorFlow-Examples.git
    https://github.com/jikexueyuanwiki/tensorflow-zh.git
    https://github.com/jtoy/awesome-tensorflow.git
    https://github.com/tensorflow/models.git
    https://github.com/czy36mengfei/tensorflow2_tutorials_chinese.git
    https://github.com/nfmcclure/tensorflow_cookbook.git
    https://github.com/chiphuyen/stanford-tensorflow-tutorials.git
    https://github.com/machinelearningmindset/TensorFlow-Course.git
    https://github.com/scutan90/DeepLearning-500-questions.git
    https://github.com/datawhalechina/pumpkin-book.git
    https://github.com/apachecn/AiLearning.git
    https://github.com/deepfakes/faceswap.git
    https://github.com/imhuay/Algorithm_Interview_Notes-Chinese.git
    '
    '
    Tool
    https://github.com/521xueweihan/git-tips.git
    https://github.com/geeeeeeeeek/git-recipes.git
    https://github.com/pomber/git-history.git
    https://github.com/jaywcjlove/awesome-mac.git
    https://github.com/zhaoolee/ChromeAppHeroes.git
    https://github.com/wklchris/Note-by-LaTeX.git
    '
    '
    Blog
    https://github.com/kon9chunkit/GitHub-Chinese-Top-Charts.git
    https://github.com/timqian/chinese-independent-blogs.git
    '
    '
    Interview
    https://github.com/0voice/interview_internal_reference.git
    https://github.com/CyC2018/CS-Notes.git
    https://github.com/azl397985856/leetcode.git
    https://github.com/MisterBooo/LeetCodeAnimation.git
    https://github.com/mbinary/USTC-CS-Courses-Resource.git
    '


)

path=`pwd`
echo "path==== $path"
clone_update(){
    echo "$1===AAA====$2"
    if [ ! -d ${1} ];then # 目录是否存在
        git clone ${1}
    else
        cd $1
        git pull
    fi
}


for i in "${urlarr[@]}" ; do
    arritem=($i) #此时b就相当于二维数组里面的一维数组了，然后可以再次遍历
    arrlen=`expr ${#arritem[@]} - 1`
    for j in $(seq 1 $arrlen); do
        diritem=${arritem[0]}
        if [ ! -d ${diritem} ];then # 目录是否存在
            mkdir $diritem
        fi
        if [ $j -eq 0 ]; then
            continue
        fi
        cd $diritem
        clone_update ${arritem[j]}
        cd $path
    done
done