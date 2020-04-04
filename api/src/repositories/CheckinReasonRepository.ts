import { Service } from 'typedi';
import { CheckinReason } from './../entities/CheckinReason';
import {EntityRepository, AbstractRepository} from "typeorm";

@Service()
@EntityRepository(CheckinReason)
export class CheckinReasonRepository extends AbstractRepository<CheckinReason> {

    findById(id: number) {
        return this.repository.findOne({reasonId: id});
    }
}
