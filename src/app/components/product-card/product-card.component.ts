import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  constructor(private router: Router) {}
  openProduct() {
    this.router.navigate(['..', 'product', this.product?.id]);
  }
}
