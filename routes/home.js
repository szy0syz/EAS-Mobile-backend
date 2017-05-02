'use strict';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	console.log(req.queryConditions);
	res.json({a: 1111})
})

export default router;