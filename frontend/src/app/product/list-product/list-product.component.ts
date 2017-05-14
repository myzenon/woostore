import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../product';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {SearchQuery} from '../search-product/search-query';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  listProductComponent = this;
  constructor(private productDataService: ProductService,
    private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // console.log(this.authenticationService.isLogin());
    // console.log(this.authenticationService.hasRole('admin'));
    this.productDataService.getAllProduct()
      .subscribe(products => {
        this.products = products;
        this.products[0].description = 'Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.Lorem ipsum dolor sit amet, vel libero, quisque suscipit nonummy nulla velit vitae proin, quam sed purus adipiscing, mi adipiscing consequat a molestie et. Cursus facilisis, sed etiam euismod eleifend dictum molestie, libero non, mollis ac sed, viverra eu tempor ut auctor et. Eros velit ante ligula interdum sit sed. Tempus placerat et est amet purus purus. Nulla tempor aliquam ante. Dolor pellentesque, quis penatibus congue, elit justo velit odio pede, suscipit nulla. Quis quam at ligula convallis fames cursus, aliqua sed id aliquet nam imperdiet magna, eros pellentesque a sapien nec ligula in, leo penatibus placerat dui fermentum tincidunt diam.';
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
        this.products.push(this.products[0]);
      });
  }

  searchProduct(search: SearchQuery, listProductCompoent: ListProductComponent) {
    console.log(listProductCompoent);
    listProductCompoent.productDataService.searchProduct(search).subscribe(products => listProductCompoent.products = products);
  }

  viewDetail(product) {
    this.router.navigate(['detail/'+ product.id]);
  }

  truncateDesc(desc: string) {
    if(desc.length > 50) {
      return desc.substring(0, 47) + '...';
    }
    return desc;
  }

}
