#!/bin/bash

# 文件过滤分割与合并

:<<!
    grep 				强大的文本搜索工具				global regular expression print
    egrep 				在文件内查找指定的字符串			Extended GREP
    fgrep 				为文件搜索文字字符串				fast GREP(不支持正则 直接搜索字符串)

    spell 				对文件进行拼写检查
    ispell 				检查文件中出现的拼写错误


    split 				分割任意大小的文件
    csplit 				将一个大文件分割成小的碎片文件

    rev 				将文件内容以字符为单位反序输出			reverse
    tac 				将文件已行为单位的反序输出
    sort 				将文件进行排序并输出
    comm 				两个文件之间的比较					common
    look 				显示文件中以指定字符串开头的任意行
    wc 					统计文件的字节数、字数、行数			Word Count
    join 				两个文件中指定栏位内容相同的行连接起来
    colrm 				删除文件中的指定列					column remove

    paste 				将多个文件按列队列合并
    uniq 				报告或忽略文件中的重复行				unique
    printf 				格式化并输出结果						PRINT Formatted
    expand 				将文件的制表符转换为空白字符
    pr 					将文本文件转换成适合打印的格式			pre
    fmt 				读取文件后优化处理并输出					format
    tee 				把数据重定向到给定文件和屏幕上				T (T形水管接口)
    unexpand 			将文件的空白字符转换为制表符
    fold 				控制文件内容输出时所占用的屏幕宽度
    col 				过滤控制字符
    tr 					将字符进行替换压缩和删除				traslate
!


# tee
echo 'hello world' | tee /tmp/hello.txt         # tee接收标准输入并把标准输入覆写到文件且在标准输出中展示出来

# grep  Global Research Pattern  
# 
:<<!
根据模式搜索文本，并将符合模式的文本行显示出来
pattern: 文本字符和正则表达式的元字符组合成的匹配条件

grap [options] PATTERN [FILE...]

Regular Expression
元字符:
    *                       匹配前面字符任意次
    .                       任意单个字符
    .*                      任意长度的任意字符
    []                      范围内的字符
    [^]                     范围外的字符
    \?                      匹配前面的字符0次或1次
    \{m,n\}                 匹配前面的字符至少m次至多n次
位置锚定
    ^                       以...开始
    $                       以...结束
    ^$                      匹配空白行
    \<                      其后面的任意字符必须作为单词的首部出现
    \b                      其后面的任意字符必须作为单词的首部出现
    \>                      其后面的任意字符必须作为单词的尾部出现
    \b                      其后面的任意字符必须作为单词的尾部出现
分组
    \(\)
    \1                      引用第一个括号包含的内容
    \2                      引用第二个括号包含的内容
    \3                      引用第三个括号包含的内容


!

grep 'root' /etc/passwd                     # 在该文件中搜索root字符并显示该字符所在的行
grep -o 'root' /etc/passwd                  # 在该文件中搜索root字符并显示该字符
grep -i 'root' /etc/passwd                  # 在该文件中忽略大小写搜索root字符
grep --color=auto 'root' /etc/passwd        # 在该文件中搜索root字符并添加高亮
grep -v 'root' /etc/passwd                  # 在该文件中搜索没有被root字符匹配到的行
grep 'r.*t' /etc/passwd                     # 在该文件中搜索以r开头t结尾中间包含任意字符的字符
grep '[[:digit:]]$' /etc/passwd             # 在该文件中搜索以数字结尾的行
grep 'root\>' /etc/passwd                   # 在该文件中搜索以root结尾的词
grep '\<root' /etc/passwd                   # 在该文件中搜索以root开头的词
grep '\<root\>' /etc/passwd                 # 在该文件中搜索root这个词(不是包含root的词)
grep '\(ab\)*' /etc/passwd                  # 在该文件中搜索root这个词(不是包含root的词)
grep '\([0-9]\).*\1$)' /etc/passwd          # 行中出现一个数字且行尾以这个数字结束的行













