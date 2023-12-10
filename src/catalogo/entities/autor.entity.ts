import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity()
export class Author {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text',{
        unique:true,
    })
    nombre:string;

    @Column('text',{
        default:0,
    })
    Apellido:string;

    @Column('int')
    edad:number;

}