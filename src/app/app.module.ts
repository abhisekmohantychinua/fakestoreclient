import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { BannerComponent } from './components/banner/banner.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './pages/cart/cart.component';
import { BackArrowComponent } from './components/back-arrow/back-arrow.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BannerComponent,
    SuggestionsComponent,
    SnackbarComponent,
    ProductCardComponent,
    ProductComponent,
    CategoryComponent,
    LoginComponent,
    ProfileComponent,
    CartComponent,
    BackArrowComponent,
    DocumentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    SlickCarouselModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
