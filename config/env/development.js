'use strict';

module.exports = {
	port: 8001,
	mongoUrl: '',
	sqlseverUrl: '',
	session: {
	  name: 'szy_EAS_mobile_server',
	  secret: 'szy_EAS_mobile_server_^&*',
	  cookie: {
		httponly: true,
		secure: false,
		maxAge: 365*24*60*60*1000, //365天 24小时 60分钟 60秒 1000毫秒
	  }
	}
}