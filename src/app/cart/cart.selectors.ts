import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState, cartstate} from './cart.reducer';


export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(

    selectCartState,

    (state)=> state.items
);


export const selectCartTotal = createSelector(

    selectCartItems,

    (items) => items.reduce((acc, item) => acc +item.price, 0)
);