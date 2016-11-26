import { Component } from "@angular/core";

import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: "product-details.component.html"
})
export class ProductDetailsComponent {
    pageTitle: string = "Product details";
    product: IProduct;
}