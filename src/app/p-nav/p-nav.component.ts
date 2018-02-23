import { Component, OnInit, HostListener } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';

declare var $: any;

@Component({
  selector: 'p-nav',
  templateUrl: './p-nav.component.html',
  styleUrls: ['./p-nav.component.css']
})
export class PNavComponent implements OnInit {
  isDesktop: boolean;

  constructor() {
    this.isDesktop = window.innerWidth >= 1025 ? true : false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isDesktop = event.target.innerWidth >= 1025 ? true : false;
  }


  ngOnInit() {

    //Moving the active Flag out of the Container
    var activeFlag = $('.flagsContainer li.active a img').detach().addClass('activeFlag');
    $(activeFlag).insertBefore('.flagsContainer');
    $(".flagsContainer li.active").remove();


    $("#lang").hover(
      function(){
        //return if it's mobile or tablet device
        if ($(window).width() <= 1024)
          return;

        $(".flagsContainer", this).stop(true, true).slideDown("400");
      },

      function(){
        //return if it's mobile or tablet device
        if ($(window).width() <= 1024)
          return;
        
        $(".flagsContainer", this).stop(true, true).slideUp("400");
      }
    )



    $(".pullDownItem").hover( //Pull Down on hover
      function () {
        //return if it's mobile or tablet device
        if ($(window).width() <= 1024)
          return;

        //preventing other event if any dropdown is sticky already
        if($('.pullDown').hasClass('sticky'))
          return;

        // dropdown position fixing
        if ($(this).children('.pullDown').hasClass('expanded'))
          $(this).children('.pullDown').css('left', 0 + 'px');
        else
          $(this).children('.pullDown').css('left', $(this).position().left + 'px');


        $('.pullDown', this).stop(true, true).slideDown("400").css('display', 'flex');
      },
      function () {
        //return if it's mobile or tablet device
        if ($(window).width() <= 1024)
          return;

        //preventing other event if any dropdown is sticky already
        if($('.pullDown').hasClass('sticky'))
          return;

        $('.pullDown', this).stop(true, true).slideUp("400");
      }
    );
    
    

    $("i.sliderControls").hover( // menu slider slide behaviour
      function () {
        if ($(this).hasClass("fa-angle-up")) {
          jqMethods.slideUp(this);
        } else if ($(this).hasClass("fa-angle-down")) {
          jqMethods.slideDown(this);
        } else if ($(this).hasClass("fa-angle-right")) {
          jqMethods.slideLeft(this);
        } else if ($(this).hasClass("fa-angle-left")) {
          jqMethods.slideRight(this);
        }
      },
      function () {
        jqMethods.slideStop(this);
      }
    );

    $(".pullDownMeta>i.expandButton").click(function () { // Expand Button Behaviour
      let pullDown = $(this).closest('.pullDown');

      if ($(this).hasClass('fa-plus-circle')) {
        $(this).removeClass('fa-plus-circle').addClass('fa-minus-circle');
        $(pullDown).addClass("expanded sticky").css('left', 0);
        $(this).siblings('i.fa-asterisk').addClass('extended');
      } else {
        $(this).removeClass('fa-minus-circle').addClass('fa-plus-circle');
        $(pullDown).removeClass('expanded sticky').css('left', $(pullDown).parent('.pullDownItem').position().left + 'px');
        // if($(pullDown).hasClass("sticky")) $(pullDown).removeClass("sticky");
        $(this).siblings('i.fa-asterisk').removeClass('extended');
      }
    })

    $(".pullDownMeta>i.fa-asterisk").click(function(){ //Sticky Button Behaviour
      let pullDown = $(this).closest('.pullDown');

      // $(this).toggleClass("extended");      
      $(pullDown).toggleClass("sticky");
    });

    $(".responsiveMenuHeader > i, #mainMenuToggleButton > i").click(function(){ //main menu toggle in mobile device
      $(".mainMenu").toggleClass("mView");
    })

    $(".pullDownItem > i").click(function(){ // PullDown menu toggle in mobile device
      if($(this).hasClass("fa-plus-circle")){
        $(this).parent(".pullDownItem").toggleClass("mExpanded");
        $(this).removeClass("fa-plus-circle").addClass("fa-minus-circle");
        $(this).siblings('.pullDown').stop(true, true).slideDown("400", "swing", function(){
          $(this).siblings("a").toggleClass("titled");
        }).css('display', 'flex');
      } else {
        $(this).removeClass("fa-minus-circle").addClass("fa-plus-circle");
        $(this).siblings("a").toggleClass("titled");
        $(this).siblings('.pullDown').stop(true, true).slideUp("400",'swing',function(){
          $(this).parent(".pullDownItem").toggleClass("mExpanded");
        });
        // .siblings("a").css("display", "block")
      }
      
      // $(this).parent(".pullDownItem").toggleClass("mExpanded");
    })

  }

}