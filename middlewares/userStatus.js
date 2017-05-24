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
    console.log(eq.session.user)
    if(!req.session.user) {
      req.send({
        status: 0,
        type: 'NO_ACCESS',
        message: '拒绝访问'
      })
    }
    // 如果有session就继续走路由
    next()
  }
}

export default new UserStatus()