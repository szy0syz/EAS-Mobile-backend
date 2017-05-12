'use strict';

import express from 'express';
import User from '../controllers/user'
import formidable from 'formidable'

const router = express.Router();

router.get('/', (req, res) => {
	res.json({name: '/user'})
})

// 上传接口
router.post('/upload', User.uploadAvatar);

router.post('/adduser', User.addUser);

export default router