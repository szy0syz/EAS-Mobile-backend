'use strict';

import express from 'express';
import config from './index'
import router from '../routes/index.js';
import queryTranslate from '../middlewares/queryTranslate'
import winston from 'winston';
import expressWinston from 'express-winston';

const app = express();
app.use(express.static('/public'));

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200); /*让options请求快速返回*/
  else  next();
});

// app.use(expressWinston.logger({
//     transports: [
//         new (winston.transports.Console)({
//           json: true,
//           colorize: true
//         }),
//         new winston.transports.File({
//           filename: 'logs/success.log'
//         })
//     ]
// }));

app.use(queryTranslate.translate);
router(app);

// app.use(expressWinston.errorLogger({
//     transports: [
//         new winston.transports.Console({
//           json: true,
//           colorize: true
//         }),
//         new winston.transports.File({
//           filename: 'logs/error.log'
//         })
//     ]
// }));

app.use((err, req, res, next) => {
  res.send('找不到此路由');
})

export default app;