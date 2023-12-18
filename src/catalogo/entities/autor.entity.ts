import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Libro } from "./libro.entity";

@Entity('Autor')
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
    apellido:string;

    @Column('text')
    edad:string;

    @ManyToOne(
        ()=>Libro,
        (libro)=>libro.nombreauthor
    )
    libro?: Libro

}