/*环游数据库 aw数据库创建*/
SET NAMES UTF8;
drop database if exists aw;
create database aw CHARSET=UTF8;
use aw;
create table user(
    uid int(6) not null primary key AUTO_INCREMENT,
    uname varchar(16) not null,
    gender bool,
    upwd  varchar(16) not null,
    birthday   date,
    email varchar(20),
    phone varchar(16) not null unique,
    avatar varchar(16),
    isguan int 
);
create table region(
    rid int(6) not null primary key AUTO_INCREMENT,
    rname varchar(16) not null,
    info text,
    rpic varchar(16)
);
create table spot(
    id int(6) not null primary key AUTO_INCREMENT,
    sname varchar(16) not null,
    aera varchar(16) not null,
    info text,
    spic varchar(16)
);
create table article(
    aid int(6) not null primary key AUTO_INCREMENT,
    writer varchar(16),
    title varchar(32),
    puttime date,
    content text,
    spot varchar(16),
    apic varchar(16)
);
create table comment(
    cid int(6) not null primary key AUTO_INCREMENT,
    writer varchar(16),
    puttime date,
    content text,
    spot varchar(16),
    article varchar(16)
);
/*插入数据用户表*/
INSERT INTO user VALUES('1','kangkang','1','45566','1996-12-31','24555@qq.com','1554469','gd.jpg',1);
INSERT INTO user VALUES('2','sun','0','45866','1998-12-31','24355@qq.com','1556469','s',1);
INSERT INTO user VALUES('3','faker','0','25566','1999-12-31','22555@qq.com','1554369','s',0);
INSERT INTO user VALUES('4','libai','1','35566','1998-12-31','28555@qq.com','1854469','s',0);
INSERT INTO user VALUES('5','goukon','0','95566','1993-12-31','94555@qq.com','1154469','s',0);
INSERT INTO user VALUES('6','shanshan','1','85566','1997-12-31','64555@qq.com','1354469','s',1);
/*插入数据地区表*/
INSERT INTO region VALUES('1','埃及--沙姆沙伊赫','位于西奈半岛南端亚喀巴湾 (Gulf of Aqaba) 地区，距离苏伊士约 300 公里，距离穆罕默德国家公园仅 19 公里。濒临红海亚喀巴湾，常年阳光充足。全年气候干爽舒适，冬季气温在 20 至 25°C 之间，夏季气温则会上升到 30 至 35°C。','bg_4.jpg');
INSERT INTO region VALUES('2','埃及--伊斯梅利亚','该市拥有苏伊士运河沿岸三大港口（从北往南依次为塞得港、伊斯梅利亚港、苏伊士港，被称为“运河三城”、“运河三姐妹”。）之一，是依靠运河的水浇灌出来的花园城市，到处分布着椰枣树、草地和花园，有很多旅馆和酒店，市容干净整洁，环境安静优美，被誉为“埃及最美的城市”、“运河的新娘”。','bg_2.jpg');
INSERT INTO region VALUES('3','埃及--阿斯旺','埃及文化古城，阿斯旺省首府，是埃及南方的一个重要城市。位于首都开罗以南900公里的尼罗河东岸，是埃及的南大门，是黑非洲的门户和唯一一条由海上进入非洲腹地的通道。','bg_3.jpg');

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
INSERT INTO article VALUES('1','kangkang','shenmu','2018-12-3','ddada','china','ssss');
INSERT INTO article VALUES('2','kangkang','shenmu','2019-10-3','ddada','thai','ssss');
INSERT INTO article VALUES('3','dufu','shenmu','2019-12-3','ddada','England','ssss');
INSERT INTO article VALUES('4','sushi','shenmu','2018-12-3','ddada','Japan','ssss');
INSERT INTO article VALUES('5','baijuyi','shenmu','2017-12-3','ddada','Korea','ssss');
INSERT INTO article VALUES('6','limu','shenmu','2016-12-3','ddada','America','ssss');
INSERT INTO article VALUES('7','tian','shenmu','2013-12-3','ddada','France','ssss');
INSERT INTO article VALUES('8','shen','shenmu','2012-12-3','ddada','America','ssss');
/*插入评论*/
INSERT INTO comment VALUES('1','kangkang','2016-7-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('2','kangkang','2018-8-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('3','changchana','2019-9-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('4','aiai','2017-11-11','ssddfdd','thai','shenmu');
INSERT INTO comment VALUES('5','shasha','2015-12-11','ssddfdd','thai','shenmu');

