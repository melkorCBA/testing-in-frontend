import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.service';

export type Order = {
  _id?: string;
  products?: { product: Product; quantity: number; _id: string }[];
  quantity?: number;
  name?: string;
  shippingAddress?: string;
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getOrder(): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}`);
  }

  AddProductToOrder(
    orderId: string,
    productId: string,
    quantity: number
  ): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/${orderId}/add-product`, {
      productId,
      quantity,
    });
  }

  updateOrderShippingInfo(
    orderId: string,
    name: string,
    shippingAddress: string
  ): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/${orderId}`, {
      name,
      shippingAddress,
    });
  }

  clearOrder(orderId: string): Observable<Order> {
    return this.http.delete<Order>(`${this.apiUrl}/${orderId}`);
  }
}
