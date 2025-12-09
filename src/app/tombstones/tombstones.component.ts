import { Component } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-tombstones',
  templateUrl: './tombstones.component.html',
  styleUrls: ['./tombstones.component.css'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TombstonesComponent {
  allProducts = this.productService.getProducts();
  page = 1;
  perPage = 6;
  isMobile = false;

ngOnInit() {
  this.checkScreen();
  window.addEventListener('resize', () => this.checkScreen());
}

checkScreen() {
  this.isMobile = window.innerWidth <= 576; // Bootstrap XS breakpoint
}

  constructor(private productService: ProductsService){}

  get paginatedProducts(){
    const start = (this.page - 1) * this.perPage;
    return this.allProducts.slice(start, start + this.perPage);
  }

  selectedProduct: any = null;

  openModal(product: any) {
    this.selectedProduct = product;
  }

  totalPages(){
    return Math.ceil(this.allProducts.length / this.perPage);
  }

  goToPage(n: number) {
    this.page = n;
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage() {
    if (this.page < this.totalPages()) {
      this.page++;
    }
  }
}
