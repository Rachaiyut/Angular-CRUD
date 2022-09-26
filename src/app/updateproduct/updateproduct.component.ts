import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id!: number
  product:any = new Product();
  constructor(private productservice:ProductService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productservice.getProductById(this.id).subscribe(data => {this.product = data;})
  }

  onSubmit(){
    this.productservice.updateProducts(this.id, this.product).subscribe(data => {
      this.goToProductList();
    }, error=>console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products'])
  }
}
