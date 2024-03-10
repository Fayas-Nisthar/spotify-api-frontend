import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  public isSearchFieldVisible:boolean=false
  constructor(private service:ServicesService){

  }
  ngOnInit(): void {
    this.service.isSearchVisible.subscribe(status=>{
      this.isSearchFieldVisible=status;
    });
  }
}
