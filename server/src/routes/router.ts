import { Router } from 'express';

const router: Router = Router();

router.use('/messages', require('./messages'));

export = router;

