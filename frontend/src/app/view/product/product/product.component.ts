import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'crud-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Iproduct[];
  displayedColumns : string[];
  constructor(
    private service : ProductService
  ) { 
    this.products = new Array<Iproduct>();
    this.displayedColumns = ['id', 'name','price', '#']
  }

  ngOnInit(): void {
    this.service.Get<Iproduct[]>().subscribe( (products) => {
      this.products = products;
      console.log(this.products)
    })
  }
}
