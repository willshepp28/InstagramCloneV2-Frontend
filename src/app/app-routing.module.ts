import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';


const routes: Routes = [
  { path: 'login', component: IgFormComponent, },
  { path: 'signup', component: IgFormComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
