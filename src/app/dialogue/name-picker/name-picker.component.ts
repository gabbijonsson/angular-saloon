import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-name-picker',
  templateUrl: './name-picker.component.html',
  styleUrls: ['./name-picker.component.css']
})
export class NamePickerComponent implements OnChanges {

  @Output() guestNameSubmit: EventEmitter<any> = new EventEmitter();
  @Input() currentName: string;

  buttonText: string;

  constructor() { }

  ngOnChanges(): void {
    this.buttonText = this.currentName ? 'Change my name!' : 'Remember my name!';
  }

  saveName = (firstName, lastName) => {
    if (firstName && lastName) {
      this.guestNameSubmit.emit({
        firstName: firstName,
        lastName: lastName
      });
    }
  }

}
