import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketListComponent } from './market-list/market-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandItemComponent } from './brand-item/brand-item.component';
import { MarketService } from './services/market.service';
import { HttpClientModule } from '@angular/common/http';
import { MarketsRoutingModule } from './markets-routing.module';
import { ProductMatchComponent } from './product-match/product-match.component';


@NgModule({
  declarations: [
    MarketListComponent,
    BrandListComponent,
    BrandItemComponent,
    ProductMatchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MarketsRoutingModule
  ],
  providers: [
    MarketService
  ]
})
export class MarketsModule { }
