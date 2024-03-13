import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  @Output() public inputFilterRes:EventEmitter<any>=new EventEmitter();
  public isSearchFieldVisible:boolean=false
  searchQuery:any
  constructor(private service:ServicesService,private router:Router){

  }
  ngOnInit(): void {
    this.service.isSearchVisible.subscribe(status=>{
      this.isSearchFieldVisible=status;
    });
  }
  filterBrowsingList(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.updateUrl(query);
    this.service.setSearchQuery(query);
  }
  updateUrl(query: string): void {
    window.history.replaceState(null, '', `/search/${query}`);
  }
}
