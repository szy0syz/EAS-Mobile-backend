'use strict';

module.exports = {
	port: 8001,
	mongoUrl: 'mongodb://EasMobileeee:g2E9Lk02xXk4@192.168.97.200:27017/EasMobile',
	sqlseverUrl: 'mssql://szy0syz0yngf2017:xQnWdw3u4BOgwTuU@192.168.97.199:1433/YNNZ2011001',
	sequelizeOptions: {
    dialectOptions: {
      requestTimeout: 60*1000
    }
  },
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