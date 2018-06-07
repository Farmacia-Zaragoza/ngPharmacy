import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PFooterService {

  constructor(private http: Http) { }

  getFooterNav() {
    return this.http.get('https://farma.vbrqx.com/ang/footerNav.json');
  }
}
