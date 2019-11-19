import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Ngrx
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./core/store/app.states";
import { AuthenticationEffects } from "./core/store/effects/authentication.effects";


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupInputsComponent } from './routes/accounts/signup-inputs/signup-inputs.component';
import { LoginInputsComponent } from './routes/accounts/login-inputs/login-inputs.component';
import { IgFormComponent } from './routes/accounts/ig-form/ig-form.component';
import { ExploreComponent } from './routes/explore/explore.component';
import { InstagramFeedComponent } from './routes/instagram-feed/instagram-feed.component';
import { ProfileTabComponent } from './routes/profile-tab/profile-tab.component';

// Services
import { AuthenticationService } from './core/services/authentication.service';

// Interceptors
import { JwtInterceptor } from "./core/interceptors/jwt-interceptor";

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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      AuthenticationEffects
    ])
    // StoreModule.forRoot(reducers, {});
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
