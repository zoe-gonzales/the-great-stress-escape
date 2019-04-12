DROP DATABASE IF EXISTS destressordb;
CREATE DATABASE destressordb;


USE destressordb;
CREATE TABLE images
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	imageurl VARCHAR(400) NOT NULL,
	category VARCHAR(100)
);


USE destressordb;
CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	quote VARCHAR(400) NOT NULL,
	category VARCHAR NOT NULL
);

/* USE destressordb;
CREATE TABLE sounds
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	playlisturl VARCHAR(400) NOT NULL,
	category VARCHAR(100)
); */