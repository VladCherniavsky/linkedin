/**
 * Created by vlad on 12.1.17.
 */
import express from 'express';
import * as contactCtrl from '../controllers/contact.controller';

const router = express.Router();

router.get('/contact', contactCtrl.getAll);
router.post('/contact', contactCtrl.saveContact);

export default router;