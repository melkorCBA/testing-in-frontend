import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product, ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let orderService: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj('ProductService', ['getProducts']),
        },
        {
          provide: OrderService,
          useValue: jasmine.createSpyObj('OrderService', [
            'getOrder',
            'AddProductToOrder',
          ]),
        },
      ],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud add item to the cart', () => {
    component.products = testProducts;
    const orderId = '0923928392898309';
    component.orderId = orderId;
    component.addToCart(testProducts[0]._id);
    expect(
      (<jasmine.SpyObj<OrderService>>orderService).AddProductToOrder
    ).toHaveBeenCalledWith(orderId, testProducts[0]._id, 1);
  });
});

const testProducts: Product[] = [
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
