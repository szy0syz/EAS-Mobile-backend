import express from './config/express';
import db from './config/mongoose';
import config from './config/index';

const app = express;

console.log('server started...' + config.port);

app.listen(config.port);