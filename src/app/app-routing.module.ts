import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { GetartistComponent } from './getartist/getartist.component';
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"artists/:id",component:GetartistComponent},
  {path:"playlist/:id",component:PlaylistSongsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
