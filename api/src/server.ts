import { CheckinEntryController } from './controllers/CheckinReasonController';
import express from "express";
import {createConnection, Connection, getCustomRepository, useContainer, Repository} from "typeorm";
import "reflect-metadata";
import {Container} from "typedi";
import {createExpressServer} from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { CheckinEntryRepository } from './repositories/CheckinEntryRepository';
import { CheckinEntry } from './entities/CheckinEntry';


useContainer(Container);
const connection = await createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1numberisrequired",
  database: "checkin",
  entities: [
  __dirname + "/entities/*.js"
  ],
  synchronize: true,
  logging: false
})
.catch(error => console.log(error));

const { PORT = 3000 } = process.env;

const app = createExpressServer({
  controllers: [UserController, CheckinEntryController] // we specify controllers we want to use
});


console.log(__dirname + "/entites/*.js");
app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
