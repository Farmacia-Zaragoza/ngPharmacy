import { PageService } from "./../../page.service";
import { Component, OnInit } from "@angular/core";

import * as jqMethods from "../../global/global-jquery-methods";

@Component({
  selector: "app-cart-drop-down",
  templateUrl: "./cart-drop-down.component.html",
  styleUrls: ["./cart-drop-down.component.css"]
})
export class CartDropDownComponent implements OnInit {
  cart: Array<any>;

  constructor(private service: PageService) {}

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
    this.service._LangCommon.subscribe((content: any) => {
      if (!content) return;
      this.cart = content.cart;
    });
  }
}
