import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("My Frist commit");
  res.send("hello")
});

app.listen(5000, () => console.log("server running!!"));
