export class Product {
    naming: string;
    type_product: string;
    composition: string;
    weight: number;
    cost: number;
    constructor(naming: string, type_product: string, composition: string, weight: number, cost: number) {
        this.naming = naming;
        this.type_product = type_product;
        this.composition = composition;
        this.weight = weight;
        this.cost = cost;
    }
}