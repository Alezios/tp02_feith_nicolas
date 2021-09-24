import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'; //import manuel obligatoire pour le two-way binding dans le formulaire. Module dédié a la gestion des formulaires
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AdresseComponent } from './adresse/adresse.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
