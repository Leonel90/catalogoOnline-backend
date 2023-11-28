import {IsOptional} from "class-validator";
import {Type} from "class-transformer";

export class PaginacionDto {
    @IsOptional()
    @Type(()=>Number)
    limit?:number

    @IsOptional()
    @Type(()=>Number)
    offset?:number

}