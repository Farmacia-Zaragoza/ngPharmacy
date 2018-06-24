import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {

  constructor( private http: Http) { }

  getProducts(filter) {
    return this.http.get(`https://farma.vbrqx.com/ang/products_filtered_by_${filter}.json`);
  }
}
