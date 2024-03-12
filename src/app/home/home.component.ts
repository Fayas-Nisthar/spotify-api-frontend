import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:ServicesService){
  }
  onNavigation(page:string){
    if (page === "search"){
      this.service.isSearchVisible.next(true)
    } else {
      this.service.isSearchVisible.next(false)
    }

  }

}
