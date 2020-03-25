import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarGuestInformationService } from '../bar-guest-information.service'


@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {

  @Output() forgetGuestSubmit: EventEmitter<any> = new EventEmitter()

  constructor(private barGuestInformationService: BarGuestInformationService) { }

  ngOnInit(): void {
  }

  forgetGuest() {
    this.barGuestInformationService.forgetGuest();
    this.forgetGuestSubmit.emit();
  }

}
