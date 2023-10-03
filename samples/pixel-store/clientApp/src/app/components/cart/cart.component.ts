import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Order, OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  pendingOrder: boolean = true;
  order: Order = {};
  total: number = 0;
  orderForm = this.fb.group({
    name: ['', Validators.required],
    shippingAddress: ['', Validators.required],
  });

  get showValidationMessage() {
    return (
      (this.orderForm.touched || this.orderForm.dirty) && this.orderForm.invalid
    );
  }

  constructor(private orderService: OrderService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.pendingOrder = true;
    this.orderService.getOrder().subscribe((order) => {
      this.order = order;
      this.setTotal(order);
    });
  }

  setTotal(order: Order) {
    if (!order.products || order.products?.length < 1) {
      this.total = 0;
      return;
    }
    this.total =
      order.products
        ?.map((p) => p.product.price * p.quantity)
        .reduce((a, b) => a + b) ?? 0;
  }

  get orderId() {
    return this.order._id;
  }

  clear() {
    if (this.orderId)
      this.orderService.clearOrder(this.orderId).subscribe((order) => {
        this.order = order;
        this.setTotal(order);
      });
  }

  placeOrder() {
    if (this.orderForm.invalid) return;
    const { name, shippingAddress } = this.orderForm.value;
    if (!this.orderId) return;
    if (!name || !shippingAddress) return;
    this.orderService
      .updateOrderShippingInfo(this.orderId, name, shippingAddress)
      .subscribe(() => {
        this.pendingOrder = false;
        if (!this.orderId) return;
        this.orderService.clearOrder(this.orderId).subscribe();
      });
  }
}
