import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {StoreModule} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects'

import { AppComponent } from "./app.component";

import { cartEffects } from "./cart/cart.effects";

import { cartReducer } from "./cart/cart.reducer";
import { ItemListComponent } from "./item-list/item-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";



@NgModule ({

declarations: [

    AppComponent,
    ItemListComponent,
    CheckoutComponent,
],


imports:[

BrowserModule,
StoreModule,forRoot({cart: cartReducer}),
EffectsModule,forRoot([cartEffects]),
],

providers:[],
bootstrap: [AppComponent],

})


export class APPModule {}