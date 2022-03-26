import express, {Request, Response} from "express";
const router = express.Router();

router.get('/api/todo', [], (req: Request, res: Response) => {
    return res.send('ss');
});

export { router as todoRouter };