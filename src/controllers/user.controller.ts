import { Request, Response } from "express";
import { user_services } from "../services/user.services";

export const user_controller = {
  create: async (req: Request, res: Response) => {
    const { data, status } = await user_services.create(req.body);
    return res.status(status).json(data);
  },
  update: () => {},
  getAll: async () => {
    // nhận data từ services rồi trả về routes (client)
  },
};
