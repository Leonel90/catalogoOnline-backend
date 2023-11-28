import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Catalogo {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('text',{
        unique:true,
    })
    nombre:string;

    @Column('text',{
        default:0,
    })
    edicion:string;

    @Column('int')
    anio:number
}
