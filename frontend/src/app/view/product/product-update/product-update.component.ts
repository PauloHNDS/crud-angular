import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'crud-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Iproduct = {
    id: 0,
    name : "",
    price: 0.00
  };

  constructor(
    private http : ProductService,
    private urlParams : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    let id = this.urlParams.snapshot.paramMap.get('id') ?? '1';
    this.GetProduct(id);
  }

  GetProduct(id : string ) : void {
    this.http.GetById<Iproduct>(id).subscribe( (product) => {
      this.product = product;
    }, (err : HttpErrorResponse) => {
    })
  }
  update() {
    this.http.put<Iproduct>(this.product, this.product.id?.toString() ?? '1').subscribe( (result : Iproduct) => {
      this.http.showMensagem("Atualizado com sucesso !!");
      this.router.navigate(['product']);
    })
  }

}
