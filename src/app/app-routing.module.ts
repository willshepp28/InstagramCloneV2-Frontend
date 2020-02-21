import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';
import { ExploreComponent } from './routes/explore/explore.component';
import { InstagramFeedComponent } from './routes/instagram-feed/instagram-feed.component';
import { ProfileTabComponent } from './routes/profile-tab/profile-tab.component';
import { AuthenticationGuard } from './core/guards/authentication-guard.service';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';



const routes: Routes = [
  {
    path: 'accounts',
    // canActivateChild: [AuthenticatedGuard],
     children: [
      { path: "login", component: IgFormComponent},
      { path: "emailsignup", component: IgFormComponent}
     ]
  },
  { path: 'instagram-feed', component: InstagramFeedComponent, canActivate: [AuthenticationGuard]},
  { path: ':username' , component: ProfileTabComponent, canActivate: [AuthenticationGuard] },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthenticationGuard]},
  { path: '', redirectTo: '/accounts/emailsignup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
