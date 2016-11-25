"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routers_1 = require('./app.routers');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var buybe_index_component_1 = require('./buybe-index.component');
var buybe_special_component_1 = require('./buybe-special.component');
var buybe_product_component_1 = require('./buybe-product.component');
var buybe_news_component_1 = require('./buybe-news.component');
var buybe_category_component_1 = require('./buybe-category.component');
var buybe_404_component_1 = require('./buybe-404.component');
var wikipedia_service_1 = require('./wikipedia.service');
var product_service_1 = require('./product.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routers_1.routing,
                http_1.HttpModule, http_1.JsonpModule],
            declarations: [
                app_component_1.AppComponent,
                buybe_index_component_1.BuybeIndexComponent,
                buybe_special_component_1.BuybeSpecialComponent,
                buybe_product_component_1.BuybeProductComponent,
                buybe_news_component_1.BuybeNewsComponent,
                buybe_category_component_1.BuybeCategoryComponent,
                buybe_404_component_1.PageNotFoundComponent
            ],
            providers: [
                product_service_1.ProductService,
                wikipedia_service_1.WikipediaService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map