-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema farmacia_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `farmacia_db` ;

-- -----------------------------------------------------
-- Schema farmacia_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `farmacia_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `farmacia_db` ;

-- -----------------------------------------------------
-- Table `farmacia_db`.`Categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Categoria` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Farmacia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Farmacia` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Farmacia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nit` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `apellido` VARCHAR(50) NULL,
  `correo` VARCHAR(250) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(250) NULL,
  `telefono` VARCHAR(10) NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `id_farmacia` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_farmacia_idx` (`id_farmacia` ASC) VISIBLE,
  CONSTRAINT `farmacia_usuario`
    FOREIGN KEY (`id_farmacia`)
    REFERENCES `farmacia_db`.`Farmacia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Sede`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Sede` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Sede` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(250) NOT NULL,
  `direccion` VARCHAR(250) NULL,
  `ciudad` VARCHAR(250) NULL,
  `municipio` VARCHAR(250) NULL,
  `telefono` VARCHAR(10) NULL,
  `id_farmacia` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_farmacia_idx` (`id_farmacia` ASC) VISIBLE,
  CONSTRAINT `farmacia_sede`
    FOREIGN KEY (`id_farmacia`)
    REFERENCES `farmacia_db`.`Farmacia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Factura`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Factura` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Factura` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `total` DOUBLE NULL,
  `id_sede` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `Factura_id_cliente_Cliente_id` (`id_cliente` ASC) VISIBLE,
  INDEX `id_sede_idx` (`id_sede` ASC) VISIBLE,
  CONSTRAINT `Factura_id_cliente_Cliente_id`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `farmacia_db`.`Usuarios` (`id`),
  CONSTRAINT `id_sede`
    FOREIGN KEY (`id_sede`)
    REFERENCES `farmacia_db`.`Sede` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Producto` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(250) NOT NULL,
  `cant_stock` INT NOT NULL,
  `id_categoria` INT NOT NULL,
  `precio` DOUBLE NOT NULL,
  `fabricante` VARCHAR(45) NULL,
  `concentracion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `Producto_id_categoria_Categoria_id` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `Producto_id_categoria_Categoria_id`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `farmacia_db`.`Categoria` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `farmacia_db`.`Factura_Producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `farmacia_db`.`Factura_Producto` ;

CREATE TABLE IF NOT EXISTS `farmacia_db`.`Factura_Producto` (
  `id_producto` INT NOT NULL,
  `id_factura` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `total` DOUBLE NULL,
  INDEX `Factura_Producto_id_producto_Producto_id` (`id_producto` ASC) VISIBLE,
  INDEX `Factura_Producto_id_factura_Factura_id` (`id_factura` ASC) VISIBLE,
  CONSTRAINT `Factura_Producto_id_factura_Factura_id`
    FOREIGN KEY (`id_factura`)
    REFERENCES `farmacia_db`.`Factura` (`id`),
  CONSTRAINT `Factura_Producto_id_producto_Producto_id`
    FOREIGN KEY (`id_producto`)
    REFERENCES `farmacia_db`.`Producto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
