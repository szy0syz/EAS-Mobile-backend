'use strict';

//import home from './home';

export default app => {
	app.get('/', (req, res, next) => {
		res.send('123');
	});
	//app.use('/home', home);
}