/**
 * @author Kayky Casagrande
 * @date 07/01/2020
 * @version 1.0
 * @description This is the main module of the chat-api
 */

import * as express from 'express';
import { enviroment } from './enviroment/enviroment';
import router = require("./routes/router");


const server: express.Application = express();

server.use(express.json());
server.use(express.urlencoded());

server.use('/', router);

const { port, uri } = enviroment.serverConfig;

server.listen(port, (): void => console.log(`Running in http://${uri}:${port}`));