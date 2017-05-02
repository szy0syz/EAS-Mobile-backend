'use strict';

import home from './home';
import purInWarehs from './im/purInWarehs'
export default app => { 
  app.get('/', (req, res, next) => {
	  res.send('EAS Mobile backend...');
  });
  app.use('/home', home);
  app.use('/purinwarehs', purInWarehs);
}