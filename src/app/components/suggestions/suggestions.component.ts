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
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }
}
