import express, { Request, Response } from "express";
import { User } from '../models/user';
const router = express.Router();

// router.get('/api/user', [], (req: Request, res: Response) => {
//     return res.send('ss');
// });

router.route('/user')
    .get(async (req: Request, res: Response) => {
        return res.send({users: await User.find({})});
    });

// router.post()

export { router as userRouter };