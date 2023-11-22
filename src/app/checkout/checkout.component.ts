import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectCartTotal } from '../cart/cart.selectors';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent  implements OnInit{

  total$ : Observable<number>;

  constructor (private store: store) {}


ngOnInit() {

  this.total$ = this.store.select(selectCartTotal)
  
}


  @Input() total: any;


  pay(){

    
  }

}
