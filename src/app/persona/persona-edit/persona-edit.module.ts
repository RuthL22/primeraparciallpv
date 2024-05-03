import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaEditPageRoutingModule } from './persona-edit-routing.module';

import { PersonaEditPage } from './persona-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PersonaEditPageRoutingModule
  ],
  declarations: [PersonaEditPage]
})
export class PersonaEditPageModule {}
