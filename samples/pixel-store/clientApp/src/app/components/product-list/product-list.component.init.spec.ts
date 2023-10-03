import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { Product, ProductService } from 'src/app/services/product.service';
import { Order, OrderService } from 'src/app/services/order.service';
import { CartComponent } from '../cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ProductList : Intergration', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let orderService: OrderService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [ProductService, OrderService],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    orderService = TestBed.inject(OrderService);
    httpController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retirve products when initialy loaded', () => {
    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:3000/products`,
    });
    req.flush(testProducts());
    expect(component.products).toEqual(testProducts());
  });
  it('should retirve the current order when initialy loaded', () => {
    const orderId = testEmptyOrder()._id;
    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:3000/orders`,
    });
    req.flush(testEmptyOrder());
    expect(component.orderId).toEqual(<string>orderId);
  });

  fit('shoud add new item to the cart when add to cart is clicked', () => {
    httpController
      .expectOne({
        method: 'GET',
        url: `http://localhost:3000/products`,
      })
      .flush(testProducts());
    httpController
      .expectOne({
        method: 'GET',
        url: `http://localhost:3000/orders`,
      })
      .flush(testEmptyOrder());
    fixture.detectChanges();
    const orderId = testEmptyOrder()._id;
    const addCartBtn = fixture.debugElement.query(
      By.css('.btn-addToCart:first-child')
    ).nativeElement;
    (<HTMLButtonElement>addCartBtn.nativeElement).click();
    const req = httpController.match({
      method: 'POST',
      url: `http://localhost:3000/orders/${orderId}/add-product`,
    });
  });
});

function testProducts(): Product[] {
  return [
    {
      _id: '6516faf03e65a07df9923364',
      name: 'Google Pixel 6',
      SKU: 'PIXEL6-001',
      price: 699,
      image: 'pixel6.jpg',
    },
    {
      _id: '6516faf13e65a07df9923367',
      name: 'Google Pixel 6 Pro',
      SKU: 'PIXEL6PRO-001',
      price: 899,
      image: 'pixel6pro.jpg',
    },
    {
      _id: '6516faf13e65a07df992336a',
      name: 'Google Pixel 5a',
      SKU: 'PIXEL5A-001',
      price: 449,
      image: 'pixel5a.jpg',
    },
  ];
}

function testEmptyOrder(): Order {
  return {
    _id: '651710a0c90f5e86edd2981b',
    products: [],
    name: '',
    shippingAddress: '',
  };
}
