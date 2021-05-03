import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private key = environment.accessKey;
  private apiUrl = environment.apiUrl;
  private and = "&"
  private query = "query="
  private perPage ="per_page="
  private page="page="

  dataToEmit: EventEmitter<response> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }



  private getImages(term:string, itemsPerPage:number, page:number) {
    
    return this.httpClient.get(this.apiUrl + 
      this.query + term+
      this.and+this.page+page+
      this.and+this.perPage+itemsPerPage+
      this.and+this.key)

  }

  public loadPool(term: string, itemsPerPage:number, page:number,newTerm) {

    this.getImages(term, itemsPerPage,page)
      .subscribe((data: response) => {
        data.term=term;
        data.newTerm=newTerm;
        this.dataToEmit.emit(data);

      });
  }
}




// INTERFACES

export interface response {
  total: number,
  total_pages: number,
  results?: Array<imageResponse>,
  term?:string,
  newTerm:boolean,
}

export interface imageResponse {
  alt_description?: string,
  description?: string,
  likes: number,
  urls: urlTypes,
  user: author,
  id: string,
}

export interface author {
  name: string,
  location: string,
  profile_image: profile_image;
}

export interface urlTypes {
  full: string,
  raw: string,
  regular: string,
  small: string,
  thumb: string,
}

export interface paginatorEvent{
  length: number,
  pageIndex: number,
  pageSize: number,
  previousPageIndex: number,
}

export interface profile_image{
  small:string,
  medium:string,
  large:string,
}


