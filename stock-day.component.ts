import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-stock-day',
  templateUrl: './stock-day.component.html',
  styleUrls: ['./stock-day.component.css']
})
export class StockDayComponent implements OnInit {

  @Output() stockDayChanged = new EventEmitter();

  /**
   * @var currentDay The currently-selected day.
   */
  public currentDay:number = <number>1;

  constructor() { }

  ngOnInit():void {
    
  }

  /**
   * Advances the this.currentDay.
   */
  public nextDay():void {
    this.currentDay++;
    
    console.log(`this.currentDay = ${this.currentDay}`);
    
    // Bubble the event to calculateNewStocks().
    this.stockDayChanged.emit(this.currentDay);
  }

  /**
   * Reduces this.currentDay by 1 day.
   */
  public prevDay():void {
    if (this.currentDay <= 1) {
      this.currentDay = 1;
    } else {
      this.currentDay--;
    }

    // Bubble the event to calculateNewStocks().
    this.stockDayChanged.emit(this.currentDay);
  }

  /**
   * Outputs a string of the date in the specified format.
   * 
   * @returns string
   */
  public getDate():string {
    const calculatedDate: Date = new Date();
    
    calculatedDate.setDate(calculatedDate.getDate() + (this.currentDay - 1));

    return calculatedDate.toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
  }
}
