import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import CD_Product from '../models/cd_product';
import Product from '../models/product';
import { ProductMatchedChange } from './product-matched';

@Component({
  selector: 'app-product-match',
  templateUrl: './product-match.component.html',
  styleUrls: ['./product-match.component.css']
})
export class ProductMatchComponent implements OnInit {

  @Input() public marketProduct: Product
  @Input() public storeProducts: CD_Product[];
  @Output() private selectStoreProduct: EventEmitter<ProductMatchedChange>;

  public selectedProductName: string;

  public selectedProduct(): CD_Product {
    return this.storeProducts.find(p => p.recordName == this.selectedProductName)
  }

  constructor() {
    this.selectStoreProduct = new EventEmitter<ProductMatchedChange>();
  }

  onChange() {
    this.selectStoreProduct.emit({ product: this.marketProduct, cd_productName: this.selectedProductName });
  }

  ngOnInit(): void {
  }
}
