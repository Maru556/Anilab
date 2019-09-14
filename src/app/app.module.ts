//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { TopAnimeComponent } from "./pages/top-anime/top-anime.component";
import { SeasonalComponent } from "./pages/seasonal/seasonal.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AnimeDetailsComponent } from "./shared/anime-details/anime-details.component";
import { AnimeItemComponent } from "./pages/home/anime-item/anime-item.component";
import { ApiService } from "./api.service";

//Basic Routing
const appRoutes: Routes = [
  { path: "top-anime", component: TopAnimeComponent },
  { path: "seasonal-anime", component: SeasonalComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "details", component: AnimeDetailsComponent },
  { path: "", component: HomeComponent }
];

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
    AnimeItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
