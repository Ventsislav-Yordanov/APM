import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: "product-details.component.html"
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    pageTitle: string = "Product details";
    product: IProduct;
    errorMessage: string;
    subscription: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) { }

    ngOnInit(): void {
        this.subscription = this._route.params.subscribe(
            params => {
                let id = +params["id"];
                this.getProduct(id);
            }
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        );
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product details: " + message;
    }
}