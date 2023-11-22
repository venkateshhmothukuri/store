import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {store} from '@ngrx/store';
import{EMPTY} from 'rxjs';
import {map, mergeMap, withLatestForm} from 'rxjs/operators';


import * as cartActions from './cart.action';



@Injectable()

export class cartEffects {

constructor(private actions$: Actions, private store: store) {}


}