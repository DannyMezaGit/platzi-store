import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private _productService: ProductsService) {
    this.getAllProducts();
    this.products = this._productService.getAllProducts();
   }

  ngOnInit(): void {
  }

  clickProduct(id: number) {
    console.log('product', id);
  }

  getAllProducts() {
    this.products = this._productService.getAllProducts();
  }

}
