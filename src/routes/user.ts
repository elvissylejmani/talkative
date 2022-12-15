import express, { Request, Response } from "express";
import AuthenticateController from "../Controllers/authenticate";
import passport from "passport";
const router = express.Router();

router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    }
);

router.post('/log-in', AuthenticateController.logIn);

export { router as userRouter };