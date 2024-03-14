import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SpotifyPlaylistComponent } from './spotify-playlist/spotify-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistsComponent } from './artists/artists.component';
import {HttpClientModule} from '@angular/common/http';
import { GetartistComponent } from './getartist/getartist.component';
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    NavComponent,
    SpotifyPlaylistComponent,
    ArtistsComponent,
    GetartistComponent,
    PlaylistSongsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
