import { createConnection } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import AppConfig from "../config/app.config";

const {
  host,
  name: database,
  password,
  username,
  port,
  synchronize,
} = AppConfig.database;

export default async function loadDatabase() {
  const connection = await createConnection({
    type: "postgres",
    database,
    port,
    username,
    password,
    host,
    synchronize,
    logging: AppConfig.dev_env,
    entities: ["src/repositories/**/*.entity.ts"],
    namingStrategy: new SnakeNamingStrategy(),
  });
}
