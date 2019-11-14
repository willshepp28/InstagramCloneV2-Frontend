import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupInputsComponent } from './routes/accounts/signup-inputs/signup-inputs.component';
import { LoginInputsComponent } from './routes/accounts/login-inputs/login-inputs.component';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';
import { ExploreComponent } from './routes/explore/explore.component';
import { InstagramFeedComponent } from './routes/instagram-feed/instagram-feed.component';
import { ProfileTabComponent } from './routes/profile-tab/profile-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupInputsComponent,
    LoginInputsComponent,
    IgFormComponent,
    ExploreComponent,
    InstagramFeedComponent,
    ProfileTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
