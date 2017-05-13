import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {DetailProductComponent} from './detail-product/detail-product.component';

const productRoutes: Routes = [
  {path: 'list', component: ListProductComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'detail/:id', component: DetailProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}
