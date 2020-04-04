import { UserRepository } from './../repositories/UserRepository';
import { Service } from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import { User } from "../entities/User";


@Service()
export class UserService{

    constructor(@InjectRepository(User) private userRepository: UserRepository) {
        
    }

    findOneById(id: number) {
        return this.userRepository.findById(id);
    }
}