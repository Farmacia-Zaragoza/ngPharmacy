import { Http } from '@angular/http';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
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
  loaderVisible = true;
  numberOfProducts = 32;
  

  @ViewChildren("singleProduct") singleProduct : QueryList<any>;

  constructor(
    private route: ActivatedRoute,
    private service: CategoryService
  ) { }

  checkAll(input: HTMLInputElement){
    if(input.checked){
      $('.allProductCheckbox').prop('checked', true);
    } else {
      $('.allProductCheckbox').prop('checked', false);
    }
  }

  rangeValueChange(){
    let lenght = this.products.length;
    this.products = this.allProducts.slice(0,this.numberOfProducts);
  }

  mainAddtoCart(){
    var checkedProducts = $(".allProductCheckbox:checked");

    checkedProducts.each(function() {
      $(this).closest('.single_product').find('.cartfilled input').prop("checked", "true");
    });
  }

  filterBy(e){
    let filter = e.target.value;
    this.loaderVisible = true;

    this.service.getProducts(filter)
      .subscribe(response => {
        this.allProducts = response.json();
        this.loaderVisible = false;
        this.products = this.allProducts.slice(0,32);
      })
  }

  loadProduct(){
    let allLenght = this.allProducts.length;
    let pLength = this.products.length;
    let left = allLenght - pLength;
    let products = [];
    
    if(allLenght == pLength) { //fake end of file implementation
      console.log('end of allProduct');
      products = this.allProducts.slice();
      products.forEach((product, index, array)=>{
        this.allProducts.push(product);
      })
    } else { // shouldn't be this else clause when loading from a json file.
      let toBeAdded = left > 16 ? pLength+16 : pLength+left;
      this.numberOfProducts+=toBeAdded;
      products = this.allProducts.slice(pLength-1,toBeAdded-1);
      products.forEach((product)=>{
        this.products.push(product);
      })
    }

    

  }

  changeView(toBe){
    this.view = toBe;
  }

  ngOnInit() {
    this.service.getProducts('name')
      .subscribe(response => {
        this.allProducts = response.json();
        this.loaderVisible = false;
        this.products = this.allProducts.slice(0,32);
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
      this.responsiveTextInit();
      let that = this;

      // let controlsContainerTop = $('.controlsContainer').offset().top;
      // infinite loading....
      window.onscroll = () => {
        let scrollHeight = $('body').prop('scrollHeight');
        let clientHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        let singleProductHeight = $('.single_product').prop('clientHeight');
        // console.log(scrollHeight, clientHeight, scrollTop, singleProductHeight);
        
        // if(scrollTop >= controlsContainerTop){ // sticky controls
        //   $('.controlsContainer').css('position','fixed')
        // }else{
        //   $('.controlsContainer').css('position','static')
        // }

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


