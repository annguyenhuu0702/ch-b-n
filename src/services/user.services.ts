import { User } from "../entities/User";
import { resData, resMessage } from "../types/common";
import { createUser } from "../types/user";

export const user_services = {
  create: async (body: createUser): Promise<resData<any> | resMessage> => {
    try {
      const data = await User.save({
        ...body,
      });
      return {
        status: 200,
        data: {
          data: data,
          message: "thành công",
        },
      };
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        data: {
          message: "Error",
        },
      };
    }
  },
  update: () => {},
  getAll: async () => {
    // nhận data từ services rồi trả về routes (client)
  },
};
