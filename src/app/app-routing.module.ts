import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './routes/accounts/login/login.component';
import { SignupComponent } from './routes/accounts/signup/signup.component';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';


const routes: Routes = [
  { path: 'login', component: IgFormComponent, },
  { path: 'signup', component: IgFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
