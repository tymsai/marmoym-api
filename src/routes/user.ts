import * as express from 'express';
let router = express['Router']();
import * as UserController from '../controllers/v1/UserController';

router.get('/login', UserController.userLogin);
router.get('/', UserController.userGet);
router.post('/', UserController.userSignup);
router.put('/', UserController.userUpdate);
router.put('/', UserController.userDelete);

export default router;