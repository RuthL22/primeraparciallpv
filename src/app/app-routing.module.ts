import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'persona-list',
    loadChildren: () => import('./persona/persona-list/persona-list.module').then( m => m.PersonaListPageModule)
  },
  {
    path: 'persona-edit/:id',
    loadChildren: () => import('./persona/persona-edit/persona-edit.module').then( m => m.PersonaEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
