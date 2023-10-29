import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './resources';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductByCategoryInLimit(category: string, limit: number = 5) {
    return this.http.get(
      `${BASE_URL}/products/category/${category}?limit=${limit}`
    );
  }
  getProductByCategory(category: string | undefined) {
    return this.http.get(`${BASE_URL}/products/category/${category}`);
  }

  getAllCategory() {
    return this.http.get(`${BASE_URL}/products/categories`);
  }

  getProductById(id: number) {
    return this.http.get(`${BASE_URL}/products/${id}`);
  }
  getCartByUserId(id?: number) {
    return this.http.get(`${BASE_URL}/carts/user/${id}`);
  }
}
