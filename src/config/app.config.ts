import dotenv from "dotenv";
import { getLogger } from "log4js";
import _ from "lodash";

const logger = getLogger("[CONFIG]"),
  config = dotenv.config();
if (config.error) {
  logger.error("Error when getting environment variables", config.error);
  throw config.error;
}

const {
  NODE_ENV,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_SYNCHRONIZE,
  SERVER_PORT,
  DOMAIN,
} = process.env;

const AppConfig = {
  environment: NODE_ENV,
  dev_env: NODE_ENV == "development",
  database: {
    host: DATABASE_HOST,
    port: parseInt(DATABASE_PORT),
    name: DATABASE_NAME,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    synchronize: Boolean(DATABASE_SYNCHRONIZE),
  },
  server: {
    port: parseInt(SERVER_PORT),
  },

  logger: {
    names: {
      main: "[MAIN]",
      loaderMain: "[LOADER MAIN]",
      serverLoader: "[SERVER LOADER]",
    },
  },
};

export default AppConfig;
