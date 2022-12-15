import passport from "passport";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken"

export default new class AuthenticateController {
    public async signUp() {
        console.log("HIII");
        passport.authenticate('signup', { session: false }),
            async (req: Request, res: Response, next: any) => {
                try {
                    res.json({
                        message: 'Signup successful',
                        user: req.user
                    });
                } catch (error) {
                    res.json(error).status(500);
                }
            }
    }

    public async logIn(req: Request, res: Response, next: NextFunction) {
        console.log(req);
        return passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');

                        return next(error);
                    }

                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');

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

