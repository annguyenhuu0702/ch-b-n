import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "hoacomuadong5",
  database: "chomaythangngu",
  synchronize: true,
  logging: true,
  entities: [User],
});
