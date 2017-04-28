'use strict';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.json({a: 1111})
})

export default router;