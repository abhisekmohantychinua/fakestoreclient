import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product?: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private _snack: SnackbarComponent
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = param['id'];
      this.productService.getProductById(id).subscribe({
        next: (data: any) => {
          this.product = data;
        },
        error: (error) => {
          this._snack.openSnackBar(
            "Couldn't fetch product. Try after sometime!",
            'Ok'
          );
        },
      });
    });
  }
}
