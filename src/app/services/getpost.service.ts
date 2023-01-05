import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetpostService {

  constructor(private http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users/1/posts'

  getAllPost():Observable<any>{
   return this.http.get(this.url)
  }

}
