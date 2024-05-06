export interface productType{
    sku: string,
    name: string,
    price: string,
    type: string,
    details: {
        size?:string,
        width?:string,
        length?:string,
        weight?:string,
        height?:string,
    }
}