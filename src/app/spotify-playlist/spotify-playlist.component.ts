import { Component,HostListener, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-spotify-playlist',
  templateUrl: './spotify-playlist.component.html',
  styleUrls: ['./spotify-playlist.component.css']
})
export class SpotifyPlaylistComponent implements OnInit {

  lists:any
  constructor(private service:ServicesService){
  }

  ngOnInit(): void {
    this.service.getFeaturedPlaylist().subscribe(data=>{
      this.lists=data
      this.lists=this.lists.playlists.items
    })
  }

  @HostListener('wheel', ['$event']) onWheel(event: WheelEvent) {
    const element = document.getElementById('scrollableContainer');
    if (element) {
      element.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }


}
