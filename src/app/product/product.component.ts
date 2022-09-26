import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!: Product[];
  constructor(private productservice: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveProduct();
  }

  retrieveProduct():void{
    this.productservice.getAll().subscribe(data => this.product=data)
  }

  updateProducts(id: number){
    this.router.navigate(['updateproduct', id]);
  }

  deleteProduct(id: number){
    this.productservice.deleteProducts(id).subscribe(data => {
      console.log(data);
      this.retrieveProduct()
    })
  }

}
