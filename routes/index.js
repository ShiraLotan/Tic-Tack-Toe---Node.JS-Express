var express = require('express');
var router = express.Router();
var dbhelper = require('../DB.model/sqlDB');

/* ADD PLAYERS */
router.post('/addplayers', async function(req, res, next) {
  await dbhelper.pool.query(`INSERT INTO Players (pid, name)
                            VALUES ('X', '${req.body.name1}');`)
  await dbhelper.pool.query(`INSERT INTO Players (pid, name)
                            VALUES ('O','${req.body.name2}');`)

      res.json(req.body)
});

/* ADD PLAYER MOVE */
router.post('/playermove', async function(req, res, next) {
 
    await dbhelper.pool.query(`INSERT INTO Moves (playerid, colum, row)
    VALUES ('${req.body.player}' , '${req.body.col}', '${req.body.row}');`)
  
      res.json({msg:'Move was added'})
});

/* RESET BOARD */
router.get('/reset', async function(req, res, next) {
  await dbhelper.pool.query(`DELETE FROM Players`)
  await dbhelper.pool.query(`DELETE FROM Moves`)

      res.json({msg:'info was deleted'})
});

/*GET PLAYERS AND MOVES */
router.get('/getplayersandmoves', async function(req, res, next) {
 var resualt =  await dbhelper.pool.query(`SELECT * FROM Moves`)

      res.json(resualt)
});

module.exports = router;
