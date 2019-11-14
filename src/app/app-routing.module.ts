import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';
import { ExploreComponent } from './routes/explore/explore.component';
import { InstagramFeedComponent } from './routes/instagram-feed/instagram-feed.component';
import { ProfileTabComponent } from './routes/profile-tab/profile-tab.component';


const routes: Routes = [
  { path: 'accounts/login', component: IgFormComponent, },
  { path: 'accounts/emailsignup', component: IgFormComponent },
  { path: '', component: InstagramFeedComponent},
  { path: ':username' , component: ProfileTabComponent},
  { path: 'explore', component: ExploreComponent},
  { path: '', redirectTo: '/accounts/emailsignup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
