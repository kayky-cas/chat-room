import * as mongoose from 'mongoose';
import { enviroment } from '../enviroment/enviroment';


const { uri, port, db, config } = enviroment.databaseConfig;

mongoose.connect(`mongodb://${uri}:${port}/${db}`, config);

export = mongoose;