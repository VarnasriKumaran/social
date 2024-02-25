# social

Database Table Involved in the social media app:

create database socialmedia;
use socialmedia;
create table user(
id int,
username varchar(45),
email varchar(45),
password varchar(45),
name varchar(45),
coverpic varchar(100),
profilepic varchar(100),
city varchar(45),
website varchar(45)
);
use socialmedia;
create table relationship(
followerid int,
followedid int
);

USE socialmedia;

CREATE TABLE comments (
     commentid int,
     user_id INT,
     descp VARCHAR(100),
     created_at DATETIME,
     post_id INT);


     OUTPUT:
     
 OUTPUT:
 ![image](https://github.com/VarnasriKumaran/social/assets/109358646/a4de5e44-ed04-48f2-b715-b0ee299212bb)
 ![image](https://github.com/VarnasriKumaran/social/assets/109358646/311b0eac-d6a3-433f-9fc1-bd63abaa53a9)



 


