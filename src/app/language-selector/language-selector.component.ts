import { Component, OnInit } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  constructor() { }

  slideUp(btn){
    jqMethods.slideUp(btn);

  }

  slideDown(btn){
    jqMethods.slideDown(btn);
  }

  ngOnInit() {
  }

}
