import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-getartist',
  templateUrl: './getartist.component.html',
  styleUrls: ['./getartist.component.css']
})
export class GetartistComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;

  onNavigation(page:string){
    if (page === "search"){
      this.service.isSearchVisible.next(true)
    } else {
      this.service.isSearchVisible.next(false)
    }
  }
  artist:any
  songs:any
  id:any
  url:any
  song_image:any

  constructor(private service:ServicesService,private route:ActivatedRoute){

    this.id=this.route.snapshot.params["id"]    
  }
  ngOnInit(): void {
    this.service.getArtist(this.id).subscribe(data=>this.artist=data)
    this.service.getartistsAlbum(this.id).subscribe(data=>this.songs=data)
  }

  showAll: boolean = false;

  toggleItemsDisplay() {
    this.showAll = !this.showAll;
  }
  preview(albums:any){
    this.url = albums.preview_url;
    this.song_image=albums.album.images[1].url;
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }
  
}
