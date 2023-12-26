import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../entities/entity';
import { Observable } from 'rxjs';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post,number>{

  override url: string="https://jsonplaceholder.typicode.com/posts";
  findAll():Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
  /*findAll():Post[]{
    return []
  }
  findById(id:number):Post{
    return {}
  }
  add():boolean{
    return false;
  }
  update():boolean{
    return false
  }
  delete():boolean{
    return false
  }*/
}
