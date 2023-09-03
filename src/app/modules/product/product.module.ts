import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { MaterialUiModule } from "src/app/shared/material-ui/material-ui.module";

@NgModule({
  imports: [CommonModule, MaterialUiModule],
  declarations: [ProductListComponent, ProductItemComponent],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductModule {}
