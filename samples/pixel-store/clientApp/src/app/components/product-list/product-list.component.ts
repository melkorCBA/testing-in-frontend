import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from 'src/app/services/order.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  orderId: string = '';
  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts()?.subscribe((products) => {
      this.products = products;
    });
    this.orderService.getOrder()?.subscribe((order) => {
      if (order._id) this.orderId = order._id;
    });
  }

  addToCart(productId: string) {
    this.orderService
      .AddProductToOrder(this.orderId, productId, 1)
      ?.subscribe();
  }
}
