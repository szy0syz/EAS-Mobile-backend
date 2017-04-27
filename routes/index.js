'use strict';

import home from './home';

export default app => {
  
  app.use('/', (req, res, next) => {
	res.redirect('/home');
  });

  //app.use('/home',home);
}