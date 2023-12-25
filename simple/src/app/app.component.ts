import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Permission, User, UserPermission } from './entities/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    FormsModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';
  userList:User[]=[
    {
      id:1,
      firstName:"Yakup",
      lastName:"Eyisan",
      age:28
    },
    {
      id:2,
      firstName:"Bahri",
      lastName:"Baş",
      age:23
    },
    {
      id:3,
      firstName:"Ahmet",
      lastName: "Özenir",
      age:25
    }
  ]
  permissionList:Permission[]=[
    {
      id:1,
      name:"Supervisor"
    },
    {
      id:2,
      name:"Admin"
    },
    {
      id:3,
      name:"Guest"
    }
  ]
  userPermissionList:UserPermission[]=[
    {
      id:1,
      userId:1,
      permissionId:1
    },
    {
      id:2,
      userId:2,
      permissionId:2
    },
    {
      id:3,
      userId:2,
      permissionId:3
    }
  ]

  getUserById(id:number):any|undefined{
    return this.userList.map(user=>{return {id:user.id,fullName:user.firstName+" "+this.makeMask(user.lastName)}}).find(user=>user.id==id)
  }
  getPermissionById(id:number):Permission|undefined{
    return this.permissionList.find(permission=>permission.id==id)
  }
  makeMask(text:string):string{
    return text.substring(0,2)+"***";
  }
}
