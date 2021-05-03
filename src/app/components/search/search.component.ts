import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value:string;
  
  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  onEnter(value: string) { 
    this.rest.loadPool(value, 12, 1,true)
    
   

    
  }

  


}
