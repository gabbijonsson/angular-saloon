import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectBeverageComponent } from './dialogue/select-beverage/select-beverage.component';
import { TheUsualComponent } from './dialogue/the-usual/the-usual.component';

import { BarGuestInformationService } from './bar-guest-information.service';
import { RightToBeForgottenComponent } from './right-to-be-forgotten/right-to-be-forgotten.component';
import { NamePickerComponent } from './dialogue/name-picker/name-picker.component';
import { AddBeverageComponent } from './dialogue/select-beverage/add-beverage/add-beverage.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectBeverageComponent,
    TheUsualComponent,
    RightToBeForgottenComponent,
    NamePickerComponent,
    AddBeverageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BarGuestInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
