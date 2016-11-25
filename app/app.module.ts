import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule,XHRBackend,JsonpModule  } from '@angular/http';

import { BuybeIndexComponent } from './buybe-index.component';
import { BuybeSpecialComponent } from './buybe-special.component';
import { BuybeProductComponent } from './buybe-product.component';
import { BuybeNewsComponent } from './buybe-news.component';
import { BuybeCategoryComponent } from './buybe-category.component';
import { PageNotFoundComponent } from './buybe-404.component';

import { InMemoryBackendService} from 'angular2-in-memory-web-api';

import { WikipediaService } from './wikipedia.service';

import { ProductService } from './product.service';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    routing,
    HttpModule,JsonpModule ],
  declarations: [ 
    AppComponent,
    BuybeIndexComponent,
    BuybeSpecialComponent,
    BuybeProductComponent,
    BuybeNewsComponent,
    BuybeCategoryComponent,
    PageNotFoundComponent
     ],
  providers: [
    ProductService,
    WikipediaService,
   
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }