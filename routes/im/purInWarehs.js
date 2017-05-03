'use strict';

import express from 'express';
import PurInWarehs from '../../controllers/purInWarehs';

const router = express.Router();

router.post('/', PurInWarehs.query);

router.get('/', PurInWarehs.query);

export default router;