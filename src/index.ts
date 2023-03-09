
import * as cors from 'cors';
import * as express from 'express';

const NODE_ENV = process.env.NODE_ENV || "development"
require('dotenv').config({
  path: `.env.${NODE_ENV}`
})

import './database/mongoose';

import { defaultRouter } from './routes/default';
import { characterRouter } from './routes/characterRoute';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/", characterRouter);
app.use("/", defaultRouter);

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = {app, server};