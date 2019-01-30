import { PageService } from "./../../page.service";
import { Component, OnInit } from "@angular/core";
import { merge } from "lodash";

@Component({
  selector: "user-drop-down",
  templateUrl: "./user-drop-down.component.html",
  styleUrls: ["./user-drop-down.component.css"]
})
export class UserDropDownComponent implements OnInit {
  isLogedIn = false;
  userDropDown: Array<any>;

  constructor(private service: PageService) {}

  ngOnInit() {
    this.service.done.subscribe((data: any) => {
      this.userDropDown = data.common_json.user.map((item, index) => {
        return merge(item, data.lang_common_json.user[index]);
      });
      // console.log(this.userDropDown);
    });
  }
}
