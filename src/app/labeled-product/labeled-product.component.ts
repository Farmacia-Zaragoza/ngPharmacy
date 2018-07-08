import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Http } from '@angular/http';
declare var $:any;

@Component({
  selector: 'labeled-product',
  templateUrl: './labeled-product.component.html',
  styleUrls: ['./labeled-product.component.css']
})
export class LabeledProductComponent implements OnInit, AfterViewInit {

  products = [];
  constructor(private http: Http) { }
  @ViewChildren('labeledSlider') labeledSlider: QueryList <any>;

  slideRight(){
    $('.prevButton').trigger("click");
  }

  slideLeft(){
    $('.nextButton').trigger("click");
  }

  ngOnInit() {
    this.http.get('https://farma.vbrqx.com/ang/labaled_products.json')
      .subscribe(products=> {
        this.products = products.json();
      })
  }

  ngAfterViewInit(){

    this.labeledSlider.changes.subscribe(t=>{
      this.slickInit();
    })

  }

  slickInit() {
    $('#labeled-product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true,
      prevArrow: `<span class="prevButton"></span>`,
      nextArrow: `<span class="nextButton"></span>`,
      responsspanve: [
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
