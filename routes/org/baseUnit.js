'use strict';

import express from 'express';
import baseUnit from '../../controllers/ORG/baseUnit'

const router = express.Router();

router.get('/', baseUnit.getAll)

export default router