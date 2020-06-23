# LaTeX note

## tips

    macTeX的终端指令:           xelatex
    latex-workshop的终端指令:   latexmk

## install macTeX

- curl https://mirrors.chevalier.io/CTAN/systems/mac/mactex/mactex-20190508.pkg --connect-timeout 1000

## reserved characters
character       |   comment
-               |   -
#               |   ⾃定义命令时，⽤于标明参数序号
$               |   数学环境命令符
%               |   注释符。在其后的该⾏命令都会视为注释。如果在回⻋前输⼊这个命令，可以防⽌⾏末 LATEX 插⼊⼀些奇怪的空⽩符
ˆ               |   数学环境中的上标命令符
&               |   表格环境中的跳列符
_               |   数学环境中的下标命令符
{与}            |   花括号⽤于标记命令的必选参数，或者标记某⼀部分命令成为⼀个整体
\               |   反斜杠⽤于开始各种 LATEX 命令

## output file tpyes
type            |   comment
-               |   -
.sty            |   宏包⽂件
.cls            |   ⽂档类⽂件
.aux            |   ⽤于储存交叉引⽤信息的⽂件。因此，在更新交叉引⽤（公式编号、⼤纲级别）后，需要编译两次才能正常显⽰
.log            |   ⽇志。记录上次编译的信息
.toc            |   ⽬录⽂件
.lof            |   图形⽬录
.lot            |   表格⽬录
.idx            |   如果⽂档中包含索引，该⽂件⽤于储存索引信息
.ind            |   索引记录⽂件
.ilg            |   索引⽇志⽂件
.bib            |   BIBTEX 参考⽂献数据⽂件
.bbl            |   BIBTEX ⽣成的参考⽂献记录
.bst            |   BIBTEX 模板
.blg            |   BIBTEX ⽇志
.out            |   hyperref 宏包⽣成的 pdf 书签记录

## macro package
package         |   comment
-               |   -
ulem            |
textcomp        |
hologo          |
lettrine        |   首字下沉效果
indentfirst     |   中文首段缩进
xcolor          |   调用颜色
mhchem          |   化学公式




## TeX Live commend
command             |   comment
-                   |   -
texdoc usrguide     |   TEXLive ⾃带的⽤⼾⼿册。
texdoc clsguide     |   TEXLive ⾃带的⽂档类和宏包编写⼿册。
texdoc fntguide     |   TEXLive ⾃带的字体使⽤⼿册。
texdoc symbols-a4   |   ⼀份速查表，基本上所有的 LATEX 字符命令都在这⾥了。
texdoc latexcheat   |   很有趣的命令表，只有两⻚。
texdoc impatient    |   TEX for the Impatient, ⼀本介绍底层 TEX 的书。译文:https://bitbucket.org/zohooo/impatient/wiki/Home
texdoc texbytopic   |   TEX by Topic, 个⼈觉得不如上⾯那本，但也许只是叙述⽅式不⼀样吧。



