export interface Category{
    id:number;
    name:string;
}
export interface Product{
    id:number;
    categoryId:number;
    name:string;
    price:number;
}
export interface ProductRate{
    id:number;
    productId:number;
    rate:number;
}

export interface Post{
    id:number;
    userId:number;
    title:string;
    body:string;
}
export interface GeoLoc{
    lat:string;
    lng:string;
}
export interface Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:GeoLoc;
}
export interface Company{
    name:string;
    catchPhrase:string;
    bs:string;
}
export interface User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:string;
    website:string;
    company:Company;
}
export interface PostComment{
    id:number;
    postId:number;
    name:string;
    email:string;
    body:string;
}