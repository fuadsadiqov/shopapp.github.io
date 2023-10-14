import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormsModule } from '@angular/forms'
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { ContactComponent } from './contact/contact.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ItemDetailViewComponent } from './item-detail-view/item-detail-view.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopRoutingModule } from "./shop-routing.module";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, HttpClientModule, TextMaskModule, ShopRoutingModule],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent, ProductListComponent, HomeComponent, FooterComponent, AboutComponent, NewsComponent, NewsItemComponent, ContactComponent, ItemDetailViewComponent, ShopViewComponent],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent]
})
export class ShopModule { }