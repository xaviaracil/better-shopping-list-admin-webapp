import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import CD_Product from '../models/cd_product';
import Match from '../models/match';
import Product from '../models/product';
import { ProductMatchedChange } from '../product-match/product-matched';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {

  @Input() public brand: string;
  @Input() public market: string;
  marketProducts$: Observable<Product[]>;
  storeProducts$: Observable<CD_Product[]>;

  private matches: Array<Match>;

  constructor(private marketService: MarketService, private route: ActivatedRoute) {
    this.matches = new Array<Match>();
  }

  ngOnInit(): void {
    this.market = this.route.snapshot.paramMap.get('market');
    this.brand = this.route.snapshot.paramMap.get('brand');
    this.marketProducts$ = this.marketService.getProductsOfBrandInMarket(this.brand, this.market);
    this.storeProducts$ = this.marketService.getProductsOfBrand(this.brand);
  }

  public onSelectStoreProduct({ product, cd_productName }: ProductMatchedChange): void {
    console.log('onSelectStoreProduct', product, cd_productName)
    let index = this.matches.findIndex((value: Match, index: number, obj: Match[]) => value.product.id === product.id)
    if (index !== -1) {
      this.matches.splice(index, 1, { product, cd_productName })
    } else {
      this.matches.push({ product, cd_productName })
    }
  }

  sendMatches(): void {
    this.marketService.sendMatches(this.market, this.matches)
      .subscribe((result: any) => {
        console.log(result)
      }, (err) => {
        console.error(err.error.msg);
      });
  }
}
