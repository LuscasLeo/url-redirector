import {Service} from "typedi";
import {Repository} from "typeorm";
import {InjectRepository} from "typeorm-typedi-extensions";
import Tag, {TagID} from "../repositories/tag/tag.entity";

@Service()
export default class TagsService {

    constructor (@InjectRepository(Tag) private repo: Repository<Tag>) {}

    async create (data: Tag) {

        const newTag = this.repo.create({...data}),
            tag = await this.repo.save(newTag);

        return tag;

    }

    async update (tag: Tag) {

        return await this.repo.save(tag);

    }

    async delete (id: TagID) {

        return await this.repo.delete(id);

    }

    async get (id: TagID) {

        return await this.repo.findOneOrFail(id);

    }

    async getAll () {

        return await this.repo.find();

    }

}
