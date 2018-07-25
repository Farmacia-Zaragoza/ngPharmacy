import { CookieService } from './../global/cookie.service';
import { currency } from './../model/currency.model';
import { Component, OnInit } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';
import { CurrencySelectorService } from './currency-selector.service';

@Component({
  selector: 'curency-selector',
  templateUrl: './curency-selector.component.html',
  styleUrls: ['./curency-selector.component.css']
})
export class CurencySelectorComponent implements OnInit {
  allCurrency: Array<currency>;
  activeCurrency: currency;

  constructor(private service: CurrencySelectorService, private cookie: CookieService) { }

  slideUp(btn){
    jqMethods.slideUp(btn);

  }

  slideDown(btn){
    jqMethods.slideDown(btn);
  }

  slideStop(btn){
    jqMethods.slideStop(btn);
  }

  changeCurrency(currency: currency){
    this.activeCurrency.active = false;
    this.activeCurrency = currency;
    currency.active = !currency.active;

    this.cookie.setCookie('pAc', currency.id, 2);
  }

  ngOnInit() {
    this.service.getAllCurrency()
      .subscribe((all) => {
        this.allCurrency = all;
        this.activeCurrency = this.service.getActiveCurrency();
      });
  }

}
