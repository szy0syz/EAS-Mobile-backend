'use strict';

import express from 'express';
import PurInWarehs from '../../controllers/purInWarehs';

const router = express.Router();

// router.post('/', (req, res) => {
// 	console.log(req.queryConditions);
// 	res.json({a: 1111})
// })

router.get('/', PurInWarehs.queryRes);

export default router;