import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { CommonModule } from '@angular/common';
import { PostComment } from '../../../entities/entity';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit{
  constructor(private commentService:CommentService){}
  comments:PostComment[]=[]
  @Input() postId:number=0

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.commentService.findAllByPostId(this.postId).subscribe(res=>{
      this.comments=res;
    },error=>{
      this.comments=[]
    })
  }

}
