import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';
import { PNavComponent } from './p-nav/p-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    PNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
