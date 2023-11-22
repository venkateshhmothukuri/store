import { createAction, props } from "@ngrx/store";

export const addToCart = createAction ('[Cart] Add Item', props<{item: any}>());
export const clearCart = createAction ('[Cart] Clear Cart');
