import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeverageInterface } from '../beverage-interface';
import { BeverageService } from 'src/app/beverage.service';

@Component({
  selector: 'app-add-beverage',
  templateUrl: './add-beverage.component.html',
  styleUrls: ['./add-beverage.component.css']
})
export class AddBeverageComponent implements OnInit {

  @Output() beverageSubmit: EventEmitter<BeverageInterface> = new EventEmitter();

  constructor(private beverageService: BeverageService) { }

  ngOnInit(): void {
  }

  addBeverage(beverageName) {
    if (beverageName) {
      let newBeverage: BeverageInterface = {
        name: beverageName
      }
      this.beverageService.saveBeverage(newBeverage);
      this.beverageSubmit.emit(newBeverage);
    }
  }
  
}
