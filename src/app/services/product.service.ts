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
   { name: "BT 01", price: 2650, desc: "", image: "/assets/products/BT-01.png" },
  { name: "BT 02", price: 1870, desc: "", image: "assets/products/BT-02.png" },
  { name: "BT 03", price: 3120, desc: "", image: "assets/products/BT-03.png" },
  { name: "BT 04", price: 1490, desc: "", image: "assets/products/BT-04.png" },
  { name: "BT 05", price: 2280, desc: "", image: "assets/products/BT-05.png" },
  { name: "BT 06", price: 3430, desc: "", image: "assets/products/BT-06.png" },
  { name: "BT 07", price: 1990, desc: "", image: "assets/products/BT-07.png" },
  { name: "BT 08", price: 2760, desc: "", image: "assets/products/BT-08.png" },
  { name: "BT 09", price: 1340, desc: "", image: "assets/products/BT-09.png" },
  { name: "BT 10", price: 3050, desc: "", image: "assets/products/BT-10.png" },
  { name: "BT 11", price: 3190, desc: "", image: "assets/products/BT-11.png" },
  { name: "BT 12", price: 980, desc: "", image: "assets/products/BT-12.png" },
  { name: "BT 13", price: 1670, desc: "", image: "assets/products/BT-13.png" },
  { name: "BT 14", price: 2390, desc: "", image: "assets/products/BT-14.png" },
  { name: "BT 15", price: 2880, desc: "", image: "assets/products/BT-15.png" },
  { name: "BT 16", price: 1590, desc: "", image: "assets/products/BT-16.png" },
  { name: "BT 17", price: 3450, desc: "", image: "assets/products/BT-17.png" },
  { name: "BT 18", price: 2250, desc: "", image: "assets/products/BT-18.png" },
  { name: "BT 19", price: 1980, desc: "", image: "assets/products/BT-19.png" },
  { name: "BT 20", price: 1390, desc: "", image: "assets/products/BT-20.png" },
  { name: "BT 21", price: 2660, desc: "", image: "assets/products/BT-21.png" },
  { name: "BT 22", price: 1030, desc: "", image: "assets/products/BT-22.png" },
  { name: "BT 23", price: 1970, desc: "", image: "assets/products/BT-23.png" },
  { name: "BT 24", price: 2790, desc: "", image: "assets/products/BT-24.png" },
  { name: "BT 25", price: 3490, desc: "", image: "assets/products/BT-25.png" },
  { name: "BT 26", price: 1180, desc: "", image: "assets/products/BT-26.png" },
  { name: "BT 27", price: 2080, desc: "", image: "assets/products/BT-27.png" },
  { name: "BT 28", price: 3220, desc: "", image: "assets/products/BT-28.png" },
  { name: "BT 29", price: 950, desc: "", image: "assets/products/BT-29.png" },
  { name: "BT 30", price: 1760, desc: "", image: "assets/products/BT-30.png" },
  { name: "BT 31", price: 3410, desc: "", image: "assets/products/BT-31.png" },
  { name: "BT 32", price: 2600, desc: "", image: "assets/products/BT-32.png" },
  { name: "BT 33", price: 1210, desc: "", image: "assets/products/BT-33.png" },
  { name: "BT 34", price: 1540, desc: "", image: "assets/products/BT-34.png" },
  { name: "BT 35", price: 2970, desc: "", image: "assets/products/BT-35.png" },
  { name: "BT 36", price: 1100, desc: "", image: "assets/products/BT-36.png" },
  { name: "BT 37", price: 2260, desc: "", image: "assets/products/BT-37.png" },
  { name: "BT 38", price: 3150, desc: "", image: "assets/products/BT-38.png" },
  { name: "BT 39", price: 1840, desc: "", image: "assets/products/BT-39.png" },
  { name: "BT 40", price: 3440, desc: "", image: "assets/products/BT-40.png" },
  { name: "BT 41", price: 2110, desc: "", image: "assets/products/BT-41.png" },
  { name: "BT 42", price: 980, desc: "", image: "assets/products/BT-42.png" },
  { name: "BT 43", price: 3290, desc: "", image: "assets/products/BT-43.png" },
  { name: "BT 44", price: 1670, desc: "", image: "assets/products/BT-44.png" },
  { name: "BT 45", price: 3090, desc: "", image: "assets/products/BT-45.png" },
  { name: "BT 46", price: 2150, desc: "", image: "assets/products/BT-46.png" },
  { name: "BT 47", price: 1410, desc: "", image: "assets/products/BT-47.png" },
  { name: "BT 48", price: 3510, desc: "", image: "assets/products/BT-48.png" },
  { name: "BT 49", price: 2790, desc: "", image: "assets/products/BT-49.png" },
  { name: "BT 50", price: 1930, desc: "", image: "assets/products/BT-50.png" },
  { name: "BT 51", price: 1180, desc: "", image: "assets/products/BT-51.png" },
  { name: "BT 52", price: 2250, desc: "", image: "assets/products/BT-52.png" },
  { name: "BT 53", price: 3200, desc: "", image: "assets/products/BT-53.png" },
  { name: "BT 54", price: 1120, desc: "", image: "assets/products/BT-54.png" },
  { name: "BT 55", price: 3460, desc: "", image: "assets/products/BT-55.png" },
  { name: "BT 56", price: 1720, desc: "", image: "assets/products/BT-56.png" },
  { name: "BT 57", price: 2600, desc: "", image: "assets/products/BT-57.png" },
  { name: "BT 58", price: 1450, desc: "", image: "assets/products/BT-58.png" },
  { name: "BT 59", price: 3030, desc: "", image: "assets/products/BT-59.png" },
  { name: "BT 60", price: 2000, desc: "", image: "assets/products/BT-60.png" },
  { name: "BT 61", price: 1290, desc: "", image: "assets/products/BT-61.png" },
  { name: "BT 62", price: 1740, desc: "", image: "assets/products/BT-62.png" },
  { name: "BT 63", price: 2320, desc: "", image: "assets/products/BT-63.png" },
  { name: "BT 64", price: 2940, desc: "", image: "assets/products/BT-64.png" },
  { name: "BT 65", price: 990, desc: "", image: "assets/products/BT-65.png" },
  { name: "BT 66", price: 2780, desc: "", image: "assets/products/BT-66.png" },
  { name: "BT 67", price: 3500, desc: "", image: "assets/products/BT-67.png" },
  { name: "BT 68", price: 1620, desc: "", image: "assets/products/BT-68.png" },
  { name: "BT 69", price: 2160, desc: "", image: "assets/products/BT-69.png" },
  { name: "BT 70", price: 3120, desc: "", image: "assets/products/BT-70.png" },
  { name: "BT 71", price: 1880, desc: "", image: "assets/products/BT-71.png" },
  { name: "BT 72", price: 1230, desc: "", image: "assets/products/BT-72.png" },
  { name: "BT 73", price: 2070, desc: "", image: "assets/products/BT-73.png" },
  { name: "BT 74", price: 3240, desc: "", image: "assets/products/BT-74.png" },
  { name: "BT 75", price: 990, desc: "", image: "assets/products/BT-75.png" },
  { name: "BT 76", price: 2580, desc: "", image: "assets/products/BT-76.png" },
  { name: "BT 77", price: 3400, desc: "", image: "assets/products/BT-77.png" },
  { name: "BT 78", price: 1950, desc: "", image: "assets/products/BT-78.png" },
  { name: "BT 79", price: 1350, desc: "", image: "assets/products/BT-79.png" },
  { name: "BT 80", price: 2800, desc: "", image: "assets/products/BT-80.png" },
  { name: "BT 81", price: 3100, desc: "", image: "assets/products/BT-81.png" },
  { name: "BT 82", price: 1710, desc: "", image: "assets/products/BT-82.png" },
  { name: "BT 83", price: 2440, desc: "", image: "assets/products/BT-83.png" },
  { name: "BT 84", price: 1540, desc: "", image: "assets/products/BT-84.png" }
  ];

  getProducts() {
    return this.products;
  }
}
