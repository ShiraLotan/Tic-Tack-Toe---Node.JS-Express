var express = require('express');
var router = express.Router();
var dbHelper = require('../DB.model/sqlDB');


/* create DB */
router.get('/db',async function(req, res, next) {
    await dbHelper.pool.query(`CREATE DATABASE XO`)
  res.json({msg:'db was created'});
});

/* create table players */
router.get('/playersTabel',async function(req, res, next) {
  await dbHelper.pool.query(`CREATE TABLE Players (
                              pid varchar(255),
                              name varchar(255) NOT NULL,
                          );`)
res.json({msg:'Players tabel created'});
});
/* create table moves */
router.get('/playermove',async function(req, res, next) {
  await dbHelper.pool.query(`CREATE TABLE Moves (
                              playerid int,
                              colum varchar(255),
                              row varchar(255)
                          );`)
res.json({msg:'Moves tabel created'});
});

module.exports = router;
