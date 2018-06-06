import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { HomePageService } from '../home-page/home-page.service';
import { PromoGalary } from '../model/promoGalary.model';
declare var $:any;

@Component({
  selector: 'p-footer',
  templateUrl: './p-footer.component.html',
  styleUrls: ['./p-footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PFooterComponent implements OnInit, AfterViewInit {
  menuItems: Array<PromoGalary>;
  visible = false;

  constructor(private service: HomePageService) { }

  @ViewChildren('footerMenu') footerMenu: QueryList<any>;

  toggleFooter(){
    this.visible = !this.visible;
  }

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
    $('#footerNav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
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
