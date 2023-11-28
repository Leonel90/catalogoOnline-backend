import {IsInt, IsOptional, IsPositive, IsString} from "class-validator";
import {Type} from "class-transformer";

export class CreateCatalogoDto {

    @IsString()
    nombre:string

    @IsString()
    @IsOptional()
    edicion?:string

    @IsInt()
    @IsPositive()
    @Type( ()=> Number)
    anio:number
}
