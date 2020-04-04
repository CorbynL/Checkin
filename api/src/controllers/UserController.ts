import { UserService } from './../services/UserService';
import { Inject, Container } from "typedi";
import { Controller, Get, Param, OnUndefined, QueryParam } from "routing-controllers";

@Controller()
export class UserController {

    private userService: UserService;
    constructor() {
        this.userService = Container.get(UserService);
    }
    @OnUndefined(404)
    @Get("/user/:id") 
    getAll(@Param("id") id: number){
        return this.userService.findOneById(id);
    }
    
    @OnUndefined(404)
    @Get("/user/")
    getPerson(@QueryParam("limit") limit: number) {
        
    }
}