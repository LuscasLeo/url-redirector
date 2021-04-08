import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import { Service } from "typedi";
import Tag, { TagID } from "../repositories/tag/tag.entity";
import TagsService from "../services/tags.service";

@JsonController()
@Service()
export default class TagsController {
  constructor(private service: TagsService) {}
  @Get("/tags/:id")
  async getTag(@Param("id") id: TagID) {
    return await this.service.get(id);
  }

  @Get("/tags")
  async getTags() {
    return await this.service.getAll();
  }

  @Post("/tags")
  @UseBefore()
  async createTag(@Body({ required: true, validate: true }) data: Tag) {
    return await this.service.create(data);
  }
}
