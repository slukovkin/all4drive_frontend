import { ProductInterface } from "./product.interface";

export interface ProductStateInterface {
    products: ProductInterface[]
    validationErrors: string[] | null
}