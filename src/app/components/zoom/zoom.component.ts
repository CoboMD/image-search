import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { imageResponse } from 'src/app/service/rest.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  info;
  constructor(@Inject(MAT_DIALOG_DATA) public data:imageResponse) { 
    this.info=data;
  }

  ngOnInit(): void {
  }

}
