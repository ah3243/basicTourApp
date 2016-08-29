"use strict";
var router_1 = require('@angular/router');
var map_component_1 = require('./map.component');
var img_library_component_1 = require('./img-library.component');
var login_component_1 = require('./login.component');
var appRoutes = [
    {
        path: 'map',
        component: map_component_1.MapComponent
    }, {
        path: 'img',
        component: img_library_component_1.ImgLibrary
    },
    {
        path: '',
        component: login_component_1.Login
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map