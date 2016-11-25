import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Product } from './product';
import { ProductService } from './product.service';

//import { WikipediaService } from './wikipedia.service';

declare var jQuery:any;
declare var TouchSlide:any;
@Component({
      selector: 'buybe-index',
      templateUrl: 'app/buybe-index.component.html',
      
     // styleUrls:['app/buybe-header.component.css'],
})
export class BuybeIndexComponent implements OnInit {
     product : Product;
     items: Observable<string[]>;
     speciaLists: Object[];
     specialPageSize:string;
     specialPageNum:number;
     //sss:string;
     maxPageSize = 10;
     //speciaLists:any;
     touchSlide:any;
      $:any;
      constructor(private router:Router,
            private productService:ProductService){
            this.$ = jQuery;
            this.touchSlide = TouchSlide;
      }

      

      ngOnInit(){
          this.specialPageNum = 1;
          this.productService.getProducts(this.specialPageNum)
                                          .subscribe(list=>this.speciaLists = list);
                                         
          this.productService.getProductsPageSize(this.specialPageNum)
                                          .subscribe(pagesize=>this.specialPageSize = pagesize);
                                          //JSON.stringify
          //this.specialPageSize;
           // console.log(this.speciaLists);
           // console.log(this.specialPageSize);
          // console.log(this.$("#slideBox").length); 
           if(this.$("#slideBox").length){
                  this.touchSlide({ 
                        slideCell:"#slideBox",
                        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                        mainCell:".bd ul", 
                        effect:"leftLoop", 
                        delayTime:500,//切换效果持续时间
                        interTime:5000,//自动运行间隔
                        autoPage:true,//自动分页
                        autoPlay:true //自动播放
                  });        
            }
            this.$("#circle").click(function(){
                  this.$(this).find(".tips").toggle();
            });
      }

      _push(beforeList:string[],containList:Object[]){
            for (let index = 0; index < beforeList.length; index++) {
                  containList.push(beforeList[index]);
                  
            }
            return containList;
      }

      _getProductDetail(openiid : string){
          let selectedItem : Product;
          for(let item in this.speciaLists){
                if(this.speciaLists[item]['openiid'] == openiid){
                      selectedItem.id = this.speciaLists[item]['openiid'];
                      selectedItem.title = this.speciaLists[item]['title'];
                      selectedItem.img = this.speciaLists[item]['item_imgs']['item_img'];
                      selectedItem.price = this.speciaLists[item]['price'];
                      selectedItem.desc = this.speciaLists[item]['desc'];
                      //return this.speciaLists[item];
                }
          } 
          return false; 
      }

      load (page: number) {
            this.specialPageNum = page;
            this.productService.getProducts(this.specialPageNum)
                                          .subscribe(list => this.speciaLists = this._push(list,this.speciaLists));
            this.productService.getProductsPageSize(this.specialPageNum)
                                          .subscribe(pagesize=>this.specialPageSize = pagesize);
          //  console.log(this.items);
      }

      
 }