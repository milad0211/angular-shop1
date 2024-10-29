import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cart:Cart = { items: [] };
  constructor(private cartservice:CartService){}


  ngOnInit(): void {
    this.cartservice.cart.subscribe((_cart)=>{
      this.cart = _cart
    });
  }
}
