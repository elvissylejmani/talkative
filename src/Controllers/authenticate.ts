import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import passport from "passport";
import { config } from 'dotenv';
config();
import { env } from '../config/globals';

export default new class AuthenticateController {
    public async signUp(req: Request, res: Response, next: NextFunction) {
        const body = { _id: req.user };
        const token = jwt.sign({ user: body }, env.JWT_SECRET);

        return res.json({ token });
    }

    public async logIn(req: Request, res: Response, next: NextFunction) {
        return passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        return res.status(401).json({ message: "wrong credentials" })
                    }

                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user };
                            const token = jwt.sign({ user: body }, env.JWT_SECRET);

                            return res.json({ token });
                        }
                    );
                } catch (error) {
                    return next(error);
                }
            }
        )(req, res, next);
    }
}

