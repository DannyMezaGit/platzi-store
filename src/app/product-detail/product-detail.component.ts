import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _productService: ProductsService,

              ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params.id;
      const product = this._productService.getProduct(id);
    });
  }

}
