import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Catalogo} from "./entities/catalogo.entity";
import {Repository} from "typeorm";
import {PaginacionDto} from "../common/dto/paginacion.dto";

@Injectable()
export class CatalogoService {

  constructor(
      @InjectRepository(Catalogo)
      private readonly producRepository:Repository<Catalogo>,) {}
  async create(createCatalogoDto: CreateCatalogoDto) {
    try {
      const catalogos = this.producRepository.create(createCatalogoDto);
      await this.producRepository.save(catalogos)
      return catalogos
    } catch (error){
      console.log(error)
      throw new Error("No se pudo crear el registro revise su conexión")
    }
  }

  findAll(paginacionDto: PaginacionDto) {
    const {limit=10, offset = 1} = paginacionDto;
    return this.producRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const catalogos = await this.producRepository.findOneBy({id});

    if (!catalogos)
      throw new NotFoundException(id)
    return catalogos;
  }

  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    const catalogos = await this.producRepository.preload({
      id: id,
      ...updateCatalogoDto
    })
    if (!catalogos)
      throw new NotFoundException("No se pudo eliminar");
    await this.producRepository.save(catalogos);
    return catalogos
  }

  async remove(id: number) {
    const catalogos = await this.findOne(id);
    this.producRepository.delete(catalogos);
  }
}
