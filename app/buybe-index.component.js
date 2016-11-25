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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var BuybeIndexComponent = (function () {
    function BuybeIndexComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        //sss:string;
        this.maxPageSize = 10;
        this.$ = jQuery;
        this.touchSlide = TouchSlide;
    }
    BuybeIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specialPageNum = 1;
        this.productService.getProducts(this.specialPageNum)
            .subscribe(function (list) { return _this.speciaLists = list; });
        this.productService.getProductsPageSize(this.specialPageNum)
            .subscribe(function (pagesize) { return _this.specialPageSize = pagesize; });
        //JSON.stringify
        //this.specialPageSize;
        // console.log(this.speciaLists);
        // console.log(this.specialPageSize);
        // console.log(this.$("#slideBox").length); 
        if (this.$("#slideBox").length) {
            this.touchSlide({
                slideCell: "#slideBox",
                titCell: ".hd ul",
                mainCell: ".bd ul",
                effect: "leftLoop",
                delayTime: 500,
                interTime: 5000,
                autoPage: true,
                autoPlay: true //自动播放
            });
        }
        this.$("#circle").click(function () {
            this.$(this).find(".tips").toggle();
        });
    };
    BuybeIndexComponent.prototype._push = function (beforeList, containList) {
        for (var index = 0; index < beforeList.length; index++) {
            containList.push(beforeList[index]);
        }
        return containList;
    };
    BuybeIndexComponent.prototype._getProductDetail = function (openiid) {
        var selectedItem;
        for (var item in this.speciaLists) {
            if (this.speciaLists[item]['openiid'] == openiid) {
                selectedItem.id = this.speciaLists[item]['openiid'];
                selectedItem.title = this.speciaLists[item]['title'];
                selectedItem.img = this.speciaLists[item]['item_imgs']['item_img'];
                selectedItem.price = this.speciaLists[item]['price'];
                selectedItem.desc = this.speciaLists[item]['desc'];
            }
        }
        return false;
    };
    BuybeIndexComponent.prototype.load = function (page) {
        var _this = this;
        this.specialPageNum = page;
        this.productService.getProducts(this.specialPageNum)
            .subscribe(function (list) { return _this.speciaLists = _this._push(list, _this.speciaLists); });
        this.productService.getProductsPageSize(this.specialPageNum)
            .subscribe(function (pagesize) { return _this.specialPageSize = pagesize; });
        //  console.log(this.items);
    };
    BuybeIndexComponent = __decorate([
        core_1.Component({
            selector: 'buybe-index',
            templateUrl: 'app/buybe-index.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], BuybeIndexComponent);
    return BuybeIndexComponent;
}());
exports.BuybeIndexComponent = BuybeIndexComponent;
//# sourceMappingURL=buybe-index.component.js.map