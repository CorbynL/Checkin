import { CheckinEntryRepository } from './../repositories/CheckinEntryRepository';
import { CheckinEntry } from './../entities/CheckinEntry';
import { Service } from "typedi";
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class CheckinEntryService {
    constructor(@InjectRepository(CheckinEntry) private checkinEntryRepository: CheckinEntryRepository) {}

    getEntriesForPerson(id: number) {
        this.checkinEntryRepository.getEventsForPerson(id);
    }
}