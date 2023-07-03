export interface Pokemon {
    id: string;
    name: string;
    type1: string;
    type2?: string;
    sprite: string;
    height: string;
    weight: number;
    abilities: any[];
    stats: any[];
}
