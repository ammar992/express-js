import express from 'express';
import studentController from '../studentController';

const router = express.Router();


router.get('/getsessioninfo',studentController.get_session_info);
router.get('/deletesession',studentController.delete_session);
router.get('/regeneratesession',studentController.regn_session);
router.get('/sessionexample',studentController.session_example);
router.get('/getsessiondata',studentController.get_session_data);


export default router;

