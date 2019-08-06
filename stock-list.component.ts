import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  /**
   * @var stocks Holds the history of stock price changes.
   */
  public stocks: any = [];
  /**
   * @var currentStocks Stock data for the currently-selected day.
   */
  public currentStocks: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Get the initial stock dataset.
    this.http.get('assets/stocks.json')
        .subscribe(data => {
          this.currentStocks = data;
          this.stocks.push(this.currentStocks);
        });
  }

  /**
   * Determines whether new stock prices need to be calculated or if there is
   * already data for the selected day in the historical this.stocks array.
   * 
   * @param day Currently-selected day.
   */
  public calculateNewStocks(day:number):void {
    console.log(`calc day = ${day}`);

    if (this.stocks[(day - 1)]) {
      // If we already have data for the requested day, just use the history.
      this.currentStocks = this.stocks[(day - 1)];
    } else {
      // Real formula is Math.floor(Math.random() * (max - min + 1) + min);
      const randDelta = (Math.floor(Math.random() * (10 - 1 + 1) + 1) / 100) + 1;
      
      console.log(`randDelta = ${randDelta}`);

      // Adjust stock prices for current day.
      this.currentStocks.forEach((element, index) => {
        element.price *= randDelta;
      });

      // Add new day to stocks array.
      this.stocks.push(this.currentStocks);
    }

    console.log(this.stocks);
  }

  public getStocksByDay(day:number):Array<any> {
    return this.stocks[(day - 1)];
  }
}