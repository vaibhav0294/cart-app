import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  public sortParameter : string;
  
  @Output()
  sortBy: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setSortParameter(parameter:string){
    this.sortParameter = parameter;
    console.log(this.sortParameter)
    this.setSortByType();
  }

  setSortByType() {
    switch (this.sortParameter) {
      case "lowhigh": this.sortBy.emit("low-to-high");
        break;
      case "highlow": this.sortBy.emit("high-to-low");
        break;
      case "discount": this.sortBy.emit("discount");
    }
  }
}
