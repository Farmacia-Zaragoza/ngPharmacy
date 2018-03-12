
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { PNavComponent } from './p-nav/p-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryComponent } from './category/category.component';
import { HomePageService } from './home-page/home-page.service';
import { PNavService } from './p-nav/p-nav.service';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    PNavComponent,
    HomePageComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    [RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'category/:name', component: CategoryComponent}
    ])]
  ],
  providers: [
    HomePageService,
    PNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
