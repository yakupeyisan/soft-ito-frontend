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