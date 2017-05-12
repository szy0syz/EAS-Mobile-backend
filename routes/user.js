'use strict';

import express from 'express';
import User from '../controllers/user'
import formidable from 'formidable'

const router = express.Router();

router.get('/', (req, res) => {
	res.json({name: '/user'})
})

// 上传头像接口
router.post('/upload', User.uploadAvatar);

router.get('/adduser', User.regUserGet);
router.post('/adduser', User.addUserPost);

export default router