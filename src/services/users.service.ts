import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import User, { UserID } from "../repositories/user/user.entity";

@Service()
export default class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async getUserById(id: UserID) {
    return await this.repo.findOne(id);
  }

  async getAllUsers() {
    return await this.repo.find();
  }

  async createUser(data: Omit<User, "id">) {
    const newUser = this.repo.create({ ...data }),
      user = await this.repo.save(newUser);

    return user;
  }
}
