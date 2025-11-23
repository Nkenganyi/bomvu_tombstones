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
  { name: "BT 02", price: 1870, desc: "", image: "assets/products/BT-02.jpg" },
  { name: "BT 03", price: 3120, desc: "", image: "assets/products/BT-03.jpg" },
  { name: "BT 04", price: 1490, desc: "", image: "assets/products/BT-04.jpg" },
  { name: "BT 05", price: 2280, desc: "", image: "assets/products/BT-05.jpg" },
  { name: "BT 06", price: 3430, desc: "", image: "assets/products/BT-06.jpg" },
  { name: "BT 07", price: 1990, desc: "", image: "assets/products/BT-07.jpg" },
  { name: "BT 08", price: 2760, desc: "", image: "assets/products/BT-08.jpg" },
  { name: "BT 09", price: 1340, desc: "", image: "assets/products/BT-09.jpg" },
  { name: "BT 10", price: 3050, desc: "", image: "assets/products/BT-10.jpg" },
  { name: "BT 11", price: 3190, desc: "", image: "assets/products/BT-11.jpg" },
  { name: "BT 12", price: 980, desc: "", image: "assets/products/BT-12.jpg" },
  { name: "BT 13", price: 1670, desc: "", image: "assets/products/BT-13.jpg" },
  { name: "BT 14", price: 2390, desc: "", image: "assets/products/BT-14.jpg" },
  { name: "BT 15", price: 2880, desc: "", image: "assets/products/BT-15.jpg" },
  { name: "BT 16", price: 1590, desc: "", image: "assets/products/BT-16.jpg" },
  { name: "BT 17", price: 3450, desc: "", image: "assets/products/BT-17.jpg" },
  { name: "BT 18", price: 2250, desc: "", image: "assets/products/BT-18.jpg" },
  { name: "BT 19", price: 1980, desc: "", image: "assets/products/BT-19.jpg" },
  { name: "BT 20", price: 1390, desc: "", image: "assets/products/BT-20.jpg" },
  { name: "BT 21", price: 2660, desc: "", image: "assets/products/BT-21.jpg" },
  { name: "BT 22", price: 1030, desc: "", image: "assets/products/BT-22.jpg" },
  { name: "BT 23", price: 1970, desc: "", image: "assets/products/BT-23.jpg" },
  { name: "BT 24", price: 2790, desc: "", image: "assets/products/BT-24.jpg" },
  { name: "BT 25", price: 3490, desc: "", image: "assets/products/BT-25.jpg" },
  { name: "BT 26", price: 1180, desc: "", image: "assets/products/BT-26.jpg" },
  { name: "BT 27", price: 2080, desc: "", image: "assets/products/BT-27.jpg" },
  { name: "BT 28", price: 3220, desc: "", image: "assets/products/BT-28.jpg" },
  { name: "BT 29", price: 950, desc: "", image: "assets/products/BT-29.jpg" },
  { name: "BT 30", price: 1760, desc: "", image: "assets/products/BT-30.jpg" },
  { name: "BT 31", price: 3410, desc: "", image: "assets/products/BT-31.jpg" },
  { name: "BT 32", price: 2600, desc: "", image: "assets/products/BT-32.jpg" },
  { name: "BT 33", price: 1210, desc: "", image: "assets/products/BT-33.jpg" },
  { name: "BT 34", price: 1540, desc: "", image: "assets/products/BT-34.jpg" },
  { name: "BT 35", price: 2970, desc: "", image: "assets/products/BT-35.jpg" },
  { name: "BT 36", price: 1100, desc: "", image: "assets/products/BT-36.jpg" },
  { name: "BT 37", price: 2260, desc: "", image: "assets/products/BT-37.jpg" },
  { name: "BT 38", price: 3150, desc: "", image: "assets/products/BT-38.jpg" },
  { name: "BT 39", price: 1840, desc: "", image: "assets/products/BT-39.jpg" },
  { name: "BT 40", price: 3440, desc: "", image: "assets/products/BT-40.jpg" },
  { name: "BT 41", price: 2110, desc: "", image: "assets/products/BT-41.jpg" },
  { name: "BT 42", price: 980, desc: "", image: "assets/products/BT-42.jpg" },
  { name: "BT 43", price: 3290, desc: "", image: "assets/products/BT-43.jpg" },
  { name: "BT 44", price: 1670, desc: "", image: "assets/products/BT-44.jpg" },
  { name: "BT 45", price: 3090, desc: "", image: "assets/products/BT-45.jpg" },
  { name: "BT 46", price: 2150, desc: "", image: "assets/products/BT-46.jpg" },
  { name: "BT 47", price: 1410, desc: "", image: "assets/products/BT-47.jpg" },
  { name: "BT 48", price: 3510, desc: "", image: "assets/products/BT-48.jpg" },
  { name: "BT 49", price: 2790, desc: "", image: "assets/products/BT-49.jpg" },
  { name: "BT 50", price: 1930, desc: "", image: "assets/products/BT-50.jpg" },
  { name: "BT 51", price: 1180, desc: "", image: "assets/products/BT-51.jpg" },
  { name: "BT 52", price: 2250, desc: "", image: "assets/products/BT-52.jpg" },
  { name: "BT 53", price: 3200, desc: "", image: "assets/products/BT-53.jpg" },
  { name: "BT 54", price: 1120, desc: "", image: "assets/products/BT-54.jpg" },
  { name: "BT 55", price: 3460, desc: "", image: "assets/products/BT-55.jpg" },
  { name: "BT 56", price: 1720, desc: "", image: "assets/products/BT-56.jpg" },
  { name: "BT 57", price: 2600, desc: "", image: "assets/products/BT-57.jpg" },
  { name: "BT 58", price: 1450, desc: "", image: "assets/products/BT-58.jpg" },
  { name: "BT 59", price: 3030, desc: "", image: "assets/products/BT-59.jpg" },
  { name: "BT 60", price: 2000, desc: "", image: "assets/products/BT-60.jpg" },
  { name: "BT 61", price: 1290, desc: "", image: "assets/products/BT-61.jpg" },
  { name: "BT 62", price: 1740, desc: "", image: "assets/products/BT-62.jpg" },
  { name: "BT 63", price: 2320, desc: "", image: "assets/products/BT-63.jpg" },
  { name: "BT 64", price: 2940, desc: "", image: "assets/products/BT-64.jpg" },
  { name: "BT 65", price: 990, desc: "", image: "assets/products/BT-65.jpg" },
  { name: "BT 66", price: 2780, desc: "", image: "assets/products/BT-66.jpg" },
  { name: "BT 67", price: 3500, desc: "", image: "assets/products/BT-67.jpg" },
  { name: "BT 68", price: 1620, desc: "", image: "assets/products/BT-68.jpg" },
  { name: "BT 69", price: 2160, desc: "", image: "assets/products/BT-69.jpg" },
  { name: "BT 70", price: 3120, desc: "", image: "assets/products/BT-70.jpg" },
  { name: "BT 71", price: 1880, desc: "", image: "assets/products/BT-71.jpg" },
  { name: "BT 72", price: 1230, desc: "", image: "assets/products/BT-72.jpg" },
  { name: "BT 73", price: 2070, desc: "", image: "assets/products/BT-73.jpg" },
  { name: "BT 74", price: 3240, desc: "", image: "assets/products/BT-74.jpg" },
  { name: "BT 75", price: 990, desc: "", image: "assets/products/BT-75.jpg" },
  { name: "BT 76", price: 2580, desc: "", image: "assets/products/BT-76.jpg" },
  { name: "BT 77", price: 3400, desc: "", image: "assets/products/BT-77.jpg" },
  { name: "BT 78", price: 1950, desc: "", image: "assets/products/BT-78.jpg" },
  { name: "BT 79", price: 1350, desc: "", image: "assets/products/BT-79.jpg" },
  { name: "BT 80", price: 2800, desc: "", image: "assets/products/BT-80.jpg" },
  { name: "BT 81", price: 3100, desc: "", image: "assets/products/BT-81.jpg" },
  { name: "BT 82", price: 1710, desc: "", image: "assets/products/BT-82.jpg" },
  { name: "BT 83", price: 2440, desc: "", image: "assets/products/BT-83.jpg" },
  { name: "BT 84", price: 1540, desc: "", image: "assets/products/BT-84.jpg" }
  ];

  getProducts() {
    return this.products;
  }
}
