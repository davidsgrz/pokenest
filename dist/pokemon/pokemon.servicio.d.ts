import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pokemon } from './entidades/pokemon.entidad';
import { FiltrarPokemonDto } from './dto/filtrar-pokemon.dto';
export declare class PokemonServicio implements OnModuleInit {
    private pokemonRepo;
    constructor(pokemonRepo: Repository<Pokemon>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<Pokemon[]>;
    filtrar(dto: FiltrarPokemonDto): Promise<Pokemon[]>;
}
