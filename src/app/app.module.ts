import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SelectwinnersComponent } from './selectwinners/selectwinners.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './selectwinners/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectwinnersComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
