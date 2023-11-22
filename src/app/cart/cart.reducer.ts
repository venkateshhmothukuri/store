import {State, createReducer, on} from '@ngrx/store';
import * as cartActions from './cart.action';
import { state } from '@angular/animations';


export interface CartState {


    items: any[];
}


export const initialState: CartState = {

    items:[],
}

export const cartReducer = createReducer(

initialState,

on(cartActions.addToCart,  (state,{item})) => ({ ...State, items: [...State.items,  item]})),
on(cartActions.clearCart,  (state) => ({ ...State, items: []}))


);