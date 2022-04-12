import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketService } from '../services/market.service';

import Market from '../models/market';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {

  markets$: Observable<Market[]>;

  constructor(private marketService: MarketService) {
  }

  ngOnInit(): void {
    this.markets$ = this.marketService.getMarkets();
  }
}
