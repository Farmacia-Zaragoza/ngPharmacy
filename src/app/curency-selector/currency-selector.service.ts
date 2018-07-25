import { CookieService } from './../global/cookie.service';
import { host } from './../global/configuration';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { currency } from '../model/currency.model';

import "rxjs/add/operator/map";

@Injectable()

export class CurrencySelectorService {
  public currency: Array<currency>;
  public activeCurrencyId;

  constructor(private http: Http, private cookie: CookieService) {
    this.activeCurrencyId = this.cookie.getCookie('pAc');
  }

  getAllCurrency(){
    return this.http.get(`${host}currency.json`)
      .map((res)=>{
        this.currency = res.json();

        if(this.activeCurrencyId !== ""){
          this.currency.map(c=>{
            c.active ? c.active = false: null;

            if(c.id == this.activeCurrencyId)
              c.active = true;
          })
        }

        return this.currency;
      })
  }

  getActiveCurrency(){
    let c = this.currency.filter((c)=> c.active);
    return c[0];
  }


}