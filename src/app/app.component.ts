import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'supermarket';
  cartItems =[];

  addToCart(item: any){

    this.cartItems.push(item);
  }

getTotal(){

  return this.cartItems.reduce((acc, item) => acc + item.price, 0);
}


}
