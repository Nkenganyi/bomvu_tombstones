import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  desc: string;
  image: string; // NEW
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      name: "Classic Upright",
      price: 1250,
      desc: "Polished granite — timeless silhouette",
      image: "assets/products/classic-upright.jpg"
    },
    {
      name: "Rounded Heritage",
      price: 1780,
      desc: "Hand-chiseled edge & inscription",
      image: "assets/products/rounded-heritage.jpg"
    },
    {
      name: "Family Bench",
      price: 2900,
      desc: "Larger format for family inscriptions",
      image: "assets/products/family-bench.jpg"
    },
    {
      name: "Premium Granite",
      price: 3500,
      desc: "Premium imported stone",
      image: "assets/products/premium-granite.jpg"
    },
    {
      name: "Double Grave Stone",
      price: 3900,
      desc: "For shared memorials",
      image: "assets/products/double-stone.jpg"
    },
    {
      name: "African Red Marble",
      price: 4200,
      desc: "Rare African marble finish",
      image: "assets/products/red-marble.jpg"
    }
  ];

  getProducts() {
    return this.products;
  }
}
