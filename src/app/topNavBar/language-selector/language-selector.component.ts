import { CookieService } from "./../../global/cookie.service";
import { language } from "./../../model/language.model";
import { Component, OnInit, Inject } from "@angular/core";
import * as jqMethods from "../../global/global-jquery-methods";
import { PageService } from "../../page.service";
import { merge } from "lodash";

@Component({
  selector: "language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.css"]
})
export class LanguageSelectorComponent implements OnInit {
  allLanguage: Array<language>;
  activeLanguage: language;

  constructor(
    private service: PageService,
    private cookie: CookieService,
    @Inject("AppData") private appData
  ) {}

  slideUp(btn) {
    jqMethods.slideUp(btn);
  }

  slideDown(btn) {
    jqMethods.slideDown(btn);
  }

  slideStop(btn) {
    jqMethods.slideStop(btn);
  }

  changeLanguage(language: language) {
    this.activeLanguage.active = false;
    this.activeLanguage = language;
    language.active = true;

    this.cookie.setCookie("pAl", language.id, 2);
  }

  ngOnInit() {
    this.service.done.subscribe((data: any) => {
      this.allLanguage = data.common_json.languages.map((item, index) => {
        return merge(item, data.lang_common_json.languages[index]);
      });
      // console.log(this.allLanguage);
      if (!this.allLanguage) return;
      this.activeLanguage = this.allLanguage.filter(
        c => c.id === this.appData.lang
      )[0];
      // console.log(this.activeLanguage);
    });

    // this.activeLanguage = this.service.active;
    //   .subscribe((active: language) => this.activeLanguage = active);
  }
}
