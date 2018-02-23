import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $:any;
declare var jquery:any;
import '../../assets/slick/slick.min.js';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $('#promoSliderNav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: '#promoSliderGalery',
      centerMode: true,
      focusOnSelect: true,
      prevArrow: `<i class="fa fa-angle-left"></i>`,
      nextArrow: `<i class="fa fa-angle-right"></i>`,
      autoPlay: true,
      responsive: [
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

    $('#promoSliderGalery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '#promoSliderNav',
      autoplay: true,
      autoplaySpeed: 5000,

      onAfterChange:function(slickSlider,i){
        //remove all active class
        $('.slider-nav .slick-slide').removeClass('slick-active');
        //set active class for current slide
        $('.slider-nav .slick-slide').eq(i).addClass('slick-active');  
      }
    });

    $('.productSlider').slick({
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
        }
      ]
    });

    $(".productSlider .slick-arrow").mouseenter(function(){
      $(this).trigger("click");
    });
  }

}
