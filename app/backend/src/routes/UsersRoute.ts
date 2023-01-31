import { validateEmail, validatePassword } from './../middlewares/UsersMiddlewares';
import { Router } from 'express';

import controller from '../controllers/UsersController';

const router = Router();

router.post('/',validateEmail, validatePassword, controller);

export default router;