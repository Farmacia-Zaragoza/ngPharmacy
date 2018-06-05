import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HomePageService } from '../home-page/home-page.service';
import { PromoGalary } from '../model/promoGalary.model';
declare var $:any;

@Component({
  selector: 'p-footer',
  templateUrl: './p-footer.component.html',
  styleUrls: ['./p-footer.component.css']
})
export class PFooterComponent implements OnInit, AfterViewInit {
  menuItems: Array<PromoGalary>;

  constructor(private service: HomePageService) { }

  @ViewChildren('footerMenu') footerMenu: QueryList<any>;

  ngOnInit() {

    this.service.getPromoGalary()
      .subscribe(response => {
        this.menuItems = response.json();
        console.log(this.menuItems)
      })

  }

  ngAfterViewInit(){
    this.footerMenu.changes.subscribe(t=>{
      this.menuInit();
    })
  }

  menuInit() {
    $('#promoSliderNav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: `<i class="fa fa-angle-left footerArrow"></i>`,
      nextArrow: `<i class="fa fa-angle-right footerArrow"></i>`,
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
  }

}
