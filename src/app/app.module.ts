import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Ngrx
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./core/store/app.states";
import { AuthenticationEffects } from "./core/store/effects/authentication.effects";
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


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
import { AlertsComponent } from './shared-module/components/alerts/alerts.component';
import { CustomSerializer } from './core/store/reducers/router.reducer';
import { AuthenticationGuard } from './core/guards/authentication-guard.service';
import { ErrorIntercept } from './core/interceptors/error-intercepotor';
import { HeaderComponent } from './shared-module/layout/header/header.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { PostComponent } from './shared-module/components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupInputsComponent,
    LoginInputsComponent,
    IgFormComponent,
    ExploreComponent,
    InstagramFeedComponent,
    ProfileTabComponent,
    AlertsComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      alert: reducers.alert,
      authentication: reducers.authentication
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AuthenticationEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthenticatedGuard,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
