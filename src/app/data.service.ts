import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post} from './Post';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
      console.log('service is working!');
   }

  obtenerDatos(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    
  } 
}
