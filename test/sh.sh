#/!/bin/bash


path=`pwd`
IP='192.168.8.114'
LINK='192.168.10.85'
PORT='4179' # platform port

dir=`ls -d */`
OLD_IFS="$IFS"
IFS=" "
arr=($dir)
IFS="$OLD_IFS"
arrlen=${#arr[@]}

echo $arr
if [[ $* =~ [0-9]{4} ]];then
  port=`echo  $* | grep -Po '[0-9]{4}'`
  PORT=${port:0:4}
  echo $PORT
fi

ipre='(^([1-9]|1[0-9]|1[1-9]{2}|2[0-4][0-9]|25[0-5])\.)(([0-9]{1,2}|1[1-9]{2}|2[0-4][0-9]|25[0-5])\.){2}([1-9]|[1-9][0-9]|1[0-9]{2}|2[0-5][0-9]|25[0-4])$'
if [[ $* =~ $ipre ]];then
  IP=`echo  $* | grep -Po $ipre`
  echo $IP
  echo '22222 '
fi

arr=()
for i in ${arr} 
do
    devpath=${path}/${i}config/development.js
    # 配置监听port
    line=`sed -n -e '/development/=' ${devpath}`
    linenext=`expr $line + 1`
    port=$PORT
    if [ $i == "com.lyzh.dw.ui/" ];then
        port=`expr ${PORT} + 1`
    elif [ $i == "com.lyzh.saas.console/" ];then
        port=`expr ${PORT} + 2`
    elif [ $i == "com.lyzh.saas.console/" ];then
        port=`expr ${PORT} + 2`
    fi
    sed -i "${linenext}c    port: ${port},         //服务端口号" $devpath

    # 配置eureka
    sed -in-place -e 's/host: global/\/\/ host: global/g' $devpath
    sed -in-place -e 's/\/\/ \/\//\/\//g' $devpath
    sed -in-place -e 's/\/\/\/\//\/\//g' $devpath

    line1=`sed -n -e '/eureka: {/=' ${devpath}`
    sed -i "${line1}a\\        host: global.environment.eurhost \|\| \'${LINK}\'," ${devpath} # line1行后插入一行

    # 配置webconnect
    if [ $i == "com.lyzh.saas.platform.ui/" ];then

        line2=`sed -n -e '/hosturl_109/=' ${devpath}`
        echo $line2
        if [ $lin2 ];then
          echo 'dsada'
          port=$PORT
          sed -i "${line2}d" ${devpath}
          sed -i "${line2}i\\\        'hosturl_109\':\'${IP}:${port}\', \/\*\*链接web端4109的服务地址\*\/" ${devpath} # line1行前插入一行
        fi

        line2=`sed -n -e '/hosturl_110/=' ${devpath}`
        if [ $line2 ];then
            port=`expr $PORT + 1`
            sed -i "${line2}d" ${devpath}
            sed -i "${line2}i\\\        'hosturl_110\':\'${IP}:${port}\', \/\*\*链接web端4110的服务地址\*\/" ${devpath} # line1行前插入一行
        fi

        line2=`sed -n -e '/hosturl_111/=' ${devpath}`
        if [ $line2 ];then
            port=`expr $PORT + 2`
            sed -i "${line2}d" ${devpath}
            sed -i "${line2}i\\\        'hosturl_111\':\'${IP}:${port}\', \/\*\*链接web端4111的服务地址\*\/" ${devpath} # line1行前插入一行
        fi
    fi
done


if [[ $* =~ '-i' ]];then
    echo '配置完毕，开始安装packang...'
    for i in ${arr}
    do
        cd $path
        cd $i
        npm install
    done
fi
