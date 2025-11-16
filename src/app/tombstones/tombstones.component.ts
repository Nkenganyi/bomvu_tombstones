import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';


@Component({
  selector: 'app-tombstones',
  templateUrl: './tombstones.component.html',
  styleUrls: ['./tombstones.component.css']
})
export class TombstonesComponent {
  allProducts = this.productService.getProducts();
  page = 1;
  perPage = 6;

  constructor(private productService: ProductsService){}

  get paginatedProducts(){
    const start = (this.page - 1) * this.perPage;
    return this.allProducts.slice(start, start + this.perPage);
  }

  totalPages(){
    return Math.ceil(this.allProducts.length / this.perPage);
  }

  selectedProduct: any = null;

  openModal(product: any) {
  this.selectedProduct = product;
}

}
