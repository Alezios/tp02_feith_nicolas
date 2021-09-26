import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //import manuel obligatoire pour le two-way binding dans le formulaire. Module dédié a la gestion des formulaires
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AdresseComponent } from './adresse/adresse.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormRecapComponent } from './form-recap/form-recap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdresseComponent,
    TetiereComponent,
    FooterComponent,
    FormRecapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
