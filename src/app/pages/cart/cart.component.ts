import { Component, OnInit } from '@angular/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Order } from 'src/app/model/Order';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  orders: Array<Order> = [];
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private _snack: SnackbarComponent
  ) {}
  ngOnInit(): void {
    const user: User = this.authService.getUser();
    this.productService.getCartByUserId(user.id).subscribe({
      next: (data: any) => {
        const orderList = data as Array<Order>;
        orderList.map((order) => {
          order.products?.map((productObj) => {
            this.productService.getProductById(productObj.productId).subscribe({
              next: (data) => {
                productObj.product = data as Product;
              },
            });
          });
        });
        this.orders = orderList;
      },
      error: (error) => {
        this._snack.openSnackBar("Couldn't fetch orders.", 'Ok');
      },
    });
  }

  onRemove(orderId?: number, productId?: number) {
    this.orders = this.orders.map((order) => {
      if (order.id === orderId) {
        order.products = order.products?.filter(
          (productObj) => productObj.productId !== productId
        );
      }
      return order;
    });
  }
}
