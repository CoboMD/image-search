
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ImagesComponent } from './components/images/images.component';
import { ZoomComponent } from './components/zoom/zoom.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImagesComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule, 
    MatPaginatorModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
