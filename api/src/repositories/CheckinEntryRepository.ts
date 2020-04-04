import { CheckinEntry } from './../entities/CheckinEntry';
import {EntityRepository, AbstractRepository} from "typeorm";
import { Service } from 'typedi';

@Service()
@EntityRepository(CheckinEntry)
export class CheckinEntryRepository extends AbstractRepository<CheckinEntry> {

    findById(id: number) {
        return this.repository.findOne({checkinEntry_id: id});
    }
    getEventsForPerson(id: number) {
        return this.repository.find({ where: { user: { user_id: id } } });
    }
}
