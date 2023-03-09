import * as express from 'express';
import { checkDatabase } from '../middlewares/databaseChecker';
import { getById } from '../controllers/characterController';
import { getByName } from '../controllers/characterController';
/**
 * Marvel Character`s endpoints
 */
export const characterRouter = express.Router();

characterRouter.get('/character/id/:id', checkDatabase, getById);
characterRouter.get('/character/name/:name', checkDatabase, getByName);
