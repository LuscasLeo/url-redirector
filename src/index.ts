import { configure as configureLogger, getLogger } from "log4js";
import "reflect-metadata";
import AppConfig from "./config/app.config";

import startLoader from "./loaders";

const logger = getLogger(AppConfig.logger.names.main);

async function init() {
  configureLogger({
    appenders: {
      [AppConfig.logger.names.main]: {
        type: "stdout",
        level: "all",
      },
    },
    categories: {
      default: { level: "all", appenders: [AppConfig.logger.names.main] },
    },
  });

  logger.info(`Starting Project...`);

  await startLoader();
}

init().catch((err) => logger.error(err));
