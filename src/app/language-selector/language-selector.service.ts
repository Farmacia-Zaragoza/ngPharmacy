import { CookieService } from './../global/cookie.service';
import { host } from './../global/configuration';
import { language } from './../model/language.model';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class LanguageSelectorService {
  public allLanguage: Array<language>;
  public activeLangId;

  
  constructor(private http: Http, private cookie: CookieService) {
    this.activeLangId = this.cookie.getCookie('pAl');
  }

  getAllLanguage(){
    return this.http.get(`${host}language.json`)
      .map( res => {
        this.allLanguage = res.json();
        
        if(this.activeLangId !== ""){
          this.allLanguage.map(l=>{
            l.active ? l.active = false: null;

            if(l.id == this.activeLangId)
              l.active = true;
          })
        }

        return this.allLanguage;
      });
  
  }

  // activeLanguage(){
  //   return this.active;
  // }

}
