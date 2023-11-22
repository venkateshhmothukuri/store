import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

items = [

{id:1 name: 'Item 1', price: 10},
{id:2 name: 'Item 2', price: 20},
{id:3 name: 'Item 3', price: 30},
];


constructor(private store: store){}

addToCart(_item: any){

  this.store.dispatch(this.addToCart({_item}))
}

}
