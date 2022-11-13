export interface PokemonResponse {
    id: number;
    name: string;
    sprites: Sprites;
    types: PokemonTypes[];
}

interface Sprites {
    front_default: string;
    versions: SpriteVersions;
}

interface SpriteVersions {
    generation_viii: any;
}

interface PokemonTypes {
    type: PokemonType;
}

interface PokemonType {
    name: string;
    url: string;
}