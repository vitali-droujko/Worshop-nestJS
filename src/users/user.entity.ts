import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    fistname: string;

    @ApiProperty()
    @Column()
    lastname: string;
}
