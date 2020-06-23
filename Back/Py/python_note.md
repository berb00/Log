# python note

## get keywords list

    import keyword
    print(keyword.kwlist)

## the package of python

install                                 |   comment
-                                       |   -
pip install mysql-connector-python      |   MySQL官方的纯Python驱动
pip install MySQL-python                |   封装了MySQL C驱动的Python驱动
pip install pillow                      |   从著名的Python图像处理库PIL发展出来的一个分支

## get builtins/__builtins__ list

    a = []
    for i in dir(__builtins__):
        a.append('type('+i+')')
    b = dict(zip(dir(__builtins__),a))
    for i in b:
        print('%-25s'%i,eval(b[i]))

## get methods of standard type

    v= list()
    a = dir(v)
    for i in a:
        print(i)

## get modules

    help("modules")

## Tips

    python交互模式无法使用退格键、方向键解决方法：
    解决办法二：
        最快捷的方式：
        pip install readline (可能需要安装依赖sudo apt-get install libreadline6 libreadline6-dev)

    pip install ipython         //  命令行python编辑器
    每个模块都有一个__name__属性，当其值是'__main__'时，表明该模块自身在运行，否则是被引入。

## use both function dir and help adeptly

    dir 找到模块内定义的所有名称
    help

## how to import custom moudles ?

    首先区分文件夹与包。包含__init__.py文件的文件夹为包，否则为普通文件夹，__init__.py可以为空。
    包中的模块名为: '包名.模块名'


## The Zen of Python, by Tim Peters

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!

    Python之禅 by Tim Peters
    优美胜于丑陋（Python 以编写优美的代码为目标）
    明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似）
    简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现）
    复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，要保持接口简洁）
    扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套）
    间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题）
    可读性很重要（优美的代码是可读的）
    即便假借特例的实用性之名，也不可违背这些规则（这些规则至高无上）
    不要包容所有错误，除非你确定需要这样做（精准地捕获异常，不写 except:pass 风格的代码）
    当存在多种可能，不要尝试去猜测
    而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
    虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido ）
    做也许好过不做，但不假思索就动手还不如不做（动手之前要细思量）
    如果你无法向人描述你的方案，那肯定不是一个好方案；反之亦然（方案测评标准）
    命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）
