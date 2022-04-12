import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CD_Product from '../models/cd_product';
import Market from '../models/market';
import Match from '../models/match';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private serverHost = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProductsOfBrand(brand: string): Observable<CD_Product[]> {
    return this.http.get<CD_Product[]>(this.serverHost + '/api/products/', { params: { brand: brand } });
  }

  getMarkets(): Observable<Market[]> {
    return this.http.get<Market[]>(this.serverHost + '/api/products/markets');
  }

  getBrands(market: string): Observable<String[]> {
    return this.http.get<String[]>(`${this.serverHost}/api/products/markets/${market}/brands/`);
  }

  getProductsOfBrandInMarket(brand: string, market: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.serverHost}/api/products/markets/${market}/brands/${brand}`);
  }

  sendMatches(market: string, matches: Match[]): Observable<Boolean> {
    console.log('sendMatches', `${this.serverHost}/api/products/markets/${market}/offers`, matches)
    return this.http.post<Boolean>(`${this.serverHost}/api/products/markets/${market}/offers`, matches);
  }
}
