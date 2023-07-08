export class Pokemon {
    id?: string;
    name?: string;
    type1?: string;
    type2?: string;
    sprite?: string;
    height?: string;
    weight?: number;
    abilities?: any[];
    stats?: any[];

    getAbilities(): any {
        const abilities = this.abilities?.filter(ab => !ab.is_hidden);
        return abilities;
    }

    getWeightToKg(): any {
        return this.weight! / 10;
    }
}