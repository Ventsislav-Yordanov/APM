import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailsGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            { path: "products/:id", canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductFilterPipe,
    ],
    providers: [
        ProductService,
        ProductDetailsGuard
    ]
})
export class ProductModule { }