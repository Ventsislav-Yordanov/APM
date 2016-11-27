import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailsGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
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