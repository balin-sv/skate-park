CREATE DATABASE skatepark;

CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, nombre
VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, anos_experiencia
INT NOT NULL, especialidad VARCHAR(50) NOT NULL, foto VARCHAR(255) NOT
NULL, estado BOOLEAN NOT NULL);

INSERT INTO skaters (email,nombre,password,anos_experiencia,especialidad,foto,estado)
VALUES('test@gmail.com','bip','123',5,'skater','test',true);

INSERT INTO skaters (email,nombre,password,anos_experiencia,especialidad,foto,estado)
VALUES('test2@gmail.com','tip','1234',3,'byker','test',false);

INSERT INTO skaters (email,nombre,password,anos_experiencia,especialidad,foto,estado)
VALUES('test3@gmail.com','top','12345',5,'skater','test',true);

select * from skaters