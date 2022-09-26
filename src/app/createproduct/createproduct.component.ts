import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product:Product = new Product;
  constructor(private productservice:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productservice.createProduct(this.product).subscribe(data => {
      this.goToProductlist();
    })
  }

  onSubmit(){
    console.log(this.product)
    this.saveProduct();
  }

  goToProductlist(){
    this.router.navigate(['/products']);
  }
  
}
