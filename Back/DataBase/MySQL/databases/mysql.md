# database mysql

## tables

tables                      |   comment
-                           |   -
columns_priv                |   可以对单个列进行权限设置  
db                          |   存储了某个用户对一个数据库的权限
engine_cost                 |   IO的代价模型  
event                       |   记录MySQL中的事件  
func                        |   记录MySQL中的自定义函数  
general_log                 |   所有的sql执行日志（一般不开启）  
gtid_executed               |   二进制日志  
help_category               |   关于帮助主题类别的信息  
help_keyword                |   与帮助主题相关的关键字信息
help_relation               |   帮助关键字信息和主题信息之间的映射  
help_topic                  |   帮助主题的详细内容  
innodb_index_stats          |   innodb中索引的统计数据  
innodb_table_stats          |   innodb中表的统计数据  
ndb_binlog_index            |   binlog相关信息  
plugin                      |   插件相关的表  
proc                        |   基础信息相关的表  
procs_priv                  |   可以对存储过程和存储函数进行权限设置
proxies_priv                |   数据库用户权限表  
server_cost                 |   CPU的代价模型  
servers                     |   节点相关信息  
slave_master_info           |   主从相关表  
slave_relay_log_info        |   主从相关表  
slave_worker_info           |   主从相关表  
slow_log                    |   慢日志记录表  
tables_priv                 |   表权限表   可以对单个表进行权限设置  
time_zone                   |   time_*时间相关表  
time_zone_leap_second       |     
time_zone_name              |     
time_zone_transition        |     
time_zone_transition_type   |   
user                        |   用户表
---                         |   ---
host                        |   存储了某个主机对数据库的操作权限

## user

Field                  | Type                              | Null | Key | Default               | Extra |
-                      |    -                              | -    | -   | -                     | -
Host                   | char(60)                          | NO   | PRI |                       |       |
User                   | char(32)                          | NO   | PRI |                       |       |
Select_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Insert_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Update_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Delete_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Create_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Drop_priv              | enum('N','Y')                     | NO   |     | N                     |       |
Reload_priv            | enum('N','Y')                     | NO   |     | N                     |       |
Shutdown_priv          | enum('N','Y')                     | NO   |     | N                     |       |
Process_priv           | enum('N','Y')                     | NO   |     | N                     |       |
File_priv              | enum('N','Y')                     | NO   |     | N                     |       |
Grant_priv             | enum('N','Y')                     | NO   |     | N                     |       |
References_priv        | enum('N','Y')                     | NO   |     | N                     |       |
Index_priv             | enum('N','Y')                     | NO   |     | N                     |       |
Alter_priv             | enum('N','Y')                     | NO   |     | N                     |       |
Show_db_priv           | enum('N','Y')                     | NO   |     | N                     |       |
Super_priv             | enum('N','Y')                     | NO   |     | N                     |       |
Create_tmp_table_priv  | enum('N','Y')                     | NO   |     | N                     |       |
Lock_tables_priv       | enum('N','Y')                     | NO   |     | N                     |       |
Execute_priv           | enum('N','Y')                     | NO   |     | N                     |       |
Repl_slave_priv        | enum('N','Y')                     | NO   |     | N                     |       |
Repl_client_priv       | enum('N','Y')                     | NO   |     | N                     |       |
Create_view_priv       | enum('N','Y')                     | NO   |     | N                     |       |
Show_view_priv         | enum('N','Y')                     | NO   |     | N                     |       |
Create_routine_priv    | enum('N','Y')                     | NO   |     | N                     |       |
Alter_routine_priv     | enum('N','Y')                     | NO   |     | N                     |       |
Create_user_priv       | enum('N','Y')                     | NO   |     | N                     |       |
Event_priv             | enum('N','Y')                     | NO   |     | N                     |       |
Trigger_priv           | enum('N','Y')                     | NO   |     | N                     |       |
Create_tablespace_priv | enum('N','Y')                     | NO   |     | N                     |       |
ssl_type               | enum('','ANY','X509','SPECIFIED') | NO   |     |                       |       |
ssl_cipher             | blob                              | NO   |     | NULL                  |       |
x509_issuer            | blob                              | NO   |     | NULL                  |       |
x509_subject           | blob                              | NO   |     | NULL                  |       |
max_questions          | int(11) unsigned                  | NO   |     | 0                     |       |
max_updates            | int(11) unsigned                  | NO   |     | 0                     |       |
max_connections        | int(11) unsigned                  | NO   |     | 0                     |       |
max_user_connections   | int(11) unsigned                  | NO   |     | 0                     |       |
plugin                 | char(64)                          | NO   |     | mysql_native_password |       |
authentication_string  | text                              | YES  |     | NULL                  |       |
password_expired       | enum('N','Y')                     | NO   |     | N                     |       |
password_last_changed  | timestamp                         | YES  |     | NULL                  |       |
password_lifetime      | smallint(5) unsigned              | YES  |     | NULL                  |       |
account_locked         | enum('N','Y')                     | NO   |     | N                     |       |

### user-field

field                   |   comment
-                       |   -
Host                    |
User                    |
Select_priv             |
Insert_priv             |
Update_priv             |
Delete_priv             |
Create_priv             |
Drop_priv               |
Reload_priv             |
Shutdown_priv           |
Process_priv            |
File_priv               |
Grant_priv              |
References_priv         |
Index_priv              |
Alter_priv              |
Show_db_priv            |
Super_priv              |
Create_tmp_table_priv   |
Lock_tables_priv        |
Execute_priv            |
Repl_slave_priv         |
Repl_client_priv        |
Create_view_priv        |
Show_view_priv          |
Create_routine_priv     |
Alter_routine_priv      |
Create_user_priv        |
Event_priv              |
Trigger_priv            |
Create_tablespace_priv  |
ssl_type                |
ssl_cipher              |
x509_issuer             |
x509_subject            |
max_questions           |
max_updates             |
max_connections         |
max_user_connections    |
plugin                  |
authentication_string   |
password_expired        |
password_last_changed   |
password_lifetime       |
account_locked          |
