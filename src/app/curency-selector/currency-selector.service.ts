import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { currency } from '../model/currency.model';

@Injectable()

export class CurrencySelectorService {
  currency :Array<currency> = [
    {"symbol": "€", "full": "Euro", "active": true},
    {"symbol": "$", "full": "Us Dollar"},
    {"symbol": "$", "full": "Peso Argentino"},
    {"symbol": "A$", "full": "Australian Dollar"},
    {"symbol": "R$", "full": "Real Brasileiro"},
    {"symbol": "C$", "full": "Canadian Dollar"},
    {"symbol": "$", "full": "Peso Chileno"},
    {"symbol": "¥", "full": "Chinese Yuan"},
    {"symbol": "COP", "full": "Peso Colombiano"},
    {"symbol": "¥", "full": "Japanese Yen"},
    {"symbol": "$", "full": "Peso Mexicano"}
  ]

  constructor(http: Http) { }

  getAllCurrency(){
    return this.currency;
  }

  getActiveCurrency(){
    let c = this.currency.filter((c)=> c.active);
    return c[0];
  }


}