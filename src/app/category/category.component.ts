import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
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
  products = [
    {
      id: 1,
      name: "A very very Long product name with extra other text",
      pImage: "assets/images/single_product.jpg",
      pDes: "Product Description",
      textField1: "Text field 1",
      textField2: "Text field 2",
      price: 978,
      oldPrice: 999,
      rating: 50
    },
    {
      id: 2,
      name: "Product Name",
      pImage: "assets/images/single_product.jpg",
      pDes: "Product Description long long",
      textField1: "Text field 1",
      textField2: "Text field 2",
      price: 400,
      oldPrice: 999,
      rating: 50
    },
    {
      id: 3,
      name: "Product Name",
      pImage: "assets/images/single_product.jpg",
      pDes: "Product Description",
      textField1: "Text field 1 with very long text",
      textField2: "Text field 2",
      price: 200,
      oldPrice: 999,
      rating: 50
    },
    {
      id: 4,
      name: "Product Name",
      pImage: "assets/images/single_product.jpg",
      pDes: "Product Description",
      textField1: "Text field 1",
      textField2: "Text field 2 with very long text",
      price: 300,
      oldPrice: 999,
      rating: 50
    },
  ]

  constructor(
    private route: ActivatedRoute
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

  changeView(toBe){
    this.view = toBe;
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe( params => {
        let viewType = params.get("view");
        if(viewType)
          this.view = viewType;
      })
  }

  ngAfterViewInit(){
    ! function () {
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
    }();
  }

}
