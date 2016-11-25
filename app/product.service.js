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
var http_1 = require('@angular/http');
var ProductService = (function () {
    function ProductService(jsonp) {
        this.jsonp = jsonp;
    }
    ProductService.prototype.getProducts = function (page) {
        var url = 'http://buybe.service.local:3001/api/v1/products';
        var params = new http_1.URLSearchParams();
        params.set('page', page + ""); // the user's search value
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(url, { search: params })
            .map(function (request) { return request.json().atb_item_details.aitaobao_item_detail; }); //这里的概念就是get方法输出一个request函数，然后把request函数作为参数传给map，在执行map方法前，request先执行，输出string数组，的request.json。其实就是一个匿名函数立即执行
    };
    ;
    ProductService.prototype.getProductsPageSize = function (page) {
        var url = 'http://buybe.service.local:3001/api/v1/products';
        var params = new http_1.URLSearchParams();
        params.set('page', page + ""); // the user's search value
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(url, { search: params })
            .map(function (request) { return request.json().total_results; });
    };
    ProductService.prototype.getItem = function (openiid) {
        var url = 'http://buybe.service.local:3001/api/v1/tae';
        var params = new http_1.URLSearchParams();
        params.set("openiid", openiid);
        params.set("callback", 'JSONP_CALLBACK');
        return this.jsonp
            .get(url, { search: params })
            .map(function (result) { return result.json().data; });
    };
    ProductService.prototype.getSlider = function (openiid) {
        var url = 'http://buybe.service.local:3001/api/v1/product';
        var params = new http_1.URLSearchParams();
        params.set("openiid", openiid);
        params.set("callback", 'JSONP_CALLBACK');
        return this.jsonp
            .get(url, { search: params })
            .map(function (result) { return result.json().atb_item_details.aitaobao_item_detail[0].item.item_imgs.item_img; });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map