import { CookieService } from './../../global/cookie.service';
import { currency } from './../../model/currency.model';
import { Component, OnInit, Inject } from '@angular/core';
import * as jqMethods from '../../global/global-jquery-methods';
import { PageService } from '../../page.service';

@Component({
  selector: 'curency-selector',
  templateUrl: './curency-selector.component.html',
  styleUrls: ['./curency-selector.component.css']
})
export class CurencySelectorComponent implements OnInit {
  allCurrency: Array<currency>;
  activeCurrency: currency;

  constructor(private service: PageService, private cookie: CookieService, @Inject('AppData') private appData) { }

  slideUp(btn) {
    jqMethods.slideUp(btn);

  }

  slideDown(btn) {
    jqMethods.slideDown(btn);
  }

  slideStop(btn) {
    jqMethods.slideStop(btn);
  }

  changeCurrency(currency: currency) {
    this.activeCurrency.active = false;
    this.activeCurrency = currency;
    currency.active = !currency.active;

    this.cookie.setCookie('pAc', currency.id, 2);
  }

  ngOnInit() {
    this.service.done
      .subscribe((content) => {
        this.allCurrency = content.currencies;
        this.activeCurrency = this.allCurrency.filter((c) => c.id == this.appData.currency)[0];
      });
  }

}
