import {Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Author } from "./autor.entity";

@Entity('Libros', { schema: 'public'})
export class Libro {
    @PrimaryGeneratedColumn('increment')
    id:number;

    /*@CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    create_at: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    update_at: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;*/



    @Column('text',{
        name: 'nombre',
        nullable: true,
        unique:true,
        comment: 'Nombre del Libro'
    })
    nombre:string;

    @Column('text',{
        name: 'edicion',
        nullable: false,
        comment: 'Numero de Edicion'
    })
    edicion:string;

    @Column('numeric',{
        name: 'anio',
        nullable: false,
        comment: 'Año del libro'
    })
    anio:number;

    @Column('text',{
        name: 'detalle',
        nullable: false,
        comment: 'Estado del Libro'
    })
    detalle:string;

    @Column('varchar',{
        name: 'imagen',
        nullable: true,
        comment: 'Url de imagen'
    })
    imagen: string

    @Column('boolean',{
        name: 'estado',
        nullable: true,
        comment: 'Estado registro'
    })
    estado: boolean

    @OneToMany(
        ()=>Author,
        (author)=>author.libro,
        {
            cascade: true
        }
    )
        nombreauthor?: Author[]

    /*@Column('text',{
        name: 'autor',
        nullable: true,
        comment: 'Autor del Libro'
    })
    autor: string;

    @Column('text',{
        name: 'categoria',
        nullable: true,
        comment: 'Categoria de Libro'
    })
    categoria: string;*/

    /*@Column('varchar',{
        name: 'imagen',
        nullable: true,
        comment: 'Imagen del Libro'
    })
    imageURL: string;*/

    /*@Column('date',{
        name: 'fecha',
        nullable: false,
        comment: 'Fecha de Registro'
    })
    createAT?: Date;*/
}
