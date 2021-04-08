import { getLogger } from "log4js";
import AppConfig from "../config/app.config";
import loadDatabase from "./database";
import loadIOC from "./ioc";
import loadServer from "./server";

const logger = getLogger(AppConfig.logger.names.loaderMain);
export default async function startLoader() {
  await loadIOC();

  await loadDatabase();
  logger.info("Database Initialized");

  await loadServer();
  logger.info("Server Initialized");
}
