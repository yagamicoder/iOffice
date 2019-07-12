import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../app/components/profile/profile.component'
import { DirectoryComponent } from '../app/components/directory/directory.component'


const routes: Routes = [
  { path : '' , component: DirectoryComponent },
  { path: 'user/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
