import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  searchQuery: any;
  song_image:any
  url:any
  songs:any
  constructor(private service:ServicesService){
  }
  onNavigation(page:string){
    if (page === "search"){
      this.service.isSearchVisible.next(true)
    } else {
      this.service.isSearchVisible.next(false)
    }
  }
  ngOnInit(): void {
    this.service.searchQuery$.subscribe(query => {
      this.searchQuery = query; 
      this.service.searchResult(this.searchQuery).subscribe(data=>this.songs=data)
    });    
  }
  preview(albums:any){
    this.url = albums.preview_url;
    this.song_image=albums.album.images[1].url;
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }

}
