import { Component, OnInit } from '@angular/core';

import * as jqMethods from '../global/global-jquery-methods';

@Component({
  selector: 'app-cart-drop-down',
  templateUrl: './cart-drop-down.component.html',
  styleUrls: ['./cart-drop-down.component.css']
})
export class CartDropDownComponent implements OnInit {


  constructor() { }

  slideUp(btn) {
    jqMethods.slideUp(btn);

  }

  slideDown(btn) {
    jqMethods.slideDown(btn);
  }

  slideStop(btn) {
    jqMethods.slideStop(btn);
  }


  ngOnInit() {

  }

}
