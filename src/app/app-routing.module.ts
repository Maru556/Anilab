import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopAnimeComponent } from './pages/top-anime/top-anime.component';
import { SeasonalComponent } from './pages/seasonal/seasonal.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AnimeDetailsComponent } from './shared/anime-details/anime-details.component';
import { AuthGuard } from './authentication/services/auth.guard';
import { VeriAuthGuard } from './authentication/services/veri-auth.guard';
import { EmailVerificationComponent } from './authentication/email-verification/email-verification.component';
import { SearchComponent } from './pages/search/search.component';

//Basic Routing
const appRoutes: Routes = [
  { path: 'top-anime', component: TopAnimeComponent },
  { path: 'seasonal-anime', component: SeasonalComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'details/:id', component: AnimeDetailsComponent },
  { path: 'Anilab', component: HomeComponent },
  {
    path: 'verify-email-address',
    component: EmailVerificationComponent,
    canActivate: [VeriAuthGuard]
  },
  { path: 'search/:search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
