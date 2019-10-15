//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app/app-routing.module';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgArrayPipesModule } from '../../node_modules/ngx-pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotyfModule } from 'ng-notyf';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './authentication/services/auth.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopAnimeComponent } from './pages/top-anime/top-anime.component';
import { SeasonalComponent } from './pages/seasonal/seasonal.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import {
  LoginComponent,
  ForgotPasswordComponent // Dialog Pop-up
} from './pages/login/login.component';
import {
  ProfileComponent,
  UpdateProfileComponent // Dialog Pop-up
} from './pages/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { AnimeDetailsComponent } from './shared/anime-details/anime-details.component';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';
import { EmailVerificationComponent } from './authentication/email-verification/email-verification.component';
import { SearchComponent } from './pages/search/search.component';
import { environment } from 'src/environments/environment';
import { BookmarkService } from './shared/bookmark.service';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopAnimeComponent,
    SeasonalComponent,
    ScheduleComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    AnimeDetailsComponent,
    SafeResourceUrlPipe,
    EmailVerificationComponent,
    ForgotPasswordComponent,
    SearchComponent,
    UpdateProfileComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgArrayPipesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NotyfModule
  ],
  entryComponents: [ForgotPasswordComponent, UpdateProfileComponent],
  providers: [AuthService, BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
