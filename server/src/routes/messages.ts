import { Router } from 'express';
import Message = require('../database/models/Message');

const route = Router();

route.get('/', async (req, res):Promise<void> => {

    const messages = await Message.find({});

    res.json(messages);
});

export = route;