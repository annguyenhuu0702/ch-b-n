import { Router } from "express";
import { user_controller } from "../../controllers/user.controller";
import { Request, Response } from "express";

const router = Router();

router.post("/create", user_controller.create);
router.get("/getAll", (req: Request, res: Response) => {
  res.send("helo");
});

export default router;
