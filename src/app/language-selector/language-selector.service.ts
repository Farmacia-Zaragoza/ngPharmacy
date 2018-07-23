import { language } from './../model/language.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageSelectorService {
  allLanguage: Array<language> = [
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Australia", "active": true},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
    {"flag": "assets/images/flags/brqx_flag_china_2016_320_200.png", "name": "Spain"},
  ]
  constructor(private http: Http) { }

  getAllLanguage(){
    return this.allLanguage;
  }

  getActiveLanguage(){
    let l = this.allLanguage.filter((c)=> c.active);
    return l[0];
  }
}
