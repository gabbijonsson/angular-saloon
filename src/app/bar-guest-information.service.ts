import { Injectable } from '@angular/core';
import { BeverageInterface } from './dialogue/select-beverage/beverage-interface';

@Injectable({
  providedIn: 'root'
})
export class BarGuestInformationService {

  setFirstName(firstName: string) {
    localStorage.setItem('firstName', firstName)
  }

  setLastName(lastName: string) {
    localStorage.setItem('lastName', lastName)
  }

  getLastName() {
    return localStorage.getItem('lastName');
  }

  setBeverageUsual(usualBeverage: BeverageInterface) {
    localStorage.setItem('usualBeverage', usualBeverage.name)
  }

  getUsualBeverage() {
    return localStorage.getItem('usualBeverage');
  }

  forgetGuest() {
    localStorage.clear();
  }



  constructor() { }
}
