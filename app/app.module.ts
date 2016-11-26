import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
