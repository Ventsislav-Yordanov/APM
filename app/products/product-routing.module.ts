import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ProductListComponent } from "./product-list.component";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsGuard } from "./product-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            { path: "products/:id", canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
        ])
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }