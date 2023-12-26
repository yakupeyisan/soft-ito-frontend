export interface ProductViewDto{
    id:number;
    categoryId:number;
    name:string;
    price:number;
    categoryName?:string;
    rate?:number;
    rateCount?:number;
}