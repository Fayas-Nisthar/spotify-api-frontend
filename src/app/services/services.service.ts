import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public isSearchVisible:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  baseUrl:string=`https://api.spotify.com/v1/`

  constructor(private http:HttpClient) { }

  getHomeArtists(){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}artists?ids=1wRPtKGflJrBx9BmLsSwlU,4YRxDV8wJFPHPTeXepOstw,4zCH9qm4R2DADamUHMCa6O,0oOet2f43PA68X5RxKobEy,1mYsTxnqsietFxj1OgoGbG`,{headers})
  }
  getFeaturedPlaylist(){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}browse/featured-playlists?limit=10`,{headers})
  }
  getArtist(id:any){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}artists/${id}`,{headers})
  }
  getartistsAlbum(id:any){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}artists/${id}/top-tracks`,{headers})
  }
  getPlaylistSong(id:any){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}playlists/${id}`,{headers})
  }
  getToken(){
    return "Bearer "
  }
}
