//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app/app-routing.module";
import { MaterialModule } from "./material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgArrayPipesModule } from "../../node_modules/ngx-pipes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NotyfModule } from "ng-notyf";

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AuthService } from "./authentication/services/auth.service";

const config = {
  apiKey: "AIzaSyCBmBF7WemiaGz9FBhLcIzBauciZbYx2JE",
  authDomain: "anilab-6be14.firebaseapp.com",
  databaseURL: "https://anilab-6be14.firebaseio.com",
  projectId: "anilab-6be14",
  storageBucket: "anilab-6be14.appspot.com",
  messagingSenderId: "257358841663",
  appId: "1:257358841663:web:8021c3b0b50462df60f58a"
};

//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { TopAnimeComponent } from "./pages/top-anime/top-anime.component";
import { SeasonalComponent } from "./pages/seasonal/seasonal.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import {
  LoginComponent,
  ForgotPasswordComponent
} from "./pages/login/login.component";

import { ProfileComponent } from "./pages/profile/profile.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AnimeDetailsComponent } from "./shared/anime-details/anime-details.component";
import { AnimeItemComponent } from "./pages/home/anime-item/anime-item.component";
import { SafeResourceUrlPipe } from "./safe-resource-url.pipe";
import { EmailVerificationComponent } from "./authentication/email-verification/email-verification.component";

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
    FooterComponent,
    AnimeDetailsComponent,
    AnimeItemComponent,
    SafeResourceUrlPipe,
    EmailVerificationComponent,
    ForgotPasswordComponent
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
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NotyfModule
  ],
  entryComponents: [ForgotPasswordComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
