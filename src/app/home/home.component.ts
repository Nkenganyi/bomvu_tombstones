import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

allProducts = this.productService.getProducts();
randomThree: any[] | undefined;

ngOnInit() {
  this.randomThree = this.getRandomProducts(this.allProducts, 3);
}

constructor(private productService: ProductsService){}

getRandomProducts(list: any[], count: number) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


selectedProduct: any = null;

   openModal(product: any) {
    this.selectedProduct = product;
  }
}
