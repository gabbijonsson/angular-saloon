import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BeverageInterface } from './beverage-interface';
import { BeverageService } from '../../beverage.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

  @Output() beverageSubmit: EventEmitter<BeverageInterface> = new EventEmitter();

  beverages: BeverageInterface[]

  constructor(private beverageService: BeverageService) { }

  ngOnInit(): void {
    this.beverages = this.beverageService.getBeverages();
  }

  chooseBeverage(beverage): void {
    this.beverageSubmit.emit(beverage);
  }

}
