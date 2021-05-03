import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService, imageResponse, response, paginatorEvent } from 'src/app/service/rest.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { ZoomComponent } from '../zoom/zoom.component';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  arrayImages:Array<imageResponse>;
  term:string;
  length :number = 1;
  pageSize :number = 12;
  pageSizeOptions: number[] = [8, 12, 24];
  resultOk:boolean =false;
  

  @ViewChild('paginator') paginator: MatPaginator;
  pageEvent: PageEvent;
  constructor(private rest: RestService, public dialog: MatDialog) { }

  ngOnInit() {

    this.rest.dataToEmit.subscribe((apiResponse:response)=>{
      console.log(apiResponse);
      this.arrayImages=apiResponse.results;
      apiResponse.results.length>0? this.resultOk=true : this.resultOk=false;
      if(apiResponse.newTerm&&this.paginator!=undefined){
        this.paginator.pageIndex=0; 
      }
      this.length=apiResponse.total;
      this.term=apiResponse.term;
      

    });

   
  }


   handlePaginator(event:paginatorEvent){
    
    this.rest.loadPool(this.term, event.pageSize, event.pageIndex+1,false);
    
  }


  zoom(imgInfo:imageResponse){
    this.dialog.open(ZoomComponent, {
      data:{imgInfo}
    });
  }

}
