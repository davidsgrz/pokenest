import { PokemonServicio } from './pokemon.servicio';
import { FiltrarPokemonDto } from './dto/filtrar-pokemon.dto';
import { Pokemon } from './entidades/pokemon.entidad';
export declare class PokemonControlador {
    private readonly pokemonServicio;
    constructor(pokemonServicio: PokemonServicio);
    findAll(): Promise<Pokemon[]>;
    filtrar(dto: FiltrarPokemonDto): Promise<Pokemon[]>;
}
