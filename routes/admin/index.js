'use strict';

import express from 'express';
import Admin from '../../controllers/admin/admin'

const router = express.Router();

router.get('/', (req, res) => {
	res.json({name: '/admin'})
})

router.post('/login', Admin.login);
router.post('/register', Admin.register);

export default router