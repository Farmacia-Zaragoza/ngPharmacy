import { Component, OnInit } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';

@Component({
  selector: 'curency-selector',
  templateUrl: './curency-selector.component.html',
  styleUrls: ['./curency-selector.component.css']
})
export class CurencySelectorComponent implements OnInit {

  constructor() { }

  slideUp(btn){
    jqMethods.slideUp(btn);

  }

  slideDown(btn){
    jqMethods.slideDown(btn);
  }

  slideStop(btn){
    jqMethods.slideStop(btn);
  }

  ngOnInit() {
  }

}
