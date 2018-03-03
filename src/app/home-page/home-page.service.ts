import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HomePageService {

  constructor(private http: Http) { }

  getPromoGalary(){
    return this.http.get("http://farma.dbrqx.com/ang/promoGalary.json");
  }

}
