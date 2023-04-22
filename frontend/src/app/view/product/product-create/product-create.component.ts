import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal : string = "dale dele dele dale";

  product: Iproduct = {
    name : "",
    price: 0.00
  };
  constructor(
    private service: ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  fazeralgo() : void {
    console.log(this.propLegal);  
  }
  create(): void {
    this.service.create<Iproduct>(this.product).subscribe(
      (result : Iproduct) => {
        this.service.showMensagem("PRODUTO CADASTRADO COM SUCESSO!!!");
        this.router.navigate(['product']);
      }
    );
  }
}
