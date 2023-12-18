import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Libro} from "./entities/libro.entity";
import {Repository} from "typeorm";
import {PaginacionDto} from "../common/dto/paginacion.dto";
import { Author } from './entities/autor.entity';

@Injectable()
export class CatalogoService {

  constructor(
      @InjectRepository(Libro)
      private readonly producRepository:Repository<Libro>,
      @InjectRepository(Author)
      private readonly authorRepository:Repository<Author>,
      ) {}
      
  async create(createCatalogoDto: CreateCatalogoDto) {
    try {
      const {nombreauthor = [], ...catalogoDetalles} = createCatalogoDto
      const catalogos = this.producRepository.create(
        {
          ...catalogoDetalles,
          nombreauthor:nombreauthor.map(nombreauthor => this.authorRepository.create({nombre: nombreauthor, apellido: nombreauthor, edad: nombreauthor}))
        }
        );
      await this.producRepository.save(catalogos)
      return catalogos
    } catch (error){
      console.log(error)
      throw new Error("No se pudo crear el registro revise su conexión")
    }
  }

  async findAll(paginacionDto: PaginacionDto) {
    const {limit=10, offset = 0} = paginacionDto;
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
      ...updateCatalogoDto,
      nombreauthor:[]
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
