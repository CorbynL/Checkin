import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { CheckinEntry } from "./CheckinEntry";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column("varchar", {
        nullable: false,
        length: 60
    })
    email: string;

    @Column("varchar", {
        nullable: false,
        length: 40
    })
    password: string;

    @Column("varchar", {
        nullable: false,
        length: 20
    })
    first_name: string;
    
    @Column("varchar", {
        nullable: false,
        length: 20
    })
    last_name: string;

    @OneToMany(type => CheckinEntry, entry => entry.user)
    entries: CheckinEntry[];
}