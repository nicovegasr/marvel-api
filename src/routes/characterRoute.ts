import * as express from 'express';

import { checkDatabase } from '../middlewares/databaseChecker';
import { getById, getByName } from '../controllers/characterController';
import { resetDatabase } from '../middlewares/databaseReset';

/**
 * Marvel Character`s endpoints
 */
export const characterRouter = express.Router();

characterRouter.get('/character/id/:id', resetDatabase, checkDatabase, getById);
characterRouter.get('/character/name/:name', resetDatabase, checkDatabase, getByName);
