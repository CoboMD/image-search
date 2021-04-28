import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private key =environment.accessKey;
  private apiUrl =environment.apiUrl;

  constructor() { }
}
