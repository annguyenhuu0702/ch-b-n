import "reflect-metadata";
import * as dotenv from "dotenv";
import app from "./app";
dotenv.config();
import { AppDataSource } from "./db";

const port = process.env.PORT || 1603;

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(port, () => {
      console.log("App running at ", port);
    });
    console.log("database connected");
  } catch (error) {
    console.error(error);
  }
}

main();
