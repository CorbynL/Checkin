import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, JoinColumn } from "typeorm";
import { User } from "./User";
import { EntryType } from "./EntryEnum";

@Entity()
export class CheckinEntry {

    @PrimaryGeneratedColumn()
    checkinEntry_id: number;

    @Column("varchar", {
        length: 20
    })
    entry_type: EntryType;

    @Column("datetime")
    entity_date: Date;

    @Column("varchar", {
        length: 1000
    })
    other_comment: string;

    @ManyToMany(type => User, user => user.entries)
    @JoinColumn()
    user: User;
}