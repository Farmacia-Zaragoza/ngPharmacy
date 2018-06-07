
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';


import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { PNavComponent } from './p-nav/p-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryComponent } from './category/category.component';
import { HomePageService } from './home-page/home-page.service';
import { PNavService } from './p-nav/p-nav.service';
import { ResponsiveTextComponent } from './responsive-text/responsive-text.component';
import { TextLimitDirective } from './directives/text-limit.directive';
import { PFooterComponent } from './p-footer/p-footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PFooterService } from './p-footer/p-footer.service';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    PNavComponent,
    HomePageComponent,
    CategoryComponent,
    ResponsiveTextComponent,
    TextLimitDirective,
    PFooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StarRatingModule.forRoot(),
    [RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'category/:name', component: CategoryComponent}
    ])]
  ],
  providers: [
    HomePageService,
    PNavService,
    PFooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
