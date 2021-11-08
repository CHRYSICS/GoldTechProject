-- Create Database
CREATE DATABASE IF NOT EXISTS Goldtech;
USE Goldtech;

-- If database exists, drop all existing tables to reset
DROP TABLE IF EXISTS Coupons;
DROP TABLE IF EXISTS Admins;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    `id` VARCHAR(255) PRIMARY KEY,
    UNIQUE KEY userID (`id`)
);

CREATE TABLE Coupons (
    `code` VARCHAR(255) PRIMARY KEY,
    `storeName` VARCHAR(255),
    `storeURL` VARCHAR(255),
    `firstUse` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `recentUse` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    

);
-- Initialize User table
-- CREATE TABLE Coupons(
--     `store` varchar(255),
--     `URL`,
--     `code`,
--     `firstUse`,
--     `recentUse`,
--     `timesUsed`,
--     `userID`
-- )

-- Dummy Users
INSERT INTO Users(id)
VALUES 
    ('hello'),
    ('World');
