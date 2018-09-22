
CREATE TABLE useropenidkey(
    openid varchar(50) not null,
    session_key varchar(50) not null
)
CREATE TABLE hotspot(
    hot varchar(50) not null
)
create table userbook(
    id int not null auto_increment primary key,
    isbn varchar(20) not null,
    openid varchar(50) not null,
    title varchar(100) not null,
    image varchar(200),
    publisher varchar(100) not null,
    summary varchar(500) not null,
    price varchar(100),
    tags varchar(100),
    author varchar(100),
    pages varchar(20),
    binding varchar(20),
    pubdate varchar(20)
)
create table home(
    id int not null auto_increment primary key,
    title varchar(100) not null,
    type varchar(100) not null,
    text varchar(100) not null,
    src varchar(250),
    image varchar(250) not null
)
create table userlike(
    id int not null auto_increment primary key,
    title varchar(100) not null,
    type varchar(100) not null,
    text varchar(100) not null,
    src varchar(250),
    image varchar(250) not null,
    openid varchar(50) not null,
    itemid tinyint(20) not null
)
