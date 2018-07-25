import { CookieService } from './../global/cookie.service';
import { language } from './../model/language.model';
import { Component, OnInit } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';
import { LanguageSelectorService } from './language-selector.service';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  allLanguage: Array<language>;
  activeLanguage: language;

  constructor(private service: LanguageSelectorService, private cookie: CookieService) { }

  slideUp(btn){
    jqMethods.slideUp(btn);

  }

  slideDown(btn){
    jqMethods.slideDown(btn);
  }

  slideStop(btn){
    jqMethods.slideStop(btn);
  }

  changeLanguage(language: language){
    this.activeLanguage.active = false;
    this.activeLanguage = language;
    language.active = true;

    this.cookie.setCookie('pAl', language.id, 2);
  }

  ngOnInit() {
    this.service.getAllLanguage()
      .subscribe((all: any)=>{
        this.allLanguage = all;
        this.activeLanguage = this.allLanguage.filter(c => c.active)[0];
      })

    // this.activeLanguage = this.service.active;
    //   .subscribe((active: language) => this.activeLanguage = active);
    
  }

}
