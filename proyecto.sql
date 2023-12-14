-- Creando base de datos

DROP DATABASE IF EXISTS `PROYECTO`;
CREATE DATABASE `PROYECTO` CHARSET=utf8 COLLATE=utf8_spanish_ci;
USE `PROYECTO`;

-- Creando tablas

CREATE TABLE `clientes`(
    `Cedula` int NOT NULL UNIQUE,
    `Nombre` VARCHAR(255) NOT NULL,
    `Apellido` VARCHAR(255) NOT NULL,
    `Direccion` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`Cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `visitas`(
    `id` int NOT NULL AUTO_INCREMENT,
    `num_visitas` int NOT NULL DEFAULT 1,
    `cliente_cedula` int NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Claves foráneas

ALTER TABLE `visitas`
    ADD FOREIGN KEY (`cliente_cedula`) REFERENCES `clientes`(`Cedula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Agregando datos

INSERT INTO `clientes` (`Nombre`,`Apellido`,`Cedula`,`Direccion`) VALUES
    ('Juan','Espinoza',10876987,'Coro'),
    ('Pedro','Maradona',6789423,'Punto Fijo'),
    ('Ivan','Zarraga',22665032,'Coro'),
    ('Pablo','Zaragoza',7210931,'Tacuato'),
    ('Juan','Gonzalez',9087564,'Coro'),
    ('Maria','Puentes',12237912,'Chichiriviche'),
    ('Josmer','Trompiz',29748403,'Coro'),
    ('Olivia','Martinez',98712312,'Maracaibo');


INSERT INTO `visitas` (`num_visitas`,`cliente_cedula`) VALUES
    (2,10876987),
    (5,6789423),
    (12,22665032),
    (20,7210931),
    (17,9087564),
    (10,12237912),
    (28,29748403),
    (9,98712312);