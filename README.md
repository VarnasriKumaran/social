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
 ![image](https://github.com/VarnasriKumaran/social/assets/109358646/d62c88e5-346e-40cf-b7d1-909d14ce2e44)

 ![image](https://github.com/VarnasriKumaran/social/assets/109358646/cdd73808-9e22-43d9-8373-0dd9ccc5556a)




 


