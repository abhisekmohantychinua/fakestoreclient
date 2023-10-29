import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  categories: Array<string> = [];
  products: Array<Array<Product>> = [];
  slideConfig = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button><span class="material-symbols-outlined">navigate_before</span></button>',
    nextArrow: `<button><span class="material-symbols-outlined">navigate_next</span></button>`,
  };
  constructor(
    private productService: ProductService,
    private _snack: SnackbarComponent
  ) {}
  ngOnInit(): void {
    this.productService.getAllCategory().subscribe({
      next: (data: any) => {
        this.categories = data;
        this.categories.map((category, index) =>
          this.productService.getProductByCategoryInLimit(category).subscribe({
            next: (data: any) => {
              this.products[index] = data;
              console.log(this.products);
            },
            error: (error) => {
              console.log(error);
              this._snack.openSnackBar(
                "Couldn't load Product of " + category,
                'Ok'
              );
            },
          })
        );
      },
      error: (error) => {
        console.log(error);
        this._snack.openSnackBar("Couldn't load caegories", 'Ok');
      },
    });
  }
}
