import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-getartist',
  templateUrl: './getartist.component.html',
  styleUrls: ['./getartist.component.css']
})
export class GetartistComponent implements OnInit {

  artist:any
  songs:any
  id:any
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

}
