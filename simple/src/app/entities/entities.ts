export interface User{
    id:number;
    firstName:string;
    lastName:string;
    age:number;
}
export interface Permission{
    id:number;
    name:string;
}
export interface UserPermission{
    id:number;
    userId:number;
    permissionId:number;
}
export interface UserCar{
    id:number;
    userId:number;
    brand:string;
    model:string;
    year:number;
}