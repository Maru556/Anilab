//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app/app-routing.module";
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
    AppRoutingModule,
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
