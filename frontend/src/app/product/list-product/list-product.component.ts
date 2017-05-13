import { Component, OnInit } from '@angular/core';
import {ProductDataServerService} from '../../service/product-data-server.service';
import {Product} from '../product';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];

  constructor(private productDataService: ProductDataServerService,
    private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.checkCustomerLogin()
      .subscribe( isLogin => {}, (error: any) => {
        console.log('Not Login')
        this.router.navigate(['login']);
      })

    this.productDataService.getAllProduct()
      .subscribe(products => {
        this.products = products
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
      });
  }

  viewDetail(product) {
    this.router.navigate(['detail/'+ product.id]);
  }

}
