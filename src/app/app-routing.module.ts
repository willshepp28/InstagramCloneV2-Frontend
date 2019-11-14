import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';


const routes: Routes = [
  { path: 'accounts/login', component: IgFormComponent, },
  { path: 'accounts/emailsignup', component: IgFormComponent },
  { path: '', redirectTo: '/accounts/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
