import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailsGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { StarComponent } from "../shared/star.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            { path: "products/:id", canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductFilterPipe,
        StarComponent
    ],
    providers: [
        ProductService,
        ProductDetailsGuard
    ]
})
export class ProductModule {

}