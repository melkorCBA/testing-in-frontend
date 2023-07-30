import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product, ProductService } from './product.service';

describe('Service: Product - testing Http', () => {
  let service: ProductService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call send a get request with product id to correct endpoint when invoked', () => {
    const id = 1;
    const morckProduct: Product = {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: '...',
      images: ['...', '...', '...'],
    };

    // act
    service.getProductById(id).subscribe((data) => {
      // assert - optional
      expect(data).toEqual(morckProduct);
    });

    // assert METHOD and url
    const req = httpController.expectOne({
      method: 'GET',
      url: `https://dummyjson.com/products/${id}`,
    });

    // const req = httpController.expectOne(
    //   `https://dummyjson.com/products/${id}`
    // );

    // // Assert that the request is a GET.
    // expect(req.request.method).toEqual('GET');

    req.flush(morckProduct);
  });

  it("should fail with 404 when product is doesn't exsists", () => {
    const id = 99;
    spyOn(console, 'error');
    service.getProductById(id).subscribe((_) => {
      // Assert error handling
      expect(console.error).toHaveBeenCalledWith(
        `getProductById id=${id} failed: 404`
      );
    });
    const req = httpController.expectOne(
      `https://dummyjson.com/products/${id}`
    );

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
  });
});
