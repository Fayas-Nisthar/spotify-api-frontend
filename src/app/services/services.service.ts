import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();
  public isSearchVisible:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  baseUrl:string=`https://api.spotify.com/v1/`

  constructor(private http:HttpClient) { }
  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

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
  searchResult(search:string){
    let authToken=this.getToken()
    let headers=authToken? new HttpHeaders().set("Authorization",authToken):undefined
    return this.http.get(`${this.baseUrl}search?q=${search}&type=track&market=IN&limit=10`,{headers})
  }
  signUp(data:any){
    return this.http.post("http://127.0.0.1:8000/register/",data)
  }
  signIn(data:any){
    return this.http.post("http://127.0.0.1:8000/login/",data)
  }
  logOut(){
    return this.http.post("http://127.0.0.1:8000/logout/",{})
  }
  getToken(){
    return "Bearer BQCzTa_p0kzSZqkvcD0qf4XPfALW9viqu-VFg9xDEz_87PKCwITtFwSLtLxOQkZhg4pjtuhj_aGiUqGV1lCzIc75HRPWBN7pRoFrCg1uonjLZMvEQDw"
  }
}
