import { Component } from '@angular/core';
import { ProductGuardService } from './products/product-guard.service';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>       
  `
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";

  constructor (private _productGuardService: ProductGuardService){
    _productGuardService.init();
  }
}