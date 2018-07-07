import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $:any;

@Component({
  selector: 'labeled-product',
  templateUrl: './labeled-product.component.html',
  styleUrls: ['./labeled-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LabeledProductComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){

    $('#labeled-product-slider').slick({
      slidesToShow: 4,
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

  }

}
