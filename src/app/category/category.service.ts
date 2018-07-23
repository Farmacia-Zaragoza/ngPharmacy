import { host } from './../global/configuration';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {

  constructor( private http: Http) { }

  getProducts(filter) {
    return this.http.get(`${host}products_filtered_by_${filter}.json`);
  }
}
