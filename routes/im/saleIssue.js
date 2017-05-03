'use strict';

import express     from 'express';
import SaleIssue   from '../../controllers/saleIssue';

const router = express.Router();

router.post('/', SaleIssue.query);

router.get('/', SaleIssue.query);

export default router;