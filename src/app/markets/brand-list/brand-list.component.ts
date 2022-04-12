import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketService } from '../services/market.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import Market from '../models/market';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands$: Observable<String[]>;
  @Input() public name: string;

  constructor(private marketService: MarketService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.brands$ = this.marketService.getBrands(this.name);
  }
}
