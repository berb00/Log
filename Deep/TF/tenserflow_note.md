# tensorflow note

## install tensorflow
    sudo pip3 install --upgrade https://storage.googleapis.com/tensorflow/mac/tensorflow-0.8.0-py3-none-any.whl
    pip3 --default-timeout=100 install -U pip    //延长下载请求时间

    https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-2.0.0-cp37-cp37m-manylinux2010_x86_64.wh

    https://storage.gooleapis.com/tensorflow/

    错误：
    2019-11-09 13:30:18.185553: I tensorflow/core/platform/cpu_feature_guard.cc:142] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2 AVX512F FMA
    2019-11-09 13:30:18.192411: I tensorflow/core/platform/profile_utils/cpu_utils.cc:94] CPU Frequency: 2500000000 Hz
    2019-11-09 13:30:18.192595: I tensorflow/compiler/xla/service/service.cc:168] XLA service 0x4926d40 executing computations on platform Host. Devices:
    2019-11-09 13:30:18.192613: I tensorflow/compiler/xla/service/service.cc:175]   StreamExecutor device (0): Host, Default Version
    大概意思是：你的CPU支持AVX扩展，但是你安装的TensorFlow版本无法编译使用。

    This TensorFlow binary is optimized with Intel(R) MKL-DNN to use the following CPU instructions in performance critical operations:  SSE4.1 SSE4.2 AVX AVX2 AVX512F FMA
    To enable them in non-MKL-DNN operations, rebuild TensorFlow with the appropriate compiler flags.
    此TensorFlow二进制文件使用Intel（R）MKL-DNN进行了优化，以便在性能关键型操作中使用以下CPU指令：SSE4.1 SSE4.2 AVX AVX2 AVX512F FMA
    要在非MKL DNN操作中启用它们，请使用适当的编译器标志重新生成TensorFlow。



    使用源码安装tensorflow

    安装bazel
    wget https://github.com/bazelbuild/bazel/releases/download/0.29.0/bazel-0.29.0-installer-linux-x86_64.sh
    ./bazel-0.29.0-installer-linux-x86_64.sh
