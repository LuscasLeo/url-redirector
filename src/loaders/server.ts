import { Express } from "express";
import { getLogger } from "log4js";
import path from "path";
import { createExpressServer } from "routing-controllers";
import AppConfig from "../config/app.config";

const logger = getLogger(AppConfig.logger.names.serverLoader);

const { port } = AppConfig.server;

export default async function loadServer() {
  const app = createExpressServer({
    controllers: [path.resolve(__dirname, "..", "controllers", "*.ts")],
  }) as Express;

  await new Promise<void>((rs) => app.listen(port, () => rs()));

  logger.info(`Server listening to http://localhost:${port}`);
}
