import {Injectable} from '@angular/core';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart-service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  // checkOrder(order: Order): Observable<string> {
  //   const headers = new Headers()
  //   headers.append('Content-Type', 'application/json')
  //   return this.http.post(`${MEAT_API}/orders`,
  //                         JSON.stringify(order),
  //                         new RequestOptions({headers: headers}))
  //                   .map(response=> response.json())
  //                   .map(order => order.id)
  // }

}
