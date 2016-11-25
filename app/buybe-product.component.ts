import { Component,OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { Product } from './product';
import { ProductService } from './product.service';

declare var jQuery:any;
declare var TouchSlide:any;
@Pipe({name: 'escapeHtml', pure: false})
class EscapeHtmlPipe implements PipeTransform {
   transform(value: any, args: any[] = []) {
       // Escape 'value' and return it
       return '<img width="100%" height="auto" src="'+value+'" >';
   }
}

@Component({
      selector: 'buybe-product',
      //template:`<div>ttets</div>`,
      templateUrl: 'app/buybe-product.component.html',
      styleUrls:['app/buybe-product.component.css'],
      pipes : [EscapeHtmlPipe]
})
export class BuybeProductComponent implements OnInit {
      
      productViewItem : Product;
      title:string;
      price:string;
      desc:Object[];

      product : Object;
      sliders : Object[];
      productStr : string;
      touchSlide:any;
     // openiid:string;
      $:any;
      constructor(private route : ActivatedRoute,
            private productService:ProductService){
            this.$ = jQuery;
            this.touchSlide = TouchSlide;
      }
      check(item:string[]){
            console.log(item);
            this.productStr = JSON.stringify(item);
           
            return item;
      }

      check2(item:Object){
            console.log(item);
            return item;
      }

     ngOnInit(){
            this.route.params.forEach((params: Params) => {
                  //console.log(params);
                  let id = params['id']+"";
                  //console.log(params['id']);
                  this.productService.getSlider(id)
                               .subscribe(item=>{
                                     this.sliders = this.check(item);
                                     setTimeout(()=>{
                                          jQuery("#slider").owlCarousel({singleItem:true,autoPlay:true});
                                     },0);
                               });

                 this.productService.getItem(id)
                                    .subscribe(item=>{
                                          this.product = this.check2(item);
                                          this.title = this.product['item_info']['title'];
                                          this.price = this.product['price_info']['item_price']['price']['price'];
                                          this.desc = this.product['mobile_desc_info']['desc_list']['desc_fragment'];
                                    });
            });
            
      }

      slideStart(){
            this.$("#slider").owlCarousel({singleItem:true,autoPlay:true});
      }

 }