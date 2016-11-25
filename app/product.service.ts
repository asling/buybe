    import { Injectable } from '@angular/core';
    import { Jsonp,URLSearchParams } from '@angular/http';
    @Injectable()
    export class ProductService {
      constructor(private jsonp: Jsonp) {}
      getProducts (page : number) {
        let url = 'http://buybe.service.local:3001/api/v1/products';
        let params = new URLSearchParams();
        params.set('page', page+""); // the user's search value
        params.set('callback', 'JSONP_CALLBACK');
        
        return this.jsonp
                   .get(url,{search:params})
                   .map(request => <string[]> request.json().atb_item_details.aitaobao_item_detail);   //这里的概念就是get方法输出一个request函数，然后把request函数作为参数传给map，在执行map方法前，request先执行，输出string数组，的request.json。其实就是一个匿名函数立即执行
      };

      getProductsPageSize(page:number){
        let url = 'http://buybe.service.local:3001/api/v1/products';
        let params = new URLSearchParams();
        params.set('page', page+""); // the user's search value
        params.set('callback', 'JSONP_CALLBACK');
        
        return this.jsonp
                   .get(url,{search:params})
                   .map(request => <string> request.json().total_results); 
      }

      getItem(openiid:string){
        let url = 'http://buybe.service.local:3001/api/v1/tae';
        let params = new URLSearchParams();
        params.set("openiid",openiid);
        params.set("callback",'JSONP_CALLBACK');
        return this.jsonp
                   .get(url,{search:params})
                   .map(result=><string>result.json().data);
      }

      getSlider(openiid:string){
        let url = 'http://buybe.service.local:3001/api/v1/product';
        let params = new URLSearchParams();
        params.set("openiid",openiid);
        params.set("callback",'JSONP_CALLBACK');
        return this.jsonp
                   .get(url,{search:params})
                   .map(result=><string[]>result.json().atb_item_details.aitaobao_item_detail[0].item.item_imgs.item_img);
      }
      

    }