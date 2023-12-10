import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Catalogo} from "./entities/catalogo.entity";
import { Author } from './entities/autor.entity';

@Module({
  controllers: [CatalogoController],
  providers: [CatalogoService],
  imports:[
      TypeOrmModule.forFeature([Catalogo, Author])
  ]
})
export class CatalogoModule {}
