CREATE DATABASE skatepark;

CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, name
VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, experience
INT NOT NULL, specialty VARCHAR(50) NOT NULL, photo VARCHAR(255) NOT
NULL, is_confirmed BOOLEAN NOT NULL, is_admin BOOLEAN NOT NULL);

INSERT INTO skaters (email,name,password,experience,specialty,photo,is_confirmed,is_admin)
VALUES
  ('svet@gmail.com','svet','123',0,'admin','test',true, true), 
  ('bip@gmail.com','bip','1234',3,'byker','test',false, false), 
  ('bop@gmail.com','bop','12345',5,'skater','test',true, false), 
  ('blop@gmail.com','blop','123456',8,'skater','test',true, false);
  
select * from skaters


 