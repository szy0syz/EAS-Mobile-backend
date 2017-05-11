'use strict';

import mongoose from 'mongoose';
import config from './index';
mongoose.connect(config.mongoUrl, {server:{auto_reconnect:true}});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  console.log('数据库连接成功');
})

db.on('error', (err) => {
  console.err('Error in MongoDB connection:' + err);
  mongoose.disconnect();
})

db.on('close', () => {
  console.log('数据库断开，重新连接数据库');
  mongoose.connect(config.mongoUrl, {server:{auto_reconnect:true}});
});

export default db