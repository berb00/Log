
-- CREATE USER 'berb00'@'host' IDENTIFIED BY 'berb00'; 
-- GRANT privileges ON yiibaidb TO 'berb00'@'host' 
-- GRANT privileges ON *.* TO 'berb00'@'host' WITH GRANT OPTION; 
-- GRANT all on *.* to berb00@%;
-- GRANT ALL ON *.* TO 'berb00'@'%'; 


/*============================================================
                            建库
==============================================================*/
CREATE DATABASE|SCHEMA IF NOT EXISTS `db` DEFAULT CHARACTER SET 'UTF8';

USE `db`;


/*============================================================
                            建表
==============================================================*/
/*
    当需要输入中文时(建表、插入数据) 需临时转换数据格式
*/
CREATE TABLE t1 (
    id INT UNSIGNED,
    name VARCHAR(20),
    age TINYINT UNSIGNED,
    sex ENUM('男','女','保密'),
    email VARCHAR(50),
    birth YEAR,
    salary FLOAT(8,2),
    tel INT,
    married TINYINT(1) COMMENT '0代表未结婚，1代表结婚'，     -- 字段使用'COMMENT 注释'添加注释
    addr VARCHAR(100)                                       -- 最后字段不可加逗号 会报错
)ENGINE=INNODB CHARSET=UTF8;

-- 创建部门表(主表)
CREATE TABLE department(    
	id TINYINT UNSOGNED AUTO_INCREMENT KEY,
	depName VARCHAR(20) NOT NULL UNIQUE
)ENGINE=INNODB；

CREATE TABLE IF NOT EXISTS employee(//创建员工表(子表)
 	id SMALLINT UNSIGNED AUTO_INCREMENT KEY,
 	username VARCHAR(20) NOT NULL,
 	depId TINYINT UNSIGNED,
 	CONSTRAINT emp_fk_dep FOREIGN KEY(depId) REFERENCES department(id)		-- 添加外键 参照主键 设置外键名为emp_fk_dep
)ENGINE=INNODB;




ALTER TABLE employee ADD CONSTRAINT emp_fk_dep FOREIGN KEY(depId) REFERENCES department(id); -- 添加外键
ALTER TABLE employee ADD CONSTRAINT emp_fk_dep FOREIGN KEY(depId) REFERENCES department(id) ON DELETE CASCADE;  -- 添加外键 当父表记录被删除时 子表对应的记录被删除
ALTER TABLE employee ADD CONSTRAINT emp_fk_dep FOREIGN KEY(depId) REFERENCES department(id) ON DELETE CASCADE ON UPDATE CASCADE;    -- 添加外键 当父表记录被删除/更新时 子表对应的记录被删除/更新
ALTER TABLE employee ADD CONSTRAINT emp_fk_dep FOREIGN KEY(depId) REFERENCES department(id) ON DELETE SET NULL ON UPDATE SET NULL;  -- 添加外键 当父表记录被删除/更新时 子表对应的记录被置为NULL
ALTER TABLE employee DROP FOREIGN KEY emp_fk_dep;   -- 删除外键




INSERT department (depName) VALUE ('市场部'),('运营部'),('管理部');         -- 添加部门
INSERT employee (username,depId) VALUES ('张三',1),('李四',2),('王五',3),('刘二',2);
-- 由于外键约束,要删除部门只能先删除部门中的员工
DELETE FORM employee WHERE depId=1;			         -- 删除部门1的员工
DELETE FROM department WHERE depName='运营部';        -- 删除运营部
-- 由于外键约束,不能向一个不存在的部门插入员工
INSERT employee (username,depId) VALUE ('丽丽',12);

-- 创建用户表 user
CREATE TABLE IF NOT EXISTS `user` (
    id SMALLINT UNSIGNED,
    name VARCHAR(20),
    age TINYINT UNSIGNED,
    sex ENUM('男','女','保密'),
    tel INT UNSIGNED,
    address VARCHAR(200),
    email VARCHAR(50),
    birth YEAR,
    salary FLOAT(8,6),
    married TINYINT(1) COMMENT '0: 未结婚, 非0: 已结婚'
)ENGINE=INNODB CHARSET=UTF8;


-- 创建课程表 course
CREATE TABLE IF NOT EXITS `course` (
    id TINYINT UNSIGNED,
    name VARCHAR(50),
    desc VARCHAR(200)
)ENGINE=INNODB CHARSET=UTF8;

--创建新闻分类表 newkind
CREATE TABLE IF NOT EXISTS `newkind` (
    id TINYINT UNSIGNED,
    name VARCHAR(50),
    desc VARCHAR(200)
)ENGINE=INNODB CHARSET=UTF8;

--创建新闻表 news
CREATE TABLE IF NOT EXISTS `news` (
    id BIGINT UNSIGNED,
    title VARCHAR(200),
    content LONGTEXT,
    publishtime INT,
    clicknum BIGINT UNSIGNED,
    istop TINYINT(1) COMMENT '0: 未置顶, 1: 置顶'
    kind VARCHAR(50),
    kindId TINYINT UNSINGED,
    publisher VARCHAR(50)
)ENGINE=INNODB CHARSET=UTF8;



