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
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe() {
    }
    EscapeHtmlPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        // Escape 'value' and return it
        return '<img width="100%" height="auto" src="' + value + '" >';
    };
    EscapeHtmlPipe = __decorate([
        core_2.Pipe({ name: 'escapeHtml', pure: false }), 
        __metadata('design:paramtypes', [])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());
var BuybeProductComponent = (function () {
    function BuybeProductComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.$ = jQuery;
        this.touchSlide = TouchSlide;
    }
    BuybeProductComponent.prototype.check = function (item) {
        console.log(item);
        this.productStr = JSON.stringify(item);
        return item;
    };
    BuybeProductComponent.prototype.check2 = function (item) {
        console.log(item);
        return item;
    };
    BuybeProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            //console.log(params);
            var id = params['id'] + "";
            //console.log(params['id']);
            _this.productService.getSlider(id)
                .subscribe(function (item) {
                _this.sliders = _this.check(item);
                setTimeout(function () {
                    jQuery("#slider").owlCarousel({ singleItem: true, autoPlay: true });
                }, 0);
            });
            _this.productService.getItem(id)
                .subscribe(function (item) {
                _this.product = _this.check2(item);
                _this.title = _this.product['item_info']['title'];
                _this.price = _this.product['price_info']['item_price']['price']['price'];
                _this.desc = _this.product['mobile_desc_info']['desc_list']['desc_fragment'];
            });
        });
    };
    BuybeProductComponent.prototype.slideStart = function () {
        this.$("#slider").owlCarousel({ singleItem: true, autoPlay: true });
    };
    BuybeProductComponent = __decorate([
        core_1.Component({
            selector: 'buybe-product',
            //template:`<div>ttets</div>`,
            templateUrl: 'app/buybe-product.component.html',
            styleUrls: ['app/buybe-product.component.css'],
            pipes: [EscapeHtmlPipe]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService])
    ], BuybeProductComponent);
    return BuybeProductComponent;
}());
exports.BuybeProductComponent = BuybeProductComponent;
//# sourceMappingURL=buybe-product.component.js.map