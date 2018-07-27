import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalAction } from './global-actions/global-actions.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { MatchesComponent } from './pages/matches/matches.component';

import { TeamsUpload } from './modals/teams-upload/teams-upload.component';
import { TournamentDataUpload } from './modals/tournament-data-upload/tournament-data-upload.component';

const appRoutes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'matches', component: MatchesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GlobalAction,
    TeamsComponent,
    MatchesComponent,
    TeamsUpload,
    TournamentDataUpload
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
