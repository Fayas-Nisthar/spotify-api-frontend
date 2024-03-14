import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { GetartistComponent } from './getartist/getartist.component';
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {path:"spotify",component:HomeComponent},
  {path:"",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"spotify/artists/:id",component:GetartistComponent},
  {path:"spotify/playlist/:id",component:PlaylistSongsComponent},
  {path:"spotify/search",component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
