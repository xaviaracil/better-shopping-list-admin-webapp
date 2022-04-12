import Product from "../models/product";

export interface ProductMatchedChange {
  product: Product;
  cd_productName: string;
}
