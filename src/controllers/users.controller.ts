import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { Service } from "typedi";
import User, { UserID } from "../repositories/user/user.entity";
import UsersService from "../services/users.service";

@JsonController()
@Service()
export default class UsersController {
  constructor(private service: UsersService) {}
  @Get("/users/:id")
  async getUser(@Param("id") id: UserID) {
    return await this.service.getUserById(id);
  }

  @Get("/users")
  async getAllUsers() {
    return await this.service.getAllUsers();
  }

  @Post("/users")
  async create(@Body({ required: true }) data: Omit<User, "id">) {
    const newUser = this.service.createUser(data);
    if (!newUser) throw "Couldn't create user :C";

    return newUser;
  }
}
