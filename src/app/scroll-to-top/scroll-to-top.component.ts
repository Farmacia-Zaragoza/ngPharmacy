import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  buttonHide = true;

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    let that = this;

    window.addEventListener('scroll', () => {
      let scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        that.buttonHide = false;
      } else {
        that.buttonHide = true;
      }
    });
  }

}
