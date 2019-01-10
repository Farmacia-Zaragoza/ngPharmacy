import { PageService } from "./../../page.service";
import { Component, OnInit } from "@angular/core";

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
    this.service._LangCommon.subscribe((content: any) => {
      if (!content) return;
      this.userDropDown = content.user;
    });
  }
}
