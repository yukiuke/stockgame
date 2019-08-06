import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDayComponent } from './stock-day/stock-day.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //exports: [StockListComponent]
})
export class AppModule { }
