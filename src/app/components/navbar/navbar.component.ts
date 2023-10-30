import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  categories: Array<string> = [];
  isLoggedIn: boolean = false;
  isMobile: boolean = false;
  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private _snack: SnackbarComponent,
    private dialog: MatDialog,
    private breakPointService: BreakpointObserver
  ) {}
  ngOnInit(): void {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      }
    });
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  loadCategory() {
    this.productService.getAllCategory().subscribe({
      next: (data: any) => {
        this.categories = data as Array<string>;
      },
      error: (error) => {
        this._snack.openSnackBar("Couldn't load catgories.", 'Ok');
      },
    });
  }
  logoutUser() {
    this.isLoggedIn = false;
    this.authService.logout();
  }
  openProfile() {
    this.dialog.open(ProfileComponent);
  }
}
