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

  constructor(private service: LanguageSelectorService) { }

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
  }

  ngOnInit() {
    this.allLanguage = this.service.getAllLanguage();

    this.activeLanguage = this.service.getActiveLanguage();
  }

}
