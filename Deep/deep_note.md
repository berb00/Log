# deep note

#激活函数
    很小的权重改变能够引起网络输出的细微改变,这个特性将使学习成为可能.

    我们想逐渐的调整权重和偏移以至于神经网络能够逐渐按照预期行
    细微调整sigmoid神经元的权重和偏移只会很细小地影响到输出结果


## 暂时处理tensorflow 警告问题
    import os
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '0' // 输出:INFO + WARNING + ERROR + FATAL 默认
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1' // 输出:WARNING + ERROR + FATAL
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' // 输出:ERROR + FATAL
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' // 输出:FATAL




## link
    https://github.com/lakshayg/tensorflow-build
    https://github.com/fo40225/tensorflow-windows-wheel