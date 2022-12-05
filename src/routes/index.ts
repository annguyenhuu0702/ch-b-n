import { Router } from "express";
import configRoutes from "./v1/index";

const router = Router();

router.use("/v1", configRoutes);

export default router;
