

export class ProductEntity {
    constructor(
        public readonly id: string,
        public readonly upc: string,
        public readonly name: string,
        public readonly price: number,
        public readonly description?: string,
        public readonly available?: boolean,
    ) { }
}