import { Router } from "express";
import * as authCtrl from '../controllers/auth.controller'
import { verifySignup } from "../middlewares";

const router = Router()

router.post('/signup', verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted, authCtrl.signUp)
router.post('/signin', verifySignup.checkDuplicateUsernameOrEmail, authCtrl.signIn)

export default router