import { Injectable } from "@angular/core";
import { ProductInterface } from "../interfaces/product.interface";

@Injectable()
export class ProductService {
  create(dto: ProductInterface): void {
    console.log(dto);
    
  }
}
