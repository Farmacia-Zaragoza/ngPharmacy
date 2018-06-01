import { Http } from '@angular/http';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit, AfterViewInit {

  view = "list";
  allProducts = [];
  products = [];
  

  @ViewChildren("singleProduct") singleProduct : QueryList<any>;

  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }

  checkAll(input: HTMLInputElement){
    if(input.checked){
      $('.allProductCheckbox').prop('checked', true);
    } else {
      $('.allProductCheckbox').prop('checked', false);
    }
  }

  rangeValueChange(input: HTMLInputElement){
    let value = input.value;
    $("#zoomRangeInput").val(value);
    $("#zoomRangeValue").val(value);
  }

  mainAddtoCart(){
    var checkedProducts = $(".allProductCheckbox:checked");

    checkedProducts.each(function() {
      $(this).closest('.single_product').find('.cartfilled input').prop("checked", "true");
    });
  }

  loadProduct(){
    let length = this.allProducts.length;
    if(length == 0){
      this.allProducts = this.products.slice();
    }

    let numberOfProducts = length > 16 ? 16 : length;
    let products = this.allProducts.splice(0,numberOfProducts);
    products.forEach((product)=>{
      this.products.push(product);
    })
  }

  changeView(toBe){
    this.view = toBe;
  }

  ngOnInit() {
    this.http.get("https://farma.vbrqx.com/ang/example_products_2018.json")
      .subscribe(response => {
        this.allProducts = response.json();

        this.products = this.allProducts.splice(0,32);
      });
    
    

    this.route.queryParamMap
      .subscribe( params => {
        let viewType = params.get("view");
        if(viewType)
          this.view = viewType;
      })
  }

  ngAfterViewInit(){
    this.singleProduct.changes.subscribe( t => {
      console.log(t);
      this.responsiveTextInit();
      let that = this;


      // infinite loading....
      window.onscroll = () => {
        let scrollHeight = $('body').prop('scrollHeight');
        let clientHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        let singleProductHeight = $('.single_product').prop('clientHeight');
        // console.log(scrollHeight, clientHeight, scrollTop, singleProductHeight);
        if(clientHeight + scrollTop >= scrollHeight - singleProductHeight) {
          that.loadProduct();
        }
      };

    })
    
  }

  responsiveTextInit () {
    var responsiveTexts = $(".responsiveText");
    responsiveTexts.each(function (index, responsiveText) {
      var rTextConainerWidth = $(responsiveText).width();
      if ($(responsiveText).find('p').outerWidth(true) > rTextConainerWidth) {
        $(responsiveText).addClass('rCollaps').append("<i class='fa fa-plus-circle responsiveTextExpandButton'></i>");
      }
    });
  
  
    $(".responsiveText.rCollaps .responsiveTextExpandButton").click(function () {
      var parentContainer = $(this).closest('.responsiveText');
      var rInner = $(parentContainer).find('p').detach();
      $(parentContainer).toggleClass('rTexpanded');
      if ($(this).hasClass('fa-plus-circle')) {
        $(this).removeClass('fa-plus-circle').addClass('fa-minus-circle');
        $(this).before('<i class="fa fa-angle-right responsiveText_controls"></i>');
        $(parentContainer).prepend('<div class="rTinner"></div>');
        $(parentContainer).prepend('<i class="fa fa-angle-left responsiveText_controls"></i>');
        $(".rTinner").append(rInner);
      } else {
        $(this).removeClass('fa-minus-circle').addClass('fa-plus-circle');
        $(this).siblings('.responsiveText_controls').remove();
        $(".rTinner").remove();
        $(parentContainer).prepend(rInner);
      }
  
      $(".responsiveText > i.responsiveText_controls").mouseenter(function () {
        let rTinner = $(this).siblings('.rTinner');
        let scrollLength = $(rTinner).scrollLeft() + $(rTinner)[0].scrollWidth - $(rTinner).width();
        let scrollAbleLength = scrollLength - $(rTinner).scrollLeft();
        if ($(this).hasClass('fa-angle-left')) {
          $(rTinner).animate({
            scrollLeft: 0
          }, 500);
        }
        else {
          $(rTinner).animate({
            scrollLeft: scrollAbleLength + 10
          }, 500);
        }
      });
  
      $(".responsiveText > i.responsiveText_controls").mouseleave(function () {
        $('.rTinner').stop();
      });
    });
  }
}


