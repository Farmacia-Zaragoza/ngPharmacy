import { Component, OnInit, HostListener } from '@angular/core';
import * as jqMethods from '../global/global-jquery-methods';

declare var $:any;

@Component({
  selector: 'p-nav',
  templateUrl: './p-nav.component.html',
  styleUrls: ['./p-nav.component.css']
})
export class PNavComponent implements OnInit {
  isDesktop:boolean;

  constructor() { 
    this.isDesktop = window.screen.width >=1025 ? true : false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isDesktop = event.target.innerWidth >=1025 ? true : false;
  }

  slideLeft(event) {
    jqMethods.slideLeft(event.target)
  }

  slideRight(event) {
    jqMethods.slideRight(event.target)
  }

  slideStop(event) {
    jqMethods.slideStop(event.target);
  }

  ngOnInit() {
    $(".pullDownItem").hover(
      function() {
          //return if it's mobile or tablet device
          if($(window).width() <= 1024)
            return;  

          //preventing other event if one dropdown is opened already
          // if($('.dropdown-menu-wrapper .itemName span i.starButton').hasClass('extended'))
          //     return;

          // dropdown position fixed
          if($(this).children('.pullDown').hasClass('expanded'))
              $(this).children('.pullDown').css('left', 0+'px');
          else
              $(this).children('.pullDown').css('left', $(this).position().left+'px');
          

          $('.pullDown', this).stop(true,true).slideDown("400").css('display','flex');
      },
      function() {
          //prevent other event if dropdown is sticky
          // if($(this).children('.dropdown-menu-wrapper').children('.itemName').children('span').children('i.starButton').hasClass('extended'))
          //     return;
          $('.pullDown', this).stop(true,true).slideUp("400");
      }
    );

    $(".pullDownContainer>i").hover(  //second level menu slider slide behaviour
      function(){ 
        if($(this).hasClass("fa-angle-up")){
          jqMethods.slideUp(this);
        } else if($(this).hasClass("fa-angle-down")) {
          console.log('down')
          jqMethods.slideDown(this);
        }
      },
      function(){
        jqMethods.slideStop(this);
      }
    );

  }

}
