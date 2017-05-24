'use strict'

class UserStatus {
  constructor() {
  
  }

  isLogin(req, res, next) {
    if(req.session.user) {
      req.flash('error', '已登录')
      req.redirect('back')
    } else {
      req.flash('error', '未登录')
      res.redirect('/login')
    }
  }

  checkLogin(req, res, next) {
    if (req.session.user) {
      next()
    } else {
      res.status(403).send({
        status: 0,
        type: 'NO_ACCESS',
        message: '拒绝访问'
      })
    }
  }
}

export default new UserStatus()