import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectCartTotal } from './cart.selectors';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {


  cartItems; Observable <any[]>;

  total$: Observable<number>;


  constructor(private store: store) { }


ngOnInit(){


this.cartItems$ = this.store.select(selectCartItems);


this.total$ = this.store.select(selectCartTotal);
}


clearCart(){


this.store.dispatch(clearCart());

}



  @Input() cartItems: any;

  getTotal(){


  }

}
