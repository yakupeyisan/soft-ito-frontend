import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from '../entities/entity';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  findAllByPostId(postId:number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  }
}
