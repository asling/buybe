"use strict";
var router_1 = require('@angular/router');
var buybe_index_component_1 = require('./buybe-index.component');
var buybe_special_component_1 = require('./buybe-special.component');
var buybe_product_component_1 = require('./buybe-product.component');
var buybe_news_component_1 = require('./buybe-news.component');
var buybe_category_component_1 = require('./buybe-category.component');
var buybe_404_component_1 = require('./buybe-404.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: buybe_index_component_1.BuybeIndexComponent
    },
    {
        path: 'special/:id',
        component: buybe_special_component_1.BuybeSpecialComponent
    },
    {
        path: 'product/:id',
        component: buybe_product_component_1.BuybeProductComponent
    },
    {
        path: 'news/:id',
        component: buybe_news_component_1.BuybeNewsComponent
    },
    {
        path: 'category/:id',
        component: buybe_category_component_1.BuybeCategoryComponent
    },
    { path: '**', component: buybe_404_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routers.js.map