import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductComponent } from './view/product/product/product.component';
import { ProductCreateComponent } from './view/product/product-create/product-create.component';
import { ProductReadComponent } from './view/product/product-read/product-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/detail/:id',
    component:ProductCreateComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductCreateComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path : 'product/read',
    component: ProductReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
