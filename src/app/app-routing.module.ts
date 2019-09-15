import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TopAnimeComponent } from "./pages/top-anime/top-anime.component";
import { SeasonalComponent } from "./pages/seasonal/seasonal.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AnimeDetailsComponent } from "./shared/anime-details/anime-details.component";

//Basic Routing
const appRoutes: Routes = [
  { path: "top-anime", component: TopAnimeComponent },
  { path: "seasonal-anime", component: SeasonalComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "details/:id", component: AnimeDetailsComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
