# dattabase sys

## tables
table                                           |   comment
-                                               |   -
host_summary                                    |host_* : 以ip分组相关的统计信息
host_summary_by_file_io                         |
host_summary_by_file_io_type                    |
host_summary_by_stages                          |
host_summary_by_statement_latency               |
host_summary_by_statement_type                  |innodb_* : innodb buffer 相关信息innodb_* : innodb buffer 相关信息
innodb_buffer_stats_by_schema                   |
innodb_buffer_stats_by_table                    |
innodb_lock_waits                               |
io_by_thread_by_latency                         |io_* : 数据内不同维度展的io相关的信息
io_global_by_file_by_bytes                      |
io_global_by_file_by_latency                    |
io_global_by_wait_by_bytes                      |
io_global_by_wait_by_latency                    |
latest_file_io                                  |
memory_by_host_by_current_bytes                 |memory_* : 以ip，连接，用户，分配的类型分组及总的占用显示内存的使用
memory_by_thread_by_current_bytes               |
memory_by_user_by_current_bytes                 |
memory_global_by_current_bytes                  |
memory_global_total                             |
metrics                                         |db的内部的统计值
processlist                                     |线程相关的信息
ps_check_lost_instrumentation                   |没有工具统计的一些变量
schema_auto_increment_columns                   |schema _*: 表结构相关的信息
schema_index_statistics                         |
schema_object_overview                          |
schema_redundant_indexes                        |
schema_table_lock_waits                         |
schema_table_statistics                         |
schema_table_statistics_with_buffer             |
schema_tables_with_full_table_scans             |
schema_unused_indexes                           |
session                                         |用户连接相关的信息
session_ssl_status                              |
statement_analysis                              |基于语句的统计信息
statements_with_errors_or_warnings              |statements_*: 出错的语句，进行全表扫描、运行时间超长等
statements_with_full_table_scans                |
statements_with_runtimes_in_95th_percentile     |
statements_with_sorting                         |
statements_with_temp_tables                     |
sys_config                                      |
user_summary                                    |user_* : 和host_开头的相似，只是以用户分组统计
user_summary_by_file_io                         |
user_summary_by_file_io_type                    |
user_summary_by_stages                          |
user_summary_by_statement_latency               |
user_summary_by_statement_type                  |
version                                         |
wait_classes_global_by_avg_latency              |wait_*:  等待事件
wait_classes_global_by_latency                  |
waits_by_host_by_latency                        |waits_* : 以ip，用户分组统计出来的一些延迟事件
waits_by_user_by_latency                        |
waits_global_by_latency                         |
x$host_summary                                  |
x$host_summary_by_file_io                       |
x$host_summary_by_file_io_type                  |
x$host_summary_by_stages                        |
x$host_summary_by_statement_latency             |
x$host_summary_by_statement_type                |
x$innodb_buffer_stats_by_schema                 |
x$innodb_buffer_stats_by_table                  |
x$innodb_lock_waits                             |
x$io_by_thread_by_latency                       |
x$io_global_by_file_by_bytes                    |
x$io_global_by_file_by_latency                  |
x$io_global_by_wait_by_bytes                    |
x$io_global_by_wait_by_latency                  |
x$latest_file_io                                |
x$memory_by_host_by_current_bytes               |
x$memory_by_thread_by_current_bytes             |
x$memory_by_user_by_current_bytes               |
x$memory_global_by_current_bytes                |
x$memory_global_total                           |
x$processlist                                   |
x$ps_digest_95th_percentile_by_avg_us           |
x$ps_digest_avg_latency_distribution            |
x$ps_schema_table_statistics_io                 |
x$schema_flattened_keys                         |
x$schema_index_statistics                       |
x$schema_table_lock_waits                       |
x$schema_table_statistics                       |
x$schema_table_statistics_with_buffer           |
x$schema_tables_with_full_table_scans           |
x$session                                       |
x$statement_analysis                            |
x$statements_with_errors_or_warnings            |
x$statements_with_full_table_scans              |
x$statements_with_runtimes_in_95th_percentile   |
x$statements_with_sorting                       |
x$statements_with_temp_tables                   |
x$user_summary                                  |
x$user_summary_by_file_io                       |
x$user_summary_by_file_io_type                  |
x$user_summary_by_stages                        |
x$user_summary_by_statement_latency             |
x$user_summary_by_statement_type                |
x$wait_classes_global_by_avg_latency            |
x$wait_classes_global_by_latency                |
x$waits_by_host_by_latency                      |
x$waits_by_user_by_latency                      |
x$waits_global_by_latency                       |