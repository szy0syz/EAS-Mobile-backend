'use strict';

import home from './home';

export default app => { 
  app.get('/', (req, res, next) => {
	  res.send('EAS Mobile backend...');
  });
  app.use('/home', home);

}