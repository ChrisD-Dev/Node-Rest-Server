

export class DeleteProductDTO {
    private constructor(
        public upc: string
    ) { }

    static create(props: { [key: string]: any }): [string?, DeleteProductDTO?] {
        const { upc } = props

        if (!upc) return ['UPC is required']

        return [undefined, new DeleteProductDTO(upc)]
    }
}