import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PNavService {

  constructor(private http: Http) { }

  getMenus(){
    return this.http.get('https://farma.dbrqx.com/ang/mainMenu.json');
  }

}
