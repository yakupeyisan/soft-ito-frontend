import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T,E> {
  public url="";
  constructor(public http:HttpClient) { }

  getAll():Observable<T[]>{
    return this.http.get<T[]>(this.url)
  }
  getById(id:E):Observable<T>{
    return this.http.get<T>(this.url)
  }
  add(entity:T):Observable<E>{
    return this.http.get<E>(this.url)
  }
  update(entity:T):Observable<E>{
    return this.http.get<E>(this.url)
  }
  delete(entity:T):Observable<E>{
    return this.http.get<E>(this.url)
  }
}
