import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Permission, User, UserPermission } from './entities/entities';
import { UserPermissionViewDto } from './entities/dtos';

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
  searchText:string=""
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

  getUserById(id:number):User|undefined{
    return this.userList.find(user=>user.id==id)
  }
  getPermissionById(id:number):Permission|undefined{
    return this.permissionList.find(permission=>permission.id==id)
  }
  makeMask(text:string):string{
    return text.substring(0,2)+"***";
  }
  getUserPermissionListBySearch():UserPermissionViewDto[]{
    let userPermissionViewList:UserPermissionViewDto[]=
    this.userPermissionList.map(userPermission=>{
      let user=this.getUserById(userPermission.userId);
      let permission=this.getPermissionById(userPermission.permissionId);
      let userPermissionViewDto:UserPermissionViewDto={
        id:userPermission.id,
        userId:userPermission.userId,
        permissionId:userPermission.permissionId,
        userFullName:user?.firstName+' '+user?.lastName,
        permissionName:permission?.name??''
      }
      return userPermissionViewDto
    })
    return userPermissionViewList.filter(
      userPermission=>
        this.searchText=="" ||
        (
          userPermission.permissionId.toString()==this.searchText ||
          userPermission.userId.toString()==this.searchText ||
          userPermission.userFullName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          userPermission.permissionName.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
        )
      )
  }
}
