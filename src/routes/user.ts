import express, { Request, Response } from "express";
import AuthenticateController from "../Controllers/authenticate";
import passport from "passport";
const router = express.Router();

router.post(
    '/sign-up',
    passport.authenticate('signup', { session: false }),
    AuthenticateController.signUp
);

router.post('/log-in', AuthenticateController.logIn);

export { router as userRouter };