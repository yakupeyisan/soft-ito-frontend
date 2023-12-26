import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Category, Product, ProductRate } from './entities/entity';
import { ProductViewDto } from './entities/dto';
import { FormsModule } from '@angular/forms';
import "./extensions/strings";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'algorithms';
  searchText:string="";
  categories:Category[]=[
    {
      id:1,
      name:"Arçelik"
    }
  ]
  products:Product[]=[{
    id:1,
    categoryId:1,
    name:"Buzdolabı",
    price:100
  }]
  productRates:ProductRate[]=[
    {
      id:1,
      productId:1,
      rate:4
    },
    {
      id:1,
      productId:1,
      rate:3
    }
  ]

  getProductWithRateList():ProductViewDto[]{
    let productViewList:ProductViewDto[]= this.products.map(product=>{
        let productRates=this.productRates.filter(rate=>rate.productId==product.id);
        return {
          id:product.id,
          name:product.name,
          categoryId:product.categoryId,
          price:product.price,
          categoryName:this.categories.find(category=>category.id==product.categoryId)?.name,
          rate: productRates.map(productRate=>productRate.rate).reduce((numb1,num2)=> numb1+num2,0) / productRates.length,
          rateCount:productRates.length
        } ;
    })
    productViewList=productViewList.filter(view=>
        this.searchText=="" ||
        (
          view.categoryId.toString()==this.searchText ||
          view.id.toString()==this.searchText||
          view.name?.toSearchText().includes(this.searchText.toSearchText())||
          view.categoryName?.toSearchText().includes(this.searchText.toSearchText())||
          view.price.toString().toSearchText().includes(this.searchText.toSearchText())||
          view.rate?.toString().toSearchText().includes(this.searchText.toSearchText())||
          view.rateCount?.toString()==this.searchText
        )
      )
      console.log(productViewList)
    return productViewList;
  }

}
