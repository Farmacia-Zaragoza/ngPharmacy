import { LanguageSelectorService } from './language-selector/language-selector.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { CategoryService } from './category/category.service';

//material
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LabeledProductComponent } from './labeled-product/labeled-product.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { CurencySelectorComponent } from './curency-selector/curency-selector.component';
import { CurrencySelectorService } from './curency-selector/currency-selector.service';

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
    ScrollToTopComponent,
    LabeledProductComponent,
    LanguageSelectorComponent,
    CurencySelectorComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    StarRatingModule.forRoot(),
    [RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'category/:name', component: CategoryComponent }
    ])]
  ],
  providers: [
    HomePageService,
    PNavService,
    PFooterService,
    CategoryService,
    CurrencySelectorService,
    LanguageSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
