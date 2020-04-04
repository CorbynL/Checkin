import { Container } from 'typedi';
import { CheckinEntryService } from './../services/CheckinEntryService';
import { CheckinEntryRepository } from './../repositories/CheckinEntryRepository';
import { Controller, Get, Param } from "routing-controllers";

@Controller()
export class CheckinEntryController {
    private checkinEntryService : CheckinEntryService; 

    constructor() {
        this.checkinEntryService = Container.get(CheckinEntryService);
    }

    @Get("/user/:id/Entries")
    getEntriesForPerson(@Param("id") id: number) {
        return this.checkinEntryService.getEntriesForPerson(id);
    }
}