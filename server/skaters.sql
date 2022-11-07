CREATE DATABASE skatepark;

CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, nombre
VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, anos_experiencia
INT NOT NULL, especialidad VARCHAR(50) NOT NULL, foto VARCHAR(255) NOT
NULL, estado BOOLEAN NOT NULL, is_admin BOOLEAN NOT NULL);

INSERT INTO skaters (email,nombre,password,anos_experiencia,especialidad,foto,estado,is_admin)
VALUES
  ('svet@gmail.com','svet','123',0,'admin','test',true, true), 
  ('bip@gmail.com','bip','1234',3,'byker','test',false, false), 
  ('bop@gmail.com','bop','12345',5,'skater','test',true, false), 
  ('blop@gmail.com','blop','123456',8,'skater','test',true, false);
  
select * from skaters


 