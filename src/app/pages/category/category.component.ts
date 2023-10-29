import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: string | undefined;
  products: Array<Product> = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _snack: SnackbarComponent
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.category = param['category'];
      this.productService.getProductByCategory(this.category).subscribe({
        next: (data: any) => {
          this.products = data as Array<Product>;
        },
        error: (error) => {
          console.log(error);
          this._snack.openSnackBar("Couldn't load Product of ", 'Ok');
        },
      });
    });
  }
}
