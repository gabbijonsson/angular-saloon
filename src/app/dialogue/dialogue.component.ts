import { Component, OnInit } from '@angular/core';
import { BarGuestInformationService } from '../bar-guest-information.service'
import { BeverageInterface } from './select-beverage/beverage-interface';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent implements OnInit {

  showBeverages = false;
  showTheUsual = false;
  lastName: string;
  usualBeverage: string;
  bartenderGreetingMessage: string = `Howdy, stranger. Haven't seen your face around here before. What's your name?`;
  bartenderTakeOrder: string;
  bartenderConfirmOrder: string;

  constructor(private barGuestInformationService: BarGuestInformationService) { }

  ngOnInit(): void {
    this.lastName = this.barGuestInformationService.getLastName();
    this.usualBeverage = this.barGuestInformationService.getUsualBeverage();
    if (this.lastName) {
      this.showBeverages = true;
      if (this.usualBeverage) {
        this.setBartenderGreeting(`Hello again, ${this.lastName}. The usual?`);
        this.showTheUsual = true;
      } else {
        this.setBartenderGreeting(`Hello again, Mr. ${this.lastName}. Pick your poison.`);
      }
    }
  }

  setBartenderGreeting(greeting) {
    this.bartenderGreetingMessage = greeting;
  }

  handleNameSubmitted(personName) {
    this.lastName = personName.lastName;
    this.barGuestInformationService.setFirstName(personName.firstName);
    this.barGuestInformationService.setLastName(personName.lastName);

    this.setBartenderTakeOrder(personName.lastName);
    this.showBeverages = true;
  }

  setBartenderTakeOrder(name: string) {
    this.bartenderTakeOrder = `Alright Mr. ${name}, what can I do you for?`;
  }

  handleBeverageSubmitted(beverage) {
    this.barGuestInformationService.setBeverageUsual(beverage);

    this.setBartenderConfirmOrder(beverage.name);
  }

  setBartenderConfirmOrder(beverageName) {
    this.bartenderConfirmOrder = `One ${beverageName}, coming right up!`
  }

  handleForgetGuestSubmitted(event) {
    this.setBartenderGreeting('Got it. Who are you again?');
    this.reset();
  }

  reset() {
    this.bartenderConfirmOrder = null;
    this.bartenderTakeOrder = null;
    this.showBeverages = false;
    this.showTheUsual = false;
    this.lastName = null;
  }
}