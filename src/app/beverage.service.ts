import { Injectable, OnInit } from '@angular/core';
import { BeverageInterface } from './dialogue/select-beverage/beverage-interface'


const DEFAULT_BEVERAGES: BeverageInterface[] = [
  {
    name: 'Whisky'
  },
  {
    name: 'Whiskey'
  },
  {
    name: 'Bourbon'
  }
];

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  constructor() { }
  
  getBeverages() : BeverageInterface[] {
    console.log('im down here mom')
    let beverages = JSON.parse(localStorage.getItem('beverageList'));
    if (!beverages) {
      this.initBeverages();
      beverages = JSON.parse(localStorage.getItem('beverageList'));
    }
    return beverages;
  }

  initBeverages() {
    console.log('i am init to winit')
    localStorage.setItem('beverageList', JSON.stringify(DEFAULT_BEVERAGES))
  }

  saveBeverage(beverage: BeverageInterface) : void {
    let currentBeverageList = this.getBeverages()
    currentBeverageList.push(beverage)
    localStorage.setItem('beverageList', JSON.stringify(currentBeverageList))
  }
}