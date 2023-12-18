import {IsArray, IsBoolean, IsInt, IsOptional, IsPositive, IsString} from "class-validator";
import {Type} from "class-transformer";

export class CreateCatalogoDto {

    @IsString()
    nombre:string

    @IsString()
    edicion:string

    @IsInt()
    anio:number

    @IsString()
    @IsOptional()
    detalle?:string

    @IsString()
    imagen: string

    @IsBoolean()
    estado: boolean

    @IsString({ each: true})
    @IsArray()
    @IsOptional()
    nombreauthor?: string[]
}
