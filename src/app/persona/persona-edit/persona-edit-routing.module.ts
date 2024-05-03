import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaEditPage } from './persona-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaEditPageRoutingModule {}
