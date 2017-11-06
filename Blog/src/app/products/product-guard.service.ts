import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()
export class ProductGuardService implements CanActivate {
  products: IProduct[] = [];
  errorMessage: string;

  constructor(private _router: Router, private _productService: ProductService) {
    this.init();
  }

  init(): void {
    console.log("\n this is being called!");
    this._productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    }, error => this.errorMessage = <any>error);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (this.products && this.products.findIndex(product => product.productId == id) != -1){
      return true;
    } else {
      console.log(this.products);
      alert("Invalid product Id!");
      this._router.navigate(['/products']);
      return false;
    }
  }
}
