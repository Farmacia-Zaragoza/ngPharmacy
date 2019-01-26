import { Component, OnInit } from "@angular/core";
import { footerNav } from "../model/footerNav.model";
import { PageService } from "../page.service";
import { merge } from "lodash";
declare var $: any;

@Component({
  selector: "p-footer",
  templateUrl: "./p-footer.component.html",
  styleUrls: ["./p-footer.component.css"]
})
export class PFooterComponent implements OnInit {
  menuItems: Array<footerNav>;
  visible = false;

  constructor(private service: PageService) {}

  // @ViewChildren("footerMenu") footerMenu: QueryList<any>;

  toggleFooter() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.service.done.subscribe((data: any) => {
      this.menuItems = data.common_json.footer.map((item, index) => {
        return merge(item, data.lang_common_json.footer[index]);
      });
    });
  }

  // ngAfterViewInit() {
  //   this.footerMenu.changes.subscribe(t => {
  //     // this.menuInit();
  //   });
  // }

  // menuInit() {
  //   $("#footerNav").slick({
  //     slidesToShow: 7,
  //     slidesToScroll: 4,
  //     speed: 3000,
  //     infinite: true,
  //     prevArrow: `<i class="fa fa-angle-left footerArrow"></i>`,
  //     nextArrow: `<i class="fa fa-angle-right footerArrow"></i>`,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 5
  //         }
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3
  //         }
  //       },
  //       {
  //         breakpoint: 500,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   });

  //   $(".footernav .slick-arrow").mouseenter(function() {
  //     $(this).trigger("click");
  //   });
  // }
}
