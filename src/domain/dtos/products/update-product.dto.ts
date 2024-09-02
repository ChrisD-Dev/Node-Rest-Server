


export class UpdateProductDTO {
    private constructor(
        public upc: string,
        public name?: string,
        public price?: number,
        public available?: boolean,
        public description?: string,
    ) { }

    static create(props: { [key: string]: any }): [string?, UpdateProductDTO?] {
        const { upc, name, price, available, description } = props

        if (!upc) return ['UPC is required']

        // !!available -> de esta manera si nos mandan un string podemos castearlo a boolean
        return [undefined, new UpdateProductDTO(upc, name, price, !!available, description)]
    }
}