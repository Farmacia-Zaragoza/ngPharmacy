import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';

//material
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { PNavComponent } from './topNavBar/p-nav/p-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryComponent } from './category/category.component';
import { LanguageSelectorService } from './topNavBar/language-selector/language-selector.service';
import { PageService } from './page.service';
import { ResponsiveTextComponent } from './responsive-text/responsive-text.component';
import { TextLimitDirective } from './directives/text-limit.directive';
import { PFooterComponent } from './p-footer/p-footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PFooterService } from './p-footer/p-footer.service';
import { CategoryService } from './category/category.service';
import { LabeledProductComponent } from './labeled-product/labeled-product.component';
import { LanguageSelectorComponent } from './topNavBar/language-selector/language-selector.component';
import { CurencySelectorComponent } from './topNavBar/curency-selector/curency-selector.component';
import { CurrencySelectorService } from './topNavBar/curency-selector/currency-selector.service';
import { CookieService } from './global/cookie.service';
import { CartDropDownComponent } from './topNavBar/cart-drop-down/cart-drop-down.component';
import { UserDropDownComponent } from './topNavBar/user-drop-down/user-drop-down.component';
import { ToolboxModalComponent } from './toolbox-modal/toolbox-modal.component';

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
    CurencySelectorComponent,
    CartDropDownComponent,
    UserDropDownComponent,
    ToolboxModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    PageService,
    PFooterService,
    CategoryService,
    CurrencySelectorService,
    LanguageSelectorService,
    CookieService,
    { provide: 'AppData', useValue: (<any>window).APP_DATA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
