'use strict';

import home        from './home'
import user        from './user'
import User        from '../controllers/user'
import Captchas    from '../controllers/captchas'
import userStatus  from '../middlewares/userStatus'
import baseUnit    from './org/baseUnit'
import admin       from './admin/index'
import saleIssue   from './im/saleIssue'
import purInWarehs from './im/purInWarehs'

export default app => { 
  app.get('/', (req, res, next) => {
	  res.send('EAS Mobile backend...');
  });
  app.use('/home', home)
  app.post('/login', User.login)
  app.post('/reg', User.addUserPost)
  app.post('/captchas', Captchas.getCaptchas)
  app.get('/captchas', Captchas.getCaptchas)

  //检查权限
  app.use('/', userStatus.checkLogin)

  app.use('/user', user)
  app.use('/admin', admin)
  app.use('/org/baseUnit', baseUnit)
  app.use('/saleIssue', saleIssue)
  app.use('/purInWarehs', purInWarehs)
}