create database if not exists kob;

use kob;

create table bot
(
    id          int auto_increment
        primary key,
    description varchar(100) null,
    content     varchar(300) null,
    createtime  datetime     null,
    modifytime  datetime     null,
    constraint id
        unique (id)
);

create table record
(
    id         int auto_increment
        primary key,
    a_id       int           null,
    a_sx       int           null,
    a_sy       int           null,
    b_id       int           null,
    b_sx       int           null,
    b_sy       int           null,
    a_steps    varchar(1000) null,
    b_steps    varchar(1000) null,
    map        varchar(1000) null,
    loser      varchar(10)   null,
    createtime datetime      null,
    constraint id
        unique (id)
);

create table user
(
    id       int              null,
    username varchar(100)     null,
    password varchar(100)     null,
    rating   int default 1500 null
);

show tables;
