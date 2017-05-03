'use strict';

import home        from './home';
import purInWarehs from './im/purInWarehs'
import saleIssue   from './im/saleIssue'

export default app => { 
  app.get('/', (req, res, next) => {
	  res.send('EAS Mobile backend...');
  });
  app.use('/home', home);
  app.use('/purInWarehs', purInWarehs);
  app.use('/saleIssue', saleIssue);
}