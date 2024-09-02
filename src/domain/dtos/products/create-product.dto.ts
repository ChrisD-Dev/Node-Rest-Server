

export class CreateProductDTO {
    private constructor(
        public upc: string,
        public name: string,
        public price: number,
        public available?: boolean,
        public description?: string,
    ) { }

    static create(props: { [key: string]: any }): [string?, CreateProductDTO?] {
        const { upc, name, available, price, description } = props

        if (!upc) return ['UPC is required']
        if (!name) return ['Name is required']
        if (!price) return ['Price is required']

        // !!available -> de esta manera si nos mandan un string podemos castearlo a boolean
        return [undefined, new CreateProductDTO(upc, name, price, !!available, description)]
    }
}