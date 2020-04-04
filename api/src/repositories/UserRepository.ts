import { User } from './../entities/User';
import {EntityRepository, AbstractRepository} from "typeorm";
import { Service } from 'typedi';

@Service()
@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {

    findById(id: number) {
        return this.repository.findOne({user_id: id});
    }
}
