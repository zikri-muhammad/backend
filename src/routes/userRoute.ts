import express, { Application, Request, Response, NextFunction } from "express";

var router = express.Router();

var router = express.Router();
router.route('/users').get( function(req: Request, res: Response, next: NextFunction) {
    res.json('okokokok');
});

export { router }
