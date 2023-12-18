import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Libro} from "./entities/libro.entity";
import { Author } from './entities/autor.entity';

@Module({
  controllers: [CatalogoController],
  providers: [CatalogoService],
  imports:[
      TypeOrmModule.forFeature([Libro, Author])
  ]
})
export class CatalogoModule {}
