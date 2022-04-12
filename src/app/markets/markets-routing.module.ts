import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketListComponent } from './market-list/market-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandItemComponent } from './brand-item/brand-item.component';

const routes: Routes = [
  { path: '', component: MarketListComponent },
  { path: 'brands/:name', component: BrandListComponent },
  { path: 'brands/:market/:brand', component: BrandItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
