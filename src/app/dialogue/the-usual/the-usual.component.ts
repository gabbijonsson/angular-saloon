import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BarGuestInformationService } from '../../bar-guest-information.service'
import { BeverageInterface } from '../select-beverage/beverage-interface';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  @Output() beverageSubmit: EventEmitter<BeverageInterface> = new EventEmitter();

  constructor(private barGuestInformationService: BarGuestInformationService) { }

  ngOnInit(): void {
  }

  chooseBeverage() {
    let beverage:BeverageInterface = {
      name: this.barGuestInformationService.getUsualBeverage()
    }
    this.beverageSubmit.emit(beverage);
  }

}