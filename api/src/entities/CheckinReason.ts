import { CheckinEntry } from './CheckinEntry';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class CheckinReason {
    
    @PrimaryGeneratedColumn()
    reasonId: number;
 
    @Column("varchar", {
        length: 1000
    })
    reason: string;

    @OneToOne(type => CheckinEntry)
    @JoinColumn()
    entry: CheckinEntry
}