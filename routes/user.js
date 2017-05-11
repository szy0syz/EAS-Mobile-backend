'use strict';

import express from 'express';
import User from '../controllers/user'
import formidable from 'formidable'

const router = express.Router();

router.get('/', (req, res) => {
	res.json({name: '/user'})
})

router.post('/upload', User.uploadAvatar);

export default router