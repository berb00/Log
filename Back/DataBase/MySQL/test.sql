CREATE DATABASE IF NOT EXISTS `db`;
USE `db`;

-- -- customers
CREATE TABLE IF NOT EXISTS `customers`(
    id SMALLINT,
    account VARCHAR(50),
    tel INT,
    sex TINYINT(1) COMMENT '0:男, 1:女',
    email VARCHAR(50),
    address VARCHAR(200),
    age YEAR,
    money FLOAT(8,2)
)ENGINE=INNODB CHARSET=UTF8;


