/**
 * Created by vlad on 12.1.17.
 */
import express from 'express';
import * as contactCtrl from '../controllers/contact.controller';

const router = express.Router();

router.post('/contact', contactCtrl.saveContact);

export default router;