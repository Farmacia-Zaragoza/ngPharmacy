import { merge } from "lodash";
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
    this.service.done.subscribe((data: any) => {
      this.cart = data.common_json.cart.map((item, index) => {
        return merge(item, data.lang_common_json.cart[index]);
      });
      // console.log(this.cart);
    });
  }
}
