import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  QueryList,
  ViewChildren,
  Inject
} from "@angular/core";
import { PromoGalary } from "../model/promoGalary.model";
// import '../../assets/slick/slick.min.js';
import { PageService } from "../page.service";
import { merge } from "lodash";
declare var $: any;
// declare var jquery: any;

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit, AfterViewInit {
  promoGalary: Array<PromoGalary>;
  @ViewChildren("promoSlider") promoSlider: QueryList<any>;

  leftNav = [];
  promoProducts = [];
  @ViewChildren("promoProducts") promoProductsSlider: QueryList<any>;

  constructor(private service: PageService) {
    // let jsonUrl = appData.json_path + appData.lang + '/' + appData.json_file;
    // console.log(appData);
  }

  showInnerMenu($event) {
    let target = $event.currentTarget;
    $(target)
      .children(".left-inner-menu")
      .css({ display: "flex", top: $(target).position().top + 10 + "px" });
  }

  hideInnerMenu($event) {
    let target = $event.currentTarget;
    $(target)
      .children(".left-inner-menu")
      .css({ display: "none" });
  }

  ngOnInit() {
    this.service.done.subscribe(data => {
      // console.log(data);

      if (!data) return;

      this.promoGalary = data.spec_json.PromoGallery.map((item, index) => {
        return merge(item, data.lang_spec_json.PromoGallery[index]);
      });

      this.leftNav = data.common_json.leftNav.map((item, index) => {
        return merge(item, data.lang_common_json.leftNav[index]);
      });

      // console.log(this.leftNav);

      this.promoProducts = data.spec_json.PromoProducts.map((item, index) => {
        return merge(item, data.lang_spec_json.PromoProducts[index]);
      });

      // this.promoProducts = content.promoProducts;
    });
  }

  ngAfterViewInit() {
    this.promoSlider.changes.subscribe(t => {
      this.initPromoSlider();
    });

    this.promoProductsSlider.changes.subscribe(t => {
      this.initPromoProductsSlider();
    });
  }

  initPromoSlider() {
    $("#promoSliderNav").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: "#promoSliderGalery",
      centerMode: true,
      focusOnSelect: true,
      prevArrow: `<i class="fa fa-angle-left"></i>`,
      nextArrow: `<i class="fa fa-angle-right"></i>`,
      autoPlay: false,
      responsive: [
        {
          breakpoint: 3400,
          settings: {
            // slidesToShow: 5
          }
        },
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 2099,
          settings: {
            // slidesToShow: 'auto'
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $("#promoSliderGalery").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: "#promoSliderNav",
      autoplay: false,
      autoplaySpeed: 5000,

      onAfterChange: function(slickSlider, i) {
        //remove all active class
        $(".slider-nav .slick-slide").removeClass("slick-active");
        //set active class for current slide
        $(".slider-nav .slick-slide")
          .eq(i)
          .addClass("slick-active");
      }
    });
  }

  initPromoProductsSlider() {
    $(".productSlider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      prevArrow: `<i class="fa fa-angle-left prevButton" aria-hidden="true"></i>`,
      nextArrow: `<i class="fa fa-angle-right nextButton" aria-hidden="true"></i>`,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".productSlider .slick-arrow").mouseenter(function() {
      $(this).trigger("click");
    });
  }
}
