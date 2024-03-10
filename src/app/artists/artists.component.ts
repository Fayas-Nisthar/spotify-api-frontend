import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  name:any
  constructor(private service:ServicesService){
  }

  ngOnInit(): void {
    this.service.getHomeArtists().subscribe(data=>{
      this.name=data
      this.name=this.name.artists
    })
  }
}
