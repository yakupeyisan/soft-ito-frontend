import { Component, OnInit } from '@angular/core';
import { Post } from '../../entities/entity';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,CommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  //Dependency Injection
  constructor(private postService:PostService){}
  posts:Post[]=[]

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.postService.getAll().subscribe(res=>{})
    this.postService.findAll().subscribe(res=>{
      this.posts=res
    },error=>{
      this.posts=[]
    })
  }
}
