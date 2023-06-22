import express, { Application, Request, Response, NextFunction } from "express";
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Xpress' });
});

module.exports = router;
