/*环游数据库 aw数据库创建*/
SET NAMES UTF8;
drop database if exists aw;
create database aw CHARSET=UTF8;
use aw;
create table user(
    uid int(6) not null primary key auto_increment,
    uname varchar(16) not null,
    gender bool,
    upwd  varchar(16) not null,
    birthday   date,
    email varchar(20),
    phone varchar(16) not null unique,
    avatar varchar(16)
);
create table region(
    rid int(6) not null primary key,
    rname varchar(16) not null,
    info text,
    rpic varchar(16)
);
create table spot(
    sid int(6) not null primary key,
    sname varchar(16) not null,
    aera varchar(16) not null,
    info text,
    spic varchar(16)
);
create table article(
    aid int(6) not null primary key,
    writer varchar(16),
    title varchar(32),
    puttime date,
    content text,
    spot varchar(16),
    apic varchar(16)
);
create table comment(
    cid int(6) not null primary key,
    writer varchar(16),
    puttime date,
    content text,
    spot varchar(16),
    article varchar(16)
);
/*插入数据用户表*/
INSERT INTO user VALUES('1','kangkang','1','45566','1996-12-31','24555@qq.com','1554469','s');
INSERT INTO user VALUES('2','sun','0','45866','1998-12-31','24355@qq.com','1556469','s');
INSERT INTO user VALUES('3','faker','0','25566','1999-12-31','22555@qq.com','1554369','s');
INSERT INTO user VALUES('4','libai','1','35566','1998-12-31','28555@qq.com','1854469','s');
INSERT INTO user VALUES('5','goukon','0','95566','1993-12-31','94555@qq.com','1154469','s');
INSERT INTO user VALUES('6','shanshan','1','85566','1997-12-31','64555@qq.com','1354469','s');
/*插入数据地区表*/
INSERT INTO region VALUES('1','China','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('2','England','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('3','Japan','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('4','Korea','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('5','thai','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('6','America','sswjdjdsdbkbhhbs','sdsd');
INSERT INTO region VALUES('7','France','sswjdjdsdbkbhhbs','sdsd');
/*插入数据景点表*/
INSERT INTO spot VALUES('1','taishan','china','sddffadd','dsd');
INSERT INTO spot VALUES('2','changcheng','china','sddffadd','dsd');
INSERT INTO spot VALUES('3','the Thames','England','sddffadd','dsd');
INSERT INTO spot VALUES('4','British Museum','England','sddffadd','dsd');
INSERT INTO spot VALUES('5','Mount Fuji','Japan','sddffadd','dsd');
INSERT INTO spot VALUES('6','Hokkaido','Japan','sddffadd','dsd');
INSERT INTO spot VALUES('7','Seoul','Korea','sddffadd','dsd');
INSERT INTO spot VALUES('8','Busan','Korea','sddffadd','dsd');
INSERT INTO spot VALUES('9','Bangkok','thai','sddffadd','dsd');
INSERT INTO spot VALUES('10','Statue','America','sddffadd','dsd');
INSERT INTO spot VALUES('11','Notre Dame de Paris','France','sddffadd','dsd');
/*插入文章表数据*/
INSERT INTO article VALUES('1','chengdon','shenmu','2018-12-3','ddada','china','ssss');
INSERT INTO article VALUES('2','libai','shenmu','2019-10-3','ddada','thai','ssss');
INSERT INTO article VALUES('3','dufu','shenmu','2019-12-3','ddada','England','ssss');
INSERT INTO article VALUES('4','sushi','shenmu','2018-12-3','ddada','Japan','ssss');
INSERT INTO article VALUES('5','baijuyi','shenmu','2017-12-3','ddada','Korea','ssss');
INSERT INTO article VALUES('6','limu','shenmu','2016-12-3','ddada','America','ssss');
INSERT INTO article VALUES('7','tian','shenmu','2013-12-3','ddada','France','ssss');
INSERT INTO article VALUES('8','shen','shenmu','2012-12-3','ddada','America','ssss');
/*插入评论*/
INSERT INTO comment VALUES('1','tuantuan','2016-7-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('2','duanduan','2018-8-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('3','changchana','2019-9-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('4','aiai','2017-11-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('5','shasha','2015-12-11','ssddfdd','thai','shenmu');

