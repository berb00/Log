# information_schema

## table

table                                   |   comment
-                                       |   -
CHARACTER_SETS                          |   存储数据库相关字符集信息（memory存储引擎）
COLLATION_CHARACTER_SET_APPLICABILITY   |   字符集和连线校对的对应关系
COLLATIONS                              |   字符集对应的排序规则
COLUMN_PRIVILEGES                       |   表授权的用户的权限
COLUMNS                                 |   存储所有表的所有字段信息
ENGINES                                 |   引擎类型，是否支持这个引擎，描述，是否支持事物，是否支持分布式事务，是否能够支持事物的回滚点
EVENTS                                  |   记录mysql中的事件，类似于定时作业
FILES                                   |   提供了有关在mysql的表空间中的数据存储的文件的信息，文件存储的位置
GLOBAL_STATUS                           |   系统状态
GLOBAL_VARIABLES                        |   系统变量
INNODB_BUFFER_PAGE                      |   维护了innodb lru list的相关信息    buffer里面缓冲的页数据
INNODB_BUFFER_PAGE_LRU                  |   维护了innodb lru list的相关信息
INNODB_BUFFER_POOL_STATS                |   表提供有关innodb 的buffer pool相关信息
INNODB_CMP                              |   存储的是关于压缩innodb信息表的时候的相关信息
INNODB_CMP_RESET                        |   存储的是关于压缩innodb信息表的时候的相关信息
INNODB_CMP_PER_INDEX                    |   关于压缩innodb信息表的时候的相关信息
INNODB_CMP_PER_INDEX_RESET              |   关于压缩innodb信息表的时候的相关信息
INNODB_CMPMEM                           |   innodb的压缩页的buffer pool信息
INNODB_CMPMEM_RESET                     |   innodb的压缩页的buffer pool信息
INNODB_FT_BEING_DELETED                 |   nnodb_ft_deleted的一个快照
INNODB_FT_CONFIG                        |   存的是全文索引的信息
INNODB_FT_DEFAULT_STOPWORD              |   stopword 的信息
INNODB_FT_DELETED                       |   
INNODB_FT_INDEX_CACHE                   |   存放的是插入前的记录信息，也是为了避免dml时候昂贵的索引重组
INNODB_FT_INDEX_TABLE                   |   
INNODB_LOCK_WAITS                       |   系统锁等待相关信息，包含阻塞的一行或者多行的记录，及锁请求和被阻塞改请求的锁信息等
INNODB_LOCKS                            |   innodb现在获取的锁
INNODB_METRICS                          |   提供innodb的各种的性能指数
INNODB_SYS_COLUMNS                      |   innodb的元数据
INNODB_SYS_DATAFILES                    |   记录的表的文件存储的位置和表空间的一个对应关系
INNODB_SYS_FIELDS                       |   innodb的表索引字段信息，以及字段的排名
INNODB_SYS_FOREIGN                      |   
INNODB_SYS_FOREIGN_COLS                 |   innodb关于外键的元数据信息
INNODB_SYS_INDEXES                      |   innodb表的索引的相关信息
INNODB_SYS_TABLES                       |   表格的格式和存储特性，包括行格式，压缩页面大小位级别的信息
INNODB_SYS_TABLESPACES                  |   
INNODB_SYS_TABLESTATS                   |   mysql数据库的统计信息
INNODB_SYS_VIRTUAL                      |   表存储的是innodb表的虚拟列的信息
INNODB_TEMP_TABLE_INFO                  |   所有的innodb的所有用户使用到的信息
INNODB_TRX                              |   包含了所有正在执行的的事物相关信息，而且包含了事物是否被阻塞或者请求锁
KEY_COLUMN_USAGE                        |   数据库中所有有约束的列
OPTIMIZER_TRACE                         |   提供的是优化跟踪功能产生的信息
PARAMETERS                              |   参数表存储了一些存储过程和方法的参数，以及存储过程的返回值信息
PARTITIONS                              |   mysql分区表相关的信息
PLUGINS                                 |   mysql的插件信息，是否是活动状态等信息
PROCESSLIST                             |   当前线程列表
PROFILING                               |   服务器执行语句的工作情况
REFERENTIAL_CONSTRAINTS                 |   这个表提供的外键相关的信息
ROUTINES                                |   关于存储过程和方法function的一些信息
SCHEMA_PRIVILEGES                       |   提供了数据库的相关权限
SCHEMATA                                |   这个表提供了实例下有多少个数据库，而且还有数据库默认的字符集
SESSION_STATUS                          |   session状态
SESSION_VARIABLES                       |   session变量
STATISTICS                              |   关于表的索引信息
TABLE_CONSTRAINTS                       |   这个表提供的是 相关的约束信息
TABLE_PRIVILEGES                        |   提供的是表权限相关信息
TABLES                                  |   数据库中表的信息
TABLESPACES                             |   活跃表空间
TRIGGERS                                |   触发器的信息
USER_PRIVILEGES                         |   提供的是用户表权限相关信息
VIEWS                                   |   视图的信息
    