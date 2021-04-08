import { useContainer } from "routing-controllers";
import Container from "typedi";
import { useContainer as useContainerTORM } from "typeorm";
import { Container as ContainerTTE } from "typeorm-typedi-extensions";

export default async function loadIOC() {
  // USE IOC CONTAINER FOR REPOSITORY INJECTION
  useContainerTORM(ContainerTTE);

  // USE IOC CONTAINER FOR SERVICES INJECTION
  useContainer(Container);
}
