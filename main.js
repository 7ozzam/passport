(self["webpackChunkpo_c_passport"] = self["webpackChunkpo_c_passport"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ 3783);
/* harmony import */ var _components_processing_page_processing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/processing-page/processing-page.component */ 1562);
/* harmony import */ var _components_Control_Control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Control/Control.component */ 6720);
/* harmony import */ var _components_Control_Documents_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Control/Documents/create/create.component */ 6084);
/* harmony import */ var _components_Control_Documents_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Control/Documents/list/list.component */ 6906);
/* harmony import */ var _components_guidelines_page_guidelines_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/guidelines-page/guidelines-page.component */ 8931);
/* harmony import */ var _components_Control_System_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Control/System/settings/settings.component */ 3393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingPageComponent, data: { animation: 'Landing' } },
    { path: 'document/:slug', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingPageComponent, data: { animation: 'Landing' } },
    { path: 'guidelines/:slug', component: _components_guidelines_page_guidelines_page_component__WEBPACK_IMPORTED_MODULE_5__.GuidelinesPageComponent, data: { animation: 'Landing' } },
    { path: 'result', component: _components_processing_page_processing_page_component__WEBPACK_IMPORTED_MODULE_1__.ProcessingPageComponent },
    { path: 'admin', component: _components_Control_Control_component__WEBPACK_IMPORTED_MODULE_2__.ControlComponent, children: [
            { path: 'document/list', component: _components_Control_Documents_list_list_component__WEBPACK_IMPORTED_MODULE_4__.ListComponent },
            { path: 'document/settings', component: _components_Control_System_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent },
            { path: 'document/create', component: _components_Control_Documents_create_create_component__WEBPACK_IMPORTED_MODULE_3__.CreateComponent },
            { path: 'document/edit/:id', component: _components_Control_Documents_create_create_component__WEBPACK_IMPORTED_MODULE_3__.CreateComponent },
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _classes_route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/route-animation */ 1878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data-management.service */ 3931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





class AppComponent {
    constructor(dataManagementService) {
        this.dataManagementService = dataManagementService;
        this.title = 'Passport-Ai';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_management_service__WEBPACK_IMPORTED_MODULE_1__.DataManagementService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_classes_route_animation__WEBPACK_IMPORTED_MODULE_0__.slideInAnimation] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ 3783);
/* harmony import */ var _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/partials/header/header.component */ 9331);
/* harmony import */ var _components_partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/partials/photo-button/photo-button.component */ 5314);
/* harmony import */ var _components_processing_page_processing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/processing-page/processing-page.component */ 1562);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _components_Control_Control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Control/Control.component */ 6720);
/* harmony import */ var _components_Control_Documents_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Control/Documents/list/list.component */ 6906);
/* harmony import */ var _components_Control_Documents_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Control/Documents/create/create.component */ 6084);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search.pipe */ 2080);
/* harmony import */ var _components_guidelines_page_guidelines_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/guidelines-page/guidelines-page.component */ 8931);
/* harmony import */ var _components_Control_System_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Control/System/settings/settings.component */ 3393);
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-select-ex */ 9457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__.AngularEditorModule,
            ngx_select_ex__WEBPACK_IMPORTED_MODULE_19__.NgxSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__.LandingPageComponent,
        _components_guidelines_page_guidelines_page_component__WEBPACK_IMPORTED_MODULE_10__.GuidelinesPageComponent,
        _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _components_partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_4__.PhotoButtonComponent,
        _components_processing_page_processing_page_component__WEBPACK_IMPORTED_MODULE_5__.ProcessingPageComponent,
        _components_Control_Control_component__WEBPACK_IMPORTED_MODULE_6__.ControlComponent,
        _components_Control_Documents_list_list_component__WEBPACK_IMPORTED_MODULE_7__.ListComponent,
        _components_Control_Documents_create_create_component__WEBPACK_IMPORTED_MODULE_8__.CreateComponent,
        _components_Control_System_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__.SettingsComponent,
        _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__.SearchPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__.AngularEditorModule,
        ngx_select_ex__WEBPACK_IMPORTED_MODULE_19__.NgxSelectModule] }); })();


/***/ }),

/***/ 1878:
/*!********************************************!*\
  !*** ./src/app/classes/route-animation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideInAnimation": () => (/* binding */ slideInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);

const slideInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('Landing => *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'fixed', width: '100%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ 6720:
/*!*********************************************************!*\
  !*** ./src/app/components/Control/Control.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponent": () => (/* binding */ ControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class ControlComponent {
    constructor() { }
    ngOnInit() {
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(); };
ControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlComponent, selectors: [["app-Control"]], decls: 24, vars: 0, consts: [[1, "area", "p-3"], [1, "main-menu"], [1, "fa", "fa-home", "fa-2x"], [1, "nav-text"], ["routerLink", "document/list"], [1, "fa", "fa-list", "fa-2x"], ["routerLink", "document/create"], [1, "fa", "fa-plus", "fa-2x"], ["routerLink", "document/settings"], [1, "fa", "fa-gear", "fa-2x"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " List Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Create Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Platform Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".fa-2x[_ngcontent-%COMP%] {\r\nfont-size: 2em;\r\n}\r\n.fa[_ngcontent-%COMP%] {\r\nposition: relative;\r\ndisplay: table-cell;\r\nwidth: 60px;\r\nheight: 36px;\r\ntext-align: center;\r\nvertical-align: middle;\r\nfont-size:20px;\r\n}\r\n.main-menu[_ngcontent-%COMP%]:hover, nav.main-menu.expanded[_ngcontent-%COMP%] {\r\nwidth:250px;\r\noverflow:visible;\r\n}\r\n.main-menu[_ngcontent-%COMP%] {\r\nbackground:#212121;\r\nborder-right:1px solid #e5e5e5;\r\nposition:fixed;\r\ntop:0;\r\nbottom:0;\r\nheight:100%;\r\nleft:0;\r\nwidth:60px;\r\noverflow:hidden;\r\ntransition:width .05s linear;\r\n-webkit-transform:translateZ(0) scale(1,1);\r\nz-index:1000;\r\n}\r\n.main-menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\r\nmargin:7px 0;\r\n}\r\n.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\nposition:relative;\r\ndisplay:block;\r\nwidth:250px;\r\n}\r\n.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\nposition:relative;\r\ndisplay:table;\r\nborder-collapse:collapse;\r\nborder-spacing:0;\r\ncolor:#999;\r\n font-family: arial;\r\nfont-size: 14px;\r\ntext-decoration:none;\r\n-webkit-transform:translateZ(0) scale(1,1);\r\ntransition:all .5s linear;\r\n\r\n}\r\n.main-menu[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\r\nposition:relative;\r\ndisplay:table-cell;\r\nwidth:60px;\r\nheight:36px;\r\ntext-align:center;\r\nvertical-align:middle;\r\nfont-size:18px;\r\n}\r\n.main-menu[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\r\nposition:relative;\r\ndisplay:table-cell;\r\nvertical-align:middle;\r\nwidth:190px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.main-menu[_ngcontent-%COMP%] > ul.logout[_ngcontent-%COMP%] {\r\nposition:absolute;\r\nleft:0;\r\nbottom:0;\r\n}\r\n.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%] {\r\noverflow-y:hidden;\r\n}\r\n.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%]:hover {\r\noverflow-y:auto;\r\noverflow:visible;\r\n}\r\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\r\ntext-decoration:none;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n-webkit-user-select:none;\r\n-o-user-select:none;\r\nuser-select:none;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\noutline:0;\r\nmargin:0;\r\npadding:0;\r\n}\r\n.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], nav.main-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .no-touch[_ngcontent-%COMP%]   .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ncolor:#fff;\r\nbackground-color:#5fa2db;\r\n}\r\n.area[_ngcontent-%COMP%] {\r\nfloat: right;\r\n\r\nwidth: calc(100% - 60px);\r\nheight: 100%;\r\n}\r\n@font-face {\r\n  font-family: 'Titillium Web';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZDtBQUdBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2QsS0FBSztBQUNMLFFBQVE7QUFDUixXQUFXO0FBQ1gsTUFBTTtBQUNOLFVBQVU7QUFDVixlQUFlO0FBRWYsNEJBQTRCO0FBQzVCLDBDQUEwQztBQUMxQyxZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixVQUFVO0NBQ1Qsa0JBQWtCO0FBQ25CLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsMENBQTBDO0FBRTFDLHlCQUF5Qjs7QUFFekI7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFdBQVc7QUFDWCxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGNBQWM7QUFDZDtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsV0FBVztFQUNULHdDQUF3QztBQUMxQztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTixRQUFRO0FBQ1I7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBRUE7QUFDQSx3QkFBd0I7QUFHeEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVU7QUFDVix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb01BQW9NO0FBQ3RNIiwiZmlsZSI6IkNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmEtMngge1xyXG5mb250LXNpemU6IDJlbTtcclxufVxyXG4uZmEge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbndpZHRoOiA2MHB4O1xyXG5oZWlnaHQ6IDM2cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1tZW51OmhvdmVyLG5hdi5tYWluLW1lbnUuZXhwYW5kZWQge1xyXG53aWR0aDoyNTBweDtcclxub3ZlcmZsb3c6dmlzaWJsZTtcclxufVxyXG5cclxuLm1haW4tbWVudSB7XHJcbmJhY2tncm91bmQ6IzIxMjEyMTtcclxuYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZTVlNWU1O1xyXG5wb3NpdGlvbjpmaXhlZDtcclxudG9wOjA7XHJcbmJvdHRvbTowO1xyXG5oZWlnaHQ6MTAwJTtcclxubGVmdDowO1xyXG53aWR0aDo2MHB4O1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbi13ZWJraXQtdHJhbnNpdGlvbjp3aWR0aCAuMDVzIGxpbmVhcjtcclxudHJhbnNpdGlvbjp3aWR0aCAuMDVzIGxpbmVhcjtcclxuLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpO1xyXG56LWluZGV4OjEwMDA7XHJcbn1cclxuXHJcbi5tYWluLW1lbnU+dWwge1xyXG5tYXJnaW46N3B4IDA7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkge1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTpibG9jaztcclxud2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGk+YSB7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OnRhYmxlO1xyXG5ib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XHJcbmJvcmRlci1zcGFjaW5nOjA7XHJcbmNvbG9yOiM5OTk7XHJcbiBmb250LWZhbWlseTogYXJpYWw7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbi13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgc2NhbGUoMSwxKTtcclxuLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgbGluZWFyO1xyXG50cmFuc2l0aW9uOmFsbCAuNXMgbGluZWFyO1xyXG5cclxufVxyXG5cclxuLm1haW4tbWVudSAubmF2LWljb24ge1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTp0YWJsZS1jZWxsO1xyXG53aWR0aDo2MHB4O1xyXG5oZWlnaHQ6MzZweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgLm5hdi10ZXh0IHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6dGFibGUtY2VsbDtcclxudmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG53aWR0aDoxOTBweDtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbi1tZW51PnVsLmxvZ291dCB7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjA7XHJcbmJvdHRvbTowO1xyXG59XHJcblxyXG4ubm8tdG91Y2ggLnNjcm9sbGFibGUuaG92ZXIge1xyXG5vdmVyZmxvdy15OmhpZGRlbjtcclxufVxyXG5cclxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyOmhvdmVyIHtcclxub3ZlcmZsb3cteTphdXRvO1xyXG5vdmVyZmxvdzp2aXNpYmxlO1xyXG59XHJcblxyXG5hOmhvdmVyLGE6Zm9jdXMge1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxubmF2IHtcclxuLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO1xyXG4tbW96LXVzZXItc2VsZWN0Om5vbmU7XHJcbi1tcy11c2VyLXNlbGVjdDpub25lO1xyXG4tby11c2VyLXNlbGVjdDpub25lO1xyXG51c2VyLXNlbGVjdDpub25lO1xyXG59XHJcblxyXG5uYXYgdWwsbmF2IGxpIHtcclxub3V0bGluZTowO1xyXG5tYXJnaW46MDtcclxucGFkZGluZzowO1xyXG59XHJcbi5tYWluLW1lbnUgbGk6aG92ZXI+YSxuYXYubWFpbi1tZW51IGxpLmFjdGl2ZT5hLC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1cywuZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpmb2N1cywubm8tdG91Y2ggLmRhc2hib2FyZC1wYWdlIG5hdi5kYXNoYm9hcmQtbWVudSB1bCBsaTpob3ZlciBhLC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG5jb2xvcjojZmZmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM1ZmEyZGI7XHJcbn1cclxuLmFyZWEge1xyXG5mbG9hdDogcmlnaHQ7XHJcbi8qIGJhY2tncm91bmQ6ICNlMmUyZTI7ICovXHJcbndpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgc3JjOiBsb2NhbCgnVGl0aWxsaXVtIFdlYkxpZ2h0JyksIGxvY2FsKCdUaXRpbGxpdW1XZWItTGlnaHQnKSwgdXJsKGh0dHA6Ly90aGVtZXMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3N0YXRpYy9mb250cy90aXRpbGxpdW13ZWIvdjIvYW5NVXZjTlQwSDFZTjRGSUk4d3ByMjRiTkNORW9GVHBTMkJUakY2RkI1RS53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6084:
/*!*************************************************************************!*\
  !*** ./src/app/components/Control/Documents/create/create.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/dashboard */ 5717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ 8031);









function CreateComponent_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add New Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.documentData.title);
} }
function CreateComponent_div_588_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Hair to Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_588_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.documentData.requirements.hairToTop.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_588_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.documentData.requirements.hairToTop.unit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.documentData.requirements.hairToTop.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.documentData.requirements.hairToTop.unit);
} }
function CreateComponent_div_589_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Eyes to Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_589_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.documentData.requirements.eyesToBottom.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_589_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.documentData.requirements.eyesToBottom.unit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.documentData.requirements.eyesToBottom.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.documentData.requirements.eyesToBottom.unit);
} }
function CreateComponent_div_610_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_610_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const meta_r11 = restoredCtx.$implicit; return meta_r11.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_div_610_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const meta_r11 = restoredCtx.$implicit; return meta_r11.content = $event; })("ngModelChange", function CreateComponent_div_610_Template_input_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.onChangeData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_div_610_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const i_r12 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.removeMeta(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", meta_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", meta_r11.content);
} }
class CreateComponent {
    constructor(api, aroute) {
        this.api = api;
        this.aroute = aroute;
        this.documentData = new _models_dashboard__WEBPACK_IMPORTED_MODULE_1__.LandingPageModel();
        this.documentId = 0;
        this.isEdit = false;
        this.temp = { faq: '', guidelines: '' };
        this.settings = { htop: true, ebottom: false, isEB: false, isGudelines: false, isFaq: false };
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            translate: 'no',
            sanitize: true,
            toolbarHiddenButtons: [
                ['toggleEditorMode', 'insertImage', 'insertVideo'],
                ['backgroundColorPicker', 'insertHorizontalRule']
            ]
        };
        this.createNewDocumentErrorHandler = this.createNewDocumentErrorHandler.bind(this);
    }
    onChangeGuidelines(event) {
        console.log(event);
        if (!event) {
            this.temp.guidelines = this.documentData.guidelines;
            this.documentData.guidelines = "";
        }
        else {
            this.documentData.guidelines = this.temp.guidelines;
            this.temp.guidelines = "";
        }
    }
    onChangeFaq(event) {
        console.log(event);
        if (!event) {
            this.temp.faq = this.documentData.faq;
            this.documentData.faq = "";
        }
        else {
            this.documentData.faq = this.temp.faq;
            this.temp.faq = "";
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.documentId = +this.aroute.snapshot.paramMap.get('id');
            if (!!this.documentId) {
                this.isEdit = true;
                this.documentData = yield this.api.getAllLandingPagesWidthIdAdmin(this.documentId.toString()).toPromise();
                if (!!this.documentData.guidelines) {
                    this.settings.isGudelines = true;
                }
                if (!!this.documentData.faq) {
                    this.settings.isFaq = true;
                }
                console.log('edit');
            }
            else {
                this.isEdit = false;
                console.log('create');
            }
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.documentData);
            if (!!this.isEdit) {
                let response = yield this.api.updateDocumentAdmin(this.documentData, this.createNewDocumentErrorHandler).toPromise();
                this.swalEditAlert();
            }
            else {
                let response = yield this.api.createNewDocumentAdmin(this.documentData, this.createNewDocumentErrorHandler).toPromise();
                this.swalDoneAlert();
            }
        });
    }
    createNewDocumentErrorHandler(error) {
        console.log(error);
        this.swalErrorAlert(error);
    }
    swalDoneAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Done',
            text: "Document Added Successfully",
            icon: 'success',
        });
    }
    swalEditAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    swalErrorAlert(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Error',
            text: message,
            icon: 'error',
        });
    }
    // removeFaq(i) {
    //   this.documentData.faq.splice(i, 1)
    // }
    removeMeta(i) {
        this.documentData.meta_data.splice(i, 1);
    }
    changeSpecialReq(event) {
        if (!!event) {
            this.documentData.requirements.eyesToBottom = new _models_dashboard__WEBPACK_IMPORTED_MODULE_1__.ValueUnitModel(this.documentData.requirements.hairToTop.value, this.documentData.requirements.hairToTop.unit);
            this.documentData.requirements.hairToTop = undefined;
        }
        else {
            this.documentData.requirements.hairToTop = new _models_dashboard__WEBPACK_IMPORTED_MODULE_1__.ValueUnitModel(this.documentData.requirements.eyesToBottom.value, this.documentData.requirements.eyesToBottom.unit);
            this.documentData.requirements.eyesToBottom = undefined;
        }
    }
    // enablePrintable() {
    //   this.documentData.requirements.isPrintable = true;
    //   this.documentData.requirements.isOnline = false;
    // }
    // enableDigital() {
    //   this.documentData.requirements.isPrintable = false;
    //   this.documentData.requirements.isOnline = true;
    // }
    // addFaq() {
    //   this.documentData.faq.push({q: '', a: ''})
    // }
    addMeta() {
        // if (this.documentData.meta_data?.length === 0  ) {
        //   this.documentData.meta_data = [];
        // }
        this.documentData.meta_data.push({ name: '', content: '' });
    }
    onChangeData() {
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 614, vars: 39, consts: [[1, "container-fluid", "px-5", "mt-5"], [1, "action-bar", "p-4", 2, "height", "60px"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "flex-center"], [1, "col-8"], [1, "col-12"], [4, "ngIf"], [1, "col-12", "py-1"], ["type", "text", "placeholder", "Document Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "country", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "Afganistan"], ["value", "Albania"], ["value", "Algeria"], ["value", "American Samoa"], ["value", "Andorra"], ["value", "Angola"], ["value", "Anguilla"], ["value", "Antigua & Barbuda"], ["value", "Argentina"], ["value", "Armenia"], ["value", "Aruba"], ["value", "Australia"], ["value", "Austria"], ["value", "Azerbaijan"], ["value", "Bahamas"], ["value", "Bahrain"], ["value", "Bangladesh"], ["value", "Barbados"], ["value", "Belarus"], ["value", "Belgium"], ["value", "Belize"], ["value", "Benin"], ["value", "Bermuda"], ["value", "Bhutan"], ["value", "Bolivia"], ["value", "Bonaire"], ["value", "Bosnia & Herzegovina"], ["value", "Botswana"], ["value", "Brazil"], ["value", "British Indian Ocean Ter"], ["value", "Brunei"], ["value", "Bulgaria"], ["value", "Burkina Faso"], ["value", "Burundi"], ["value", "Cambodia"], ["value", "Cameroon"], ["value", "Canada"], ["value", "Canary Islands"], ["value", "Cape Verde"], ["value", "Cayman Islands"], ["value", "Central African Republic"], ["value", "Chad"], ["value", "Channel Islands"], ["value", "Chile"], ["value", "China"], ["value", "Christmas Island"], ["value", "Cocos Island"], ["value", "Colombia"], ["value", "Comoros"], ["value", "Congo"], ["value", "Cook Islands"], ["value", "Costa Rica"], ["value", "Cote DIvoire"], ["value", "Croatia"], ["value", "Cuba"], ["value", "Curaco"], ["value", "Cyprus"], ["value", "Czech Republic"], ["value", "Denmark"], ["value", "Djibouti"], ["value", "Dominica"], ["value", "Dominican Republic"], ["value", "East Timor"], ["value", "Ecuador"], ["value", "Egypt"], ["value", "El Salvador"], ["value", "Equatorial Guinea"], ["value", "Eritrea"], ["value", "Estonia"], ["value", "Ethiopia"], ["value", "Falkland Islands"], ["value", "Faroe Islands"], ["value", "Fiji"], ["value", "Finland"], ["value", "France"], ["value", "French Guiana"], ["value", "French Polynesia"], ["value", "French Southern Ter"], ["value", "Gabon"], ["value", "Gambia"], ["value", "Georgia"], ["value", "Germany"], ["value", "Ghana"], ["value", "Gibraltar"], ["value", "Great Britain"], ["value", "Greece"], ["value", "Greenland"], ["value", "Grenada"], ["value", "Guadeloupe"], ["value", "Guam"], ["value", "Guatemala"], ["value", "Guinea"], ["value", "Guyana"], ["value", "Haiti"], ["value", "Hawaii"], ["value", "Honduras"], ["value", "Hong Kong"], ["value", "Hungary"], ["value", "Iceland"], ["value", "Indonesia"], ["value", "India"], ["value", "Iran"], ["value", "Iraq"], ["value", "Ireland"], ["value", "Isle of Man"], ["value", "Israel"], ["value", "Italy"], ["value", "Jamaica"], ["value", "Japan"], ["value", "Jordan"], ["value", "Kazakhstan"], ["value", "Kenya"], ["value", "Kiribati"], ["value", "Korea North"], ["value", "Korea Sout"], ["value", "Kuwait"], ["value", "Kyrgyzstan"], ["value", "Laos"], ["value", "Latvia"], ["value", "Lebanon"], ["value", "Lesotho"], ["value", "Liberia"], ["value", "Libya"], ["value", "Liechtenstein"], ["value", "Lithuania"], ["value", "Luxembourg"], ["value", "Macau"], ["value", "Macedonia"], ["value", "Madagascar"], ["value", "Malaysia"], ["value", "Malawi"], ["value", "Maldives"], ["value", "Mali"], ["value", "Malta"], ["value", "Marshall Islands"], ["value", "Martinique"], ["value", "Mauritania"], ["value", "Mauritius"], ["value", "Mayotte"], ["value", "Mexico"], ["value", "Midway Islands"], ["value", "Moldova"], ["value", "Monaco"], ["value", "Mongolia"], ["value", "Montserrat"], ["value", "Morocco"], ["value", "Mozambique"], ["value", "Myanmar"], ["value", "Nambia"], ["value", "Nauru"], ["value", "Nepal"], ["value", "Netherland Antilles"], ["value", "Netherlands"], ["value", "Nevis"], ["value", "New Caledonia"], ["value", "New Zealand"], ["value", "Nicaragua"], ["value", "Niger"], ["value", "Nigeria"], ["value", "Niue"], ["value", "Norfolk Island"], ["value", "Norway"], ["value", "Oman"], ["value", "Pakistan"], ["value", "Palau Island"], ["value", "Palestine"], ["value", "Panama"], ["value", "Papua New Guinea"], ["value", "Paraguay"], ["value", "Peru"], ["value", "Phillipines"], ["value", "Pitcairn Island"], ["value", "Poland"], ["value", "Portugal"], ["value", "Puerto Rico"], ["value", "Qatar"], ["value", "Republic of Montenegro"], ["value", "Republic of Serbia"], ["value", "Reunion"], ["value", "Romania"], ["value", "Russia"], ["value", "Rwanda"], ["value", "St Barthelemy"], ["value", "St Eustatius"], ["value", "St Helena"], ["value", "St Kitts-Nevis"], ["value", "St Lucia"], ["value", "St Maarten"], ["value", "St Pierre & Miquelon"], ["value", "St Vincent & Grenadines"], ["value", "Saipan"], ["value", "Samoa"], ["value", "Samoa American"], ["value", "San Marino"], ["value", "Sao Tome & Principe"], ["value", "Saudi Arabia"], ["value", "Senegal"], ["value", "Seychelles"], ["value", "Sierra Leone"], ["value", "Singapore"], ["value", "Slovakia"], ["value", "Slovenia"], ["value", "Solomon Islands"], ["value", "Somalia"], ["value", "South Africa"], ["value", "Spain"], ["value", "Sri Lanka"], ["value", "Sudan"], ["value", "Suriname"], ["value", "Swaziland"], ["value", "Sweden"], ["value", "Switzerland"], ["value", "Syria"], ["value", "Tahiti"], ["value", "Taiwan"], ["value", "Tajikistan"], ["value", "Tanzania"], ["value", "Thailand"], ["value", "Togo"], ["value", "Tokelau"], ["value", "Tonga"], ["value", "Trinidad & Tobago"], ["value", "Tunisia"], ["value", "Turkey"], ["value", "Turkmenistan"], ["value", "Turks & Caicos Is"], ["value", "Tuvalu"], ["value", "Uganda"], ["value", "United Kingdom"], ["value", "Ukraine"], ["value", "United Arab Erimates"], ["value", "United States of America"], ["value", "Uraguay"], ["value", "Uzbekistan"], ["value", "Vanuatu"], ["value", "Vatican City State"], ["value", "Venezuela"], ["value", "Vietnam"], ["value", "Virgin Islands (Brit)"], ["value", "Virgin Islands (USA)"], ["value", "Wake Island"], ["value", "Wallis & Futana Is"], ["value", "Yemen"], ["value", "Zaire"], ["value", "Zambia"], ["value", "Zimbabwe"], [3, "placeholder", "ngModel", "config", "ngModelChange"], [1, "col-12", "py-1", "row"], [1, "col-6"], [1, "input-group"], ["type", "number", "placeholder", "DPI", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "mm"], ["value", "cm"], ["value", "in"], ["value", "px"], ["value", "%"], [1, "form-check"], ["type", "checkbox", "id", "digital", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "digital", 1, "form-check-label"], ["type", "checkbox", "id", "printable", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "printable", 1, "form-check-label"], ["type", "color", "id", "favcolor", 3, "ngModel", "ngModelChange"], ["type", "radio", "id", "htop", "name", "isEB", 1, "form-radio-input", 3, "value", "ngModel", "ngModelChange"], ["for", "htop", 1, "form-check-label"], ["type", "radio", "id", "ebottom", "name", "isEB", 1, "form-radio-input", 3, "value", "ngModel", "ngModelChange"], ["for", "ebottom", 1, "form-check-label"], ["class", "input-group", 4, "ngIf"], ["for", "guidelinesbool"], ["id", "guidelinesbool", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "faqbool"], ["id", "faqbool", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "col-12", "px-2", "py-1", "flex-center", "d-flex", "flex-column"], ["class", "col-12 py-4 d-flex flex-row", 4, "ngFor", "ngForOf"], [1, "pt-2", "btn", "btn-success", 3, "click"], [1, "fa", "fa-plus"], [1, "col-12", "py-4", "d-flex", "flex-row"], ["type", "text", "placeholder", "Name", 1, "form-control", "col", 3, "ngModel", "ngModelChange"], [1, "d-flex", "flex-row"], ["placeholder", "Content", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash", "fa-2x"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_2_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CreateComponent_h2_7_Template, 2, 0, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CreateComponent_h2_8_Template, 4, 1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_12_listener($event) { return ctx.documentData.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_16_listener($event) { return ctx.documentData.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Afghanistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Albania");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Algeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "American Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Andorra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Angola");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Anguilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Antigua & Barbuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Argentina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Armenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Aruba");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Austria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Azerbaijan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Bahamas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Bahrain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Bangladesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Barbados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Belarus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Belgium");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Belize");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Benin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Bermuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Bhutan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Bolivia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Bonaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Bosnia & Herzegovina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Botswana");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " British Indian Ocean Ter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Brunei");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Bulgaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Burkina Faso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Burundi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Cambodia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Cameroon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Canary Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Cape Verde");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Cayman Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Central African Republic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Chad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Channel Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Christmas Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Cocos Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Colombia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Comoros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Congo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Cook Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Costa Rica");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Cote DIvoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Croatia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Cuba");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Curacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Cyprus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Czech Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Denmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Djibouti");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Dominica");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Dominican Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "East Timor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Ecuador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "El Salvador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Equatorial Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Eritrea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Estonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Ethiopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Falkland Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Faroe Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Fiji");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Finland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "French Guiana");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "French Polynesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "French Southern Ter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Gabon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Gambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Ghana");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Gibraltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Great Britain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Greenland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Grenada");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Guadeloupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Guam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "Guatemala");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Guyana");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Haiti");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Hawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Honduras");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Hong Kong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Hungary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Iran");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Iraq");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Ireland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Isle of Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Israel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Jamaica");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Jordan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Kazakhstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Kiribati");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Korea North");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Korea South");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "Kuwait");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Kyrgyzstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "Laos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Latvia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Lebanon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Lesotho");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Liberia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Libya");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Liechtenstein");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Lithuania");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Luxembourg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "Macau");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Macedonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "Madagascar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Malaysia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Malawi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Maldives");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, "Mali");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Malta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Marshall Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Martinique");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "Mauritania");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Mauritius");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "option", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Mayotte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "option", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Mexico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "option", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Midway Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](300, "Moldova");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302, "Monaco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Mongolia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "Montserrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "option", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Morocco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "option", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, "Mozambique");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "option", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Myanmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Nambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "option", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, "Nauru");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "option", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Netherland Antilles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "Netherlands (Holland, Europe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "option", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, "Nevis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "New Caledonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "New Zealand");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "Nicaragua");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "Niger");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "Nigeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "option", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "Niue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "option", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Norfolk Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "option", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "Norway");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "Oman");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344, "Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "Palau Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "option", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, "Palestine");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "option", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](350, "Panama");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "option", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "Papua New Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "option", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](354, "Paraguay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "option", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, "Peru");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "option", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, "Philippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "option", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "Pitcairn Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "option", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "option", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, "Portugal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "option", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, "Puerto Rico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "option", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, "Qatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](370, "Republic of Montenegro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "option", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Republic of Serbia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "option", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "Reunion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "option", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "Romania");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "option", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](378, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "option", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Rwanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "option", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "St Barthelemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "option", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "St Eustatius");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "option", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](386, "St Helena");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "option", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, "St Kitts-Nevis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "option", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "St Lucia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "option", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "St Maarten");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "option", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, "St Pierre & Miquelon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "option", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396, " St Vincent & Grenadines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Saipan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](400, "Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, "Samoa American");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "San Marino");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "option", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "Sao Tome & Principe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "option", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408, "Saudi Arabia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "option", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](410, "Senegal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "option", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "Seychelles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "option", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, "Sierra Leone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "option", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "Singapore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "option", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Slovakia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "option", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, "Slovenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "option", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](422, "Solomon Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "option", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](424, "Somalia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](426, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "option", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "option", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Sri Lanka");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "option", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, "Sudan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "option", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, "Suriname");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](435, "option", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, "Swaziland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "option", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "option", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "option", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "Syria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "option", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](444, "Tahiti");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "option", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](446, "Taiwan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "option", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, "Tajikistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "option", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](450, "Tanzania");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "option", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](452, "Thailand");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "option", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, "Togo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "option", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](456, "Tokelau");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "option", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](458, "Tonga");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "option", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460, "Trinidad & Tobago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "option", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](462, "Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "option", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](464, "Turkey");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "option", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](466, "Turkmenistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "option", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "Turks & Caicos Is");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "option", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](470, "Tuvalu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "option", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, "Uganda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](473, "option", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](474, "United Kingdom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](475, "option", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](476, "Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "option", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](478, "United Arab Emirates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "option", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, " United States of America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "option", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](482, "Uruguay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](483, "option", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](484, "Uzbekistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "option", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](486, "Vanuatu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](487, "option", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](488, "Vatican City State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "option", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](490, "Venezuela");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "option", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](492, "Vietnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "option", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Virgin Islands (Brit)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "option", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](496, "Virgin Islands (USA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "option", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](498, "Wake Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](499, "option", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](500, "Wallis & Futana Is");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](501, "option", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](502, "Yemen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "option", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](504, "Zaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "option", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](506, "Zambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "option", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](508, "Zimbabwe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](509, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](511, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](512, "Before Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "angular-editor", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_513_listener($event) { return ctx.documentData.html1 = $event; })("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_513_listener() { return ctx.onChangeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](514, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](515, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "div", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](518, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](519, "DPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](520, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](521, "input", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_521_listener($event) { return ctx.documentData.requirements.dpi = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](522, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](523, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](524, "Photo Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](525, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "input", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_526_listener($event) { return ctx.documentData.requirements.width.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](527, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](528, "select", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_528_listener($event) { return ctx.documentData.requirements.width.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "option", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](530, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](531, "option", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](532, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](533, "option", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](534, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "option", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](536, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](537, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](539, "Photo Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "input", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_541_listener($event) { return ctx.documentData.requirements.height.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](542, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "select", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_543_listener($event) { return ctx.documentData.requirements.height.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](544, "option", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](545, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "option", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](547, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](548, "option", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](549, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](550, "option", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](551, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](552, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](553, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](554, "Head Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](556, "input", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_556_listener($event) { return ctx.documentData.requirements.headHeight.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](557, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](558, "select", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_558_listener($event) { return ctx.documentData.requirements.headHeight.unit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](559, "option", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](560, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "option", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](562, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "option", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](564, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](565, "option", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](566, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](567, "option", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](568, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](569, "div", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](570, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](571, "input", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_571_listener($event) { return ctx.documentData.requirements.isOnline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](572, "label", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](573, "Online Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](574, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](575, "input", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_575_listener($event) { return ctx.documentData.requirements.isPrintable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](576, "label", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](577, "Printable Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "input", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_578_listener($event) { return ctx.documentData.requirements.bgColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](579, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](580, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](581, "input", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_581_listener($event) { return ctx.changeSpecialReq($event); })("ngModelChange", function CreateComponent_Template_input_ngModelChange_581_listener($event) { return ctx.settings.isEB = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](582, "label", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](583, "Hair to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](584, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "input", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_585_listener($event) { return ctx.changeSpecialReq($event); })("ngModelChange", function CreateComponent_Template_input_ngModelChange_585_listener($event) { return ctx.settings.isEB = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](586, "label", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](587, "Eyes to bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](588, CreateComponent_div_588_Template, 17, 2, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](589, CreateComponent_div_589_Template, 17, 2, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](590, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](592, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](593, "After Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "angular-editor", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_594_listener($event) { return ctx.documentData.html2 = $event; })("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_594_listener() { return ctx.onChangeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](595, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](596, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](597, "label", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](598, "Guidelines Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](599, "input", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_599_listener($event) { return ctx.settings.isGudelines = $event; })("ngModelChange", function CreateComponent_Template_input_ngModelChange_599_listener($event) { return ctx.onChangeGuidelines($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](600, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "angular-editor", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_601_listener($event) { return ctx.documentData.guidelines = $event; })("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_601_listener() { return ctx.onChangeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](602, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](603, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](604, "label", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](605, "FAQ Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](606, "input", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_606_listener($event) { return ctx.settings.isFaq = $event; })("ngModelChange", function CreateComponent_Template_input_ngModelChange_606_listener($event) { return ctx.onChangeFaq($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](607, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "angular-editor", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_608_listener($event) { return ctx.documentData.faq = $event; })("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_608_listener() { return ctx.onChangeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](609, "div", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](610, CreateComponent_div_610_Template, 6, 2, "div", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](611, "button", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_611_listener() { return ctx.addMeta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](612, "i", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](613, " Add MetaTag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](497);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "Content block before requirements")("ngModel", ctx.documentData.html1)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.dpi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.width.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.width.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.height.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.height.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.headHeight.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.headHeight.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.isPrintable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.documentData.requirements.bgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", false)("ngModel", ctx.settings.isEB);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", true)("ngModel", ctx.settings.isEB);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.documentData.requirements.hairToTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.documentData.requirements.eyesToBottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "Content block after requirements")("ngModel", ctx.documentData.html2)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.settings.isGudelines);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("force-hide", !ctx.settings.isGudelines);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "Content of Guidelines Page")("ngModel", ctx.documentData.guidelines)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.settings.isFaq);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("force-hide", !ctx.settings.isFaq);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "Content of FAQ Page")("ngModel", ctx.documentData.faq)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.documentData.meta_data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".action-bar[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  position: fixed;\r\n  top: 0;\r\n  width: calc(100% - 60px);\r\n  left: 60px;\r\n  text-align: right !important;\r\n}\r\n\r\n\r\n.force-hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sd0JBQXdCO0VBQ3hCLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7OztBQUdBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1iYXIge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICBsZWZ0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZm9yY2UtaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6906:
/*!*********************************************************************!*\
  !*** ./src/app/components/Control/Documents/list/list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-management.service */ 3931);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pipes/search.pipe */ 2080);









function ListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListComponent_div_2_tr_26_h5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Published");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListComponent_div_2_tr_26_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListComponent_div_2_tr_26_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_div_2_tr_26_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const document_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.setDocumentAsDefault(document_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Set as default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListComponent_div_2_tr_26_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ListComponent_div_2_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ListComponent_div_2_tr_26_h5_8_Template, 3, 0, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ListComponent_div_2_tr_26_h5_9_Template, 3, 0, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_div_2_tr_26_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const document_r4 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.deleteDialogAlert(document_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ListComponent_div_2_tr_26_a_18_Template, 3, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ListComponent_div_2_tr_26_a_19_Template, 3, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", i_r5 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](document_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](document_r4.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r4.status === "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r4.status === "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 9, document_r4.updatedAt, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/document/edit/", document_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r4.id != ctx_r3.settings[ctx_r3.settingsIndexes.defaultPage].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r4.id == ctx_r3.settings[ctx_r3.settingsIndexes.defaultPage].value);
} }
function ListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "List All Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add New Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.searchWord = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Last Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ListComponent_div_2_tr_26_Template, 20, 12, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tfoot", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Last Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.searchWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 2, ctx_r2.landingPagesData, ctx_r2.searchWord));
} }
class ListComponent {
    constructor(api, dataManagementService) {
        this.api = api;
        this.dataManagementService = dataManagementService;
        this.landingPagesData = [];
        this.searchWord = "";
        this.settings = [];
        this.settingsIndexes = { primaryColor: null, defaultPage: null };
        this.ListErrorHandler = this.ListErrorHandler.bind(this);
        this.setAsDefaultErrorHandler = this.setAsDefaultErrorHandler.bind(this);
        this.deleteErrorHandler = this.deleteErrorHandler.bind(this);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllSettings();
            yield this.getAllLandingPages();
        });
    }
    getAllSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.settings = yield this.api.getAllSettingsAdmin().toPromise();
            this.settingsIndexes.defaultPage = this.settings.findIndex(a => a.key === 'defaultPageId');
            console.log(this.settingsIndexes);
        });
    }
    setDocumentAsDefault(documentId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: "You want to set this document as default!",
            icon: 'info',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn-info',
                cancelButton: 'btn-secondary'
            },
            confirmButtonText: 'Yes, do it!'
        }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                yield this.api.updateSettingAdmin({ key: "defaultPageId", value: documentId.toString() }, this.setAsDefaultErrorHandler).toPromise();
                yield this.getAllLandingPages();
                yield this.getAllSettings();
                yield this.dataManagementService.getAllSettings();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Done!',
                    text: 'Your document has been set as default.',
                    icon: 'success',
                    customClass: {
                        confirmButton: 'btn-primary',
                        cancelButton: 'btn-primary'
                    },
                });
            }
        }));
    }
    deleteDialogAlert(documentId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn-danger',
                cancelButton: 'btn-secondary'
            },
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                yield this.api.deleteLandingPageWithIdAdmin(documentId, this.deleteErrorHandler).toPromise();
                yield this.getAllLandingPages();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    customClass: {
                        confirmButton: 'btn-primary',
                        cancelButton: 'btn-primary'
                    },
                });
            }
        }));
    }
    deleteErrorHandler(error) {
        console.log(error.error);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'You Cannot Delete The Default!',
            text: error.error.message,
            icon: 'warning',
            customClass: {
                confirmButton: 'btn-primary',
                cancelButton: 'btn-primary'
            },
        });
    }
    setAsDefaultErrorHandler() {
    }
    ListErrorHandler() {
    }
    getAllLandingPages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.dataManagementService.startLoadingData();
            this.landingPagesData = yield this.api.getAllLandingPagesAdmin(this.ListErrorHandler).toPromise();
            this.dataManagementService.stopLoadingData();
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_2__.DataManagementService)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 3, vars: 2, consts: [["loading", ""], ["class", "container-fluid px-5 mt-5", 4, "ngIf", "ngIfElse"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "container-fluid", "px-5", "mt-5"], [1, "col-12", "d-flex", "flex-row", "justify-content-between"], ["routerLink", "/admin/document/create", 1, "btn", "btn-primary"], [1, "fa", "fa-plus"], [1, "table-responsive"], ["placeholder", "Search in documents by (Title, Country or Status)", 1, "p-2", "my-2", "form-control", 3, "ngModel", "ngModelChange"], ["id", "table_container", 1, "table", "table-bordered"], [1, "bg-light"], [4, "ngFor", "ngForOf"], [1, "d-none"], ["class", "m-0 text-center", 4, "ngIf"], [1, "d-flex", "flex-row"], [1, "btn", "btn-primary", 2, "margin-right", "10px", 3, "routerLink"], [1, "fa", "fa-edit"], [1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], [1, "fa", "fa-trash"], ["class", "btn btn-outline-success", 3, "click", 4, "ngIf"], ["style", "pointer-events: none", "class", "btn btn-success pulse", 4, "ngIf"], [1, "m-0", "text-center"], [1, "badge", "bg-light-success"], [1, "badge", "bg-light-warning"], [1, "btn", "btn-outline-success", 3, "click"], [1, "fa", "fa-check"], [1, "btn", "btn-success", "pulse", 2, "pointer-events", "none"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ListComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ListComponent_div_2_Template, 42, 5, "div", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.landingPagesData == null ? null : ctx.landingPagesData.length) !== 0)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: middle !important;\r\n\r\n}\r\n\r\n.pulse[_ngcontent-%COMP%] {\r\n  border: none;\r\n  animation: pulse-animation 0.5s infinite;\r\n}\r\n\r\n@keyframes pulse-animation {\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(8, 248, 0,0.8);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 5px rgba(8, 248, 0,0.2);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQzs7QUFFbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztBQUNGIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnB1bHNlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS1hbmltYXRpb24gMC41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDgsIDI0OCwgMCwwLjgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDgsIDI0OCwgMCwwLjIpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3393:
/*!**************************************************************************!*\
  !*** ./src/app/components/Control/System/settings/settings.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-management.service */ 3931);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-select-ex */ 9457);









function SettingsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Primary Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.settings[ctx_r2.settingsIndexes.primaryColor].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.settings[ctx_r0.settingsIndexes.primaryColor].value);
} }
function SettingsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Default Document:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ngx-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_11_Template_ngx_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.settings[ctx_r4.settingsIndexes.defaultPage].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("allowClear", true)("items", ctx_r1.landingPagesData)("ngModel", ctx_r1.settings[ctx_r1.settingsIndexes.defaultPage].value)("defaultValue", +ctx_r1.settings[ctx_r1.settingsIndexes.defaultPage].value)("optionValueField", "id")("optionTextField", "title");
} }
class SettingsComponent {
    constructor(api, aroute, dataManagementService) {
        this.api = api;
        this.aroute = aroute;
        this.dataManagementService = dataManagementService;
        this.settings = [];
        this.landingPagesData = [];
        this.settingsIndexes = { primaryColor: null, defaultPage: null };
        this.ListErrorHandler = this.ListErrorHandler.bind(this);
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllSettings();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllLandingPages();
        });
    }
    doNgxDefault() {
        return +this.settings[this.settingsIndexes.defaultPage].value;
    }
    getAllSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.settings = yield this.api.getAllSettingsAdmin().toPromise();
            this.settingsIndexes.primaryColor = this.settings.findIndex(a => a.key === 'primaryColor');
            this.settingsIndexes.defaultPage = this.settings.findIndex(a => a.key === 'defaultPageId');
            console.log(this.settingsIndexes);
        });
    }
    ListErrorHandler() {
    }
    getAllLandingPages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.dataManagementService.startLoadingData();
            this.landingPagesData = yield this.api.getAllLandingPagesAdmin(this.ListErrorHandler).toPromise();
            this.dataManagementService.stopLoadingData();
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.updateBulkSettingAdmin(this.settings).toPromise();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Done!',
                text: 'Your Settings has been saved.',
                icon: 'success',
                customClass: {
                    confirmButton: 'btn-primary',
                    cancelButton: 'btn-primary'
                },
            });
            yield this.getAllSettings();
            console.log(this.settings);
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_2__.DataManagementService)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 12, vars: 2, consts: [[1, "container-fluid", "px-5", "mt-5"], [1, "action-bar", "p-4", 2, "height", "60px"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "flex-center"], [1, "col-8"], [1, "col-12"], ["class", "col-12 d-flex align-items-center py-1", 4, "ngIf"], [1, "col-12", "d-flex", "align-items-center", "py-1"], ["type", "color", "id", "favcolor", 1, "m-2", 3, "ngModel", "ngModelChange"], ["placeholder", "No document selected", 3, "allowClear", "items", "ngModel", "defaultValue", "optionValueField", "optionTextField", "ngModelChange"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_2_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Platform Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SettingsComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SettingsComponent_div_11_Template, 4, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.settingsIndexes.primaryColor != -1 && ctx.settingsIndexes.primaryColor != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.settingsIndexes.defaultPage != -1 && ctx.settingsIndexes.defaultPage != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__.NgxSelectComponent], styles: [".action-bar[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  position: fixed;\r\n  top: 0;\r\n  width: calc(100% - 60px);\r\n  left: 60px;\r\n  text-align: right !important;\r\n}\r\n\r\n\r\n.force-hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLDRCQUE0QjtBQUM5Qjs7O0FBR0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tYmFyIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgbGVmdDogNjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmZvcmNlLWhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8931:
/*!*************************************************************************!*\
  !*** ./src/app/components/guidelines-page/guidelines-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidelinesPageComponent": () => (/* binding */ GuidelinesPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_data_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data-management.service */ 3931);
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rest-api.service */ 4714);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/header/header.component */ 9331);
/* harmony import */ var _partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/photo-button/photo-button.component */ 5314);









function GuidelinesPageComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { fill: a0 }; };
function GuidelinesPageComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@scaleAnimation.done", function GuidelinesPageComponent_div_2_div_2_Template_div_animation_scaleAnimation_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.animationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "circle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scaleAnimation", !!ctx_r3.dataManagementService.landingAnimation ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r3.dataManagementService.settings.primaryColor));
} }
function GuidelinesPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GuidelinesPageComponent_div_2_div_2_Template, 7, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " .svg-small-circle { fill: rgba(255, 255, 255, 0.507); } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "circle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "circle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " .svg-big-line-circle { fill-opacity: 0; stroke: #000; stroke-width: 2px; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Prepare a perfect passport photos with guaranteed acceptance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "app-photo-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onStart", function GuidelinesPageComponent_div_2_Template_app_photo_button_onStart_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.startProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "footer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Copyright \u00A9 Passport AI 2021 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("to-the-top", !!ctx_r2.dataManagementService.landingAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataManagementService.landingAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx_r2.dataManagementService.settings.primaryColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.dataManagementService.landingPageData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("primaryColor", ctx_r2.dataManagementService.settings.primaryColor)("documentID", ctx_r2.dataManagementService.landingPageData.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.dataManagementService.landingPageData.guidelines, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class GuidelinesPageComponent {
    constructor(router, aroute, dataManagementService, api) {
        this.router = router;
        this.aroute = aroute;
        this.dataManagementService = dataManagementService;
        this.api = api;
        this.features = [];
        this.loader = false;
        this.dataManagementService.landingAnimation = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.landingId = +this.aroute.snapshot.paramMap.get('slug');
            if (!!this.landingId) {
                // this.dataManagementService.landingPageData =
                yield this.dataManagementService.viewLandingPage(this.landingId);
            }
            else {
                yield this.dataManagementService.getAllLandingPages();
                this.router.navigate(['/']);
            }
            this.seedFeatures();
        });
    }
    animationDone(event) {
        setTimeout(() => {
            this.navigateToResultPage();
        }, 500);
    }
    startProcess() {
        this.dataManagementService.landingAnimation = true;
    }
    navigateToResultPage() {
        console.log('Started');
        this.router.navigate(['result']);
    }
    seedFeatures() {
        this.features = [
            {
                title: 'Convenience',
                description: 'Digital photo within a few seconds or printouts shipping to your home',
                icon: 'assets/images/icons/confidence.png'
            },
            {
                title: 'Professional service',
                description: 'Over 1,000,000 people have used our services within 7 years.',
                icon: 'assets/images/icons/camera.png'
            },
            {
                title: 'Guarantee of acceptance',
                description: 'If your photo is rejected by authorities, we will refund you twice the price you paid',
                icon: 'assets/images/icons/money-back-guarantee.png'
            },
            {
                title: 'Satisfaction guarantee',
                description: 'Take as many photo shots as you want - you pay only when you are satisfied',
                icon: 'assets/images/icons/satisfaction.png'
            },
        ];
    }
}
GuidelinesPageComponent.ɵfac = function GuidelinesPageComponent_Factory(t) { return new (t || GuidelinesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_management_service__WEBPACK_IMPORTED_MODULE_0__.DataManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService)); };
GuidelinesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GuidelinesPageComponent, selectors: [["app-guidelines-page"]], decls: 3, vars: 2, consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "small-circle-anim"], ["class", "small-circle-anim", 4, "ngIf"], [1, "py-5", "pb-0", "hero-section"], [1, "bg-canvas"], [1, "small-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 450 450"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "Layer_2-2", "data-name", "Layer 2"], ["cx", "225", "cy", "225", "r", "225", 1, "svg-small-circle"], [1, "big-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 767 767"], ["cx", "383.5", "cy", "383.5", "r", "383.5", 1, "svg-dark-circle", 3, "ngStyle"], [1, "big-circle-line"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 852.25 852.25"], ["id", "ellipse-1", "cx", "426.13", "cy", "426.13", "r", "425.12", 1, "svg-big-line-circle"], [1, "container", "px-5", 2, "min-height", "38em"], [1, "row", "gx-5", "justify-content-between", "py-5"], [1, "col-lg-6"], [1, "text-left", "my-5"], [1, "display-5", "fw-bolder", "text-dark", "mb-2"], [1, "lead", "text-dark-50", "mb-4"], [1, "d-grid", "gap-3", "d-sm-flex"], [3, "primaryColor", "documentID", "onStart"], ["src", "assets/images/passport.png", 1, "w-100"], ["id", "features"], [1, "container", "px-5", "my-5", "w-75"], [3, "innerHTML"], [1, "py-5", "bg-dark"], [1, "container", "px-5"], [1, "m-0", "text-center", "text-white"]], template: function GuidelinesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GuidelinesPageComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GuidelinesPageComponent_div_2_Template, 48, 10, "div", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.dataManagementService.landingPageData)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_3__.PhotoButtonComponent], styles: [".hero-section[_ngcontent-%COMP%] {\r\n  \r\n  background-size: cover;\r\n  position: relative;\r\n\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  \r\n  width: 100vw;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-circle-anim[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  pointer-events: auto;\r\n}\r\n\r\n.opinion-filled-star[_ngcontent-%COMP%] {\r\n  color: #fde16d;\r\n  -webkit-text-stroke: 1px #e2c54d;\r\n}\r\n\r\n.color-cirlce[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 20px;\r\n  border-radius: 500px;\r\n  border: 1px solid #afafaf;\r\n}\r\n\r\n.opinion-star[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.to-the-top[_ngcontent-%COMP%] {\r\n  z-index: 9999;\r\n}\r\n\r\n.small-circle-anim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 8%;\r\n  top: -20%;\r\n  width: 25%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .small-circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 8%;\r\n  top: -30%;\r\n  z-index: 2;\r\n  width: 25%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .big-circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0%;\r\n  top: 0%;\r\n  transform: translate(50%,-50%);\r\n  z-index: 1;\r\n  width: 92%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .big-circle-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0%;\r\n  top: 0%;\r\n  transform: translate(50%,-50%);\r\n  z-index: 1;\r\n  width: 98%;\r\n}\r\n\r\n.circle-scale-animation[_ngcontent-%COMP%] {\r\n  transition: all 1s ease-in-out;\r\n  transform: scale(10) !important;\r\n  z-index: 999 !important;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWRlbGluZXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQTREO0VBQzVELHNCQUFzQjtFQUN0QixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJndWlkZWxpbmVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXNlY3Rpb24ge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5iZy1jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0IzRkZCRDsgKi9cclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbWFsbC1jaXJjbGUtYW5pbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi5vcGluaW9uLWZpbGxlZC1zdGFyIHtcclxuICBjb2xvcjogI2ZkZTE2ZDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggI2UyYzU0ZDtcclxufVxyXG5cclxuLmNvbG9yLWNpcmxjZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XHJcbn1cclxuXHJcbi5vcGluaW9uLXN0YXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnRvLXRoZS10b3Age1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLnNtYWxsLWNpcmNsZS1hbmltIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4JTtcclxuICB0b3A6IC0yMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmJnLWNhbnZhcyAuc21hbGwtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDglO1xyXG4gIHRvcDogLTMwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5iZy1jYW52YXMgLmJpZy1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMCU7XHJcbiAgdG9wOiAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4uYmctY2FudmFzIC5iaWctY2lyY2xlLWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMCU7XHJcbiAgdG9wOiAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogOTglO1xyXG59XHJcblxyXG4uY2lyY2xlLXNjYWxlLWFuaW1hdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMTApICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('1000ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 3783:
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services_data_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data-management.service */ 3931);
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rest-api.service */ 4714);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/header/header.component */ 9331);
/* harmony import */ var _partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/photo-button/photo-button.component */ 5314);









function LandingPageComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { fill: a0 }; };
function LandingPageComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@scaleAnimation.done", function LandingPageComponent_div_2_div_2_Template_div_animation_scaleAnimation_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.animationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "circle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scaleAnimation", !!ctx_r3.dataManagementService.landingAnimation ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r3.dataManagementService.settings.primaryColor));
} }
function LandingPageComponent_div_2_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", feature_r9.icon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", feature_r9.description, " ");
} }
function LandingPageComponent_div_2_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "- Client Name, Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LandingPageComponent_div_2_section_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "/guidelines/", ctx_r6.dataManagementService.landingPageData.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return [1, 2, 3]; };
const _c2 = function (a0) { return { "background-color": a0 }; };
function LandingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingPageComponent_div_2_div_2_Template, 7, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " .svg-small-circle { fill: rgba(255, 255, 255, 0.507); } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "circle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "circle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " .svg-big-line-circle { fill-opacity: 0; stroke: #000; stroke-width: 2px; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Prepare a perfect passport photos with guaranteed acceptance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "app-photo-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onStart", function LandingPageComponent_div_2_Template_app_photo_button_onStart_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.startProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "What do you get?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " You save time and money - take a document photo conveniently without leaving home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, LandingPageComponent_div_2_div_48_Template, 7, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Customer testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Our customers love working with us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, LandingPageComponent_div_2_div_58_Template, 21, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "section", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Is it suitable for online submission?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Resolution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Is it printable?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Image definition parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Background Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](125, LandingPageComponent_div_2_section_125_Template, 3, 1, "section", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "footer", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, " Copyright \u00A9 Passport AI 2021 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("to-the-top", !!ctx_r2.dataManagementService.landingAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataManagementService.landingAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c0, ctx_r2.dataManagementService.settings.primaryColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.dataManagementService.landingPageData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("primaryColor", ctx_r2.dataManagementService.settings.primaryColor)("documentID", ctx_r2.dataManagementService.landingPageData.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.dataManagementService.landingPageData.html1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.dataManagementService.landingPageData.title, " size photo - Digital photo requirements? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Width: ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.width == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.width.value == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.width.value.toString(), " ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.width == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.width.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Height: ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.height == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.height.value == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.height.value.toString(), " ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.height == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.height.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", !!(ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.isOnline) ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.dpi, " dpi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", !!(ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.isPrintable) ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Head height: ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.headHeight == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.headHeight.value == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.headHeight.value.toString(), " ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.headHeight.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Top of the Photo to Top of the Hair: ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.hairToTop == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.hairToTop.value == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.hairToTop.value.toString(), " ", ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.hairToTop == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.hairToTop.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c2, ctx_r2.dataManagementService.landingPageData.requirements == null ? null : ctx_r2.dataManagementService.landingPageData.requirements.bgColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.dataManagementService.landingPageData.detailed_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.dataManagementService.landingPageData.html2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r2.dataManagementService.landingPageData.guidelines);
} }
class LandingPageComponent {
    constructor(router, aroute, dataManagementService, api) {
        this.router = router;
        this.aroute = aroute;
        this.dataManagementService = dataManagementService;
        this.api = api;
        this.features = [];
        this.loader = false;
        this.dataManagementService.landingAnimation = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.dataManagementService.getAllSettings();
            this.landingId = +this.aroute.snapshot.paramMap.get('slug');
            if (!!this.landingId) {
                yield this.dataManagementService.viewLandingPage(+this.landingId);
            }
            else {
                if (this.dataManagementService.settings.defaultPageId != null) {
                    // this.dataManagementService.landingPageData =
                    yield this.dataManagementService.viewLandingPage(+this.dataManagementService.settings.defaultPageId);
                }
                else {
                    yield this.dataManagementService.getAllLandingPages();
                    this.router.navigate(['/']);
                }
            }
            this.seedFeatures();
        });
    }
    animationDone(event) {
        setTimeout(() => {
            this.navigateToResultPage();
        }, 500);
    }
    startProcess() {
        this.dataManagementService.landingAnimation = true;
    }
    navigateToResultPage() {
        console.log('Started');
        this.router.navigate(['result']);
    }
    seedFeatures() {
        this.features = [
            {
                title: 'Convenience',
                description: 'Digital photo within a few seconds or printouts shipping to your home',
                icon: 'assets/images/icons/confidence.png'
            },
            {
                title: 'Professional service',
                description: 'Over 1,000,000 people have used our services within 7 years.',
                icon: 'assets/images/icons/camera.png'
            },
            {
                title: 'Guarantee of acceptance',
                description: 'If your photo is rejected by authorities, we will refund you twice the price you paid',
                icon: 'assets/images/icons/money-back-guarantee.png'
            },
            {
                title: 'Satisfaction guarantee',
                description: 'Take as many photo shots as you want - you pay only when you are satisfied',
                icon: 'assets/images/icons/satisfaction.png'
            },
        ];
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_management_service__WEBPACK_IMPORTED_MODULE_0__.DataManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService)); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 3, vars: 2, consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "small-circle-anim"], ["class", "small-circle-anim", 4, "ngIf"], [1, "py-5", "pb-0", "hero-section"], [1, "bg-canvas"], [1, "small-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 450 450"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "Layer_2-2", "data-name", "Layer 2"], ["cx", "225", "cy", "225", "r", "225", 1, "svg-small-circle"], [1, "big-circle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 767 767"], ["cx", "383.5", "cy", "383.5", "r", "383.5", 1, "svg-dark-circle", 3, "ngStyle"], [1, "big-circle-line"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 852.25 852.25"], ["id", "ellipse-1", "cx", "426.13", "cy", "426.13", "r", "425.12", 1, "svg-big-line-circle"], [1, "container", "px-5", 2, "min-height", "38em"], [1, "row", "gx-5", "justify-content-between", "py-5"], [1, "col-lg-6"], [1, "text-left", "my-5"], [1, "display-5", "fw-bolder", "text-dark", "mb-2"], [1, "lead", "text-dark-50", "mb-4"], [1, "d-grid", "gap-3", "d-sm-flex"], [3, "primaryColor", "documentID", "onStart"], ["src", "assets/images/passport.png", 1, "w-100"], ["id", "features", 1, "py-5", "border-bottom"], [1, "container", "px-5", "my-5", "text-center"], [1, "row", "gx-5"], ["class", "\n            col-lg-3\n            mb-5 mb-lg-0\n            mt-5\n            text-center\n            d-flex\n            flex-column\n            align-items-center\n          ", 4, "ngFor", "ngForOf"], [1, "bg-light", "py-5", "border-bottom"], [1, "container", "px-5", "my-5", "px-5"], [1, "text-center", "mb-5"], [1, "fw-bolder"], [1, "lead", "mb-0"], [1, "row", "gx-5", "justify-content-center"], [1, "d-flex", "flex-lg-row", "flex-column", 2, "gap", "12px"], ["class", "card col-4", 4, "ngFor", "ngForOf"], ["id", "features"], [1, "container", "px-5", "my-5"], [3, "innerHTML"], [1, "py-5", "pb-2"], [1, "text-left", "mb-5"], [1, "d-flex", "justify-content-between", "gx-5"], [1, "col-lg-8", "row", "align-content-md-start"], [1, "col-6", "d-flex", "flex-row", "mb-4"], [2, "width", "48px", "border-radius", "500px", "margin-right", "0.8em"], ["src", "assets/images/icons/specs/size.png", 2, "width", "48px"], [1, "col-6", "d-flex", "flex-column"], [1, "m-0"], ["src", "assets/images/icons/specs/online.png", 2, "width", "48px"], ["src", "assets/images/icons/specs/resolution.png", 2, "width", "48px"], ["src", "assets/images/icons/specs/printable.png", 2, "width", "48px"], ["src", "assets/images/icons/specs/parameters.png", 2, "width", "48px"], ["src", "assets/images/icons/specs/backgroundcolor.png", 2, "width", "48px"], [1, "color-cirlce", 3, "ngStyle"], [1, "col-lg-4"], ["alt", "Passport Photos Maker - best photo editor", "loading", "lazy", 1, "img-fluid", "img-space", 2, "width", "350px", 3, "src"], ["id", "features", "class", "text-center p-5", 4, "ngIf"], [1, "py-5", "bg-dark"], [1, "container", "px-5"], [1, "m-0", "text-center", "text-white"], [1, "col-lg-3", "mb-5", "mb-lg-0", "mt-5", "text-center", "d-flex", "flex-column", "align-items-center"], [1, "feature", "text-white", "mb-3"], ["alt", "", 1, "img-fluid", "p-2", 2, "width", "85px", 3, "src"], [1, "h5", "fw-bolder"], [1, "card", "col-4"], [1, "card-body", "p-4"], [1, "d-flex"], [1, "flex-shrink-0"], [1, "bi", "bi-chat-right-quote-fill", "text-primary", "fs-1"], [1, "ms-4"], [1, "mb-1"], [1, "small", "text-muted"], [1, "opinion-star", "opinion-filled-star"], ["id", "features", 1, "text-center", "p-5"], [1, "btn", "btn-lg", "btn-outline-dark", 3, "href"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LandingPageComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingPageComponent_div_2_Template, 130, 31, "div", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.dataManagementService.landingPageData)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _partials_photo_button_photo_button_component__WEBPACK_IMPORTED_MODULE_3__.PhotoButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".hero-section[_ngcontent-%COMP%] {\r\n  \r\n  background-size: cover;\r\n  position: relative;\r\n\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  \r\n  width: 100vw;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-circle-anim[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  pointer-events: auto;\r\n}\r\n\r\n.opinion-filled-star[_ngcontent-%COMP%] {\r\n  color: #fde16d;\r\n  -webkit-text-stroke: 1px #e2c54d;\r\n}\r\n\r\n.color-cirlce[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 20px;\r\n  border-radius: 500px;\r\n  border: 1px solid #afafaf;\r\n}\r\n\r\n.opinion-star[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.to-the-top[_ngcontent-%COMP%] {\r\n  z-index: 9999;\r\n}\r\n\r\n.small-circle-anim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 8%;\r\n  top: -20%;\r\n  width: 25%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .small-circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 8%;\r\n  top: -30%;\r\n  z-index: 2;\r\n  width: 25%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .big-circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0%;\r\n  top: 0%;\r\n  transform: translate(50%,-50%);\r\n  z-index: 1;\r\n  width: 92%;\r\n}\r\n\r\n.bg-canvas[_ngcontent-%COMP%]   .big-circle-line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0%;\r\n  top: 0%;\r\n  transform: translate(50%,-50%);\r\n  z-index: 1;\r\n  width: 98%;\r\n}\r\n\r\n.circle-scale-animation[_ngcontent-%COMP%] {\r\n  transition: all 1s ease-in-out;\r\n  transform: scale(10) !important;\r\n  z-index: 999 !important;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQTREO0VBQzVELHNCQUFzQjtFQUN0QixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLXNlY3Rpb24ge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5iZy1jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0IzRkZCRDsgKi9cclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbWFsbC1jaXJjbGUtYW5pbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLm9waW5pb24tZmlsbGVkLXN0YXIge1xyXG4gIGNvbG9yOiAjZmRlMTZkO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjZTJjNTRkO1xyXG59XHJcblxyXG4uY29sb3ItY2lybGNlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcclxufVxyXG5cclxuLm9waW5pb24tc3RhciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udG8tdGhlLXRvcCB7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG4uc21hbGwtY2lyY2xlLWFuaW0gaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDglO1xyXG4gIHRvcDogLTIwJTtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uYmctY2FudmFzIC5zbWFsbC1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogOCU7XHJcbiAgdG9wOiAtMzAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmJnLWNhbnZhcyAuYmlnLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5iZy1jYW52YXMgLmJpZy1jaXJjbGUtbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi5jaXJjbGUtc2NhbGUtYW5pbWF0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMCkgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlYXR1cmUge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('1000ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(10)', opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 9331:
/*!****************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data-management.service */ 3931);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/document/", item_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
} }
class HeaderComponent {
    constructor(dataManagementService) {
        this.dataManagementService = dataManagementService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.dataManagementService.getAllLandingPagesList();
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_management_service__WEBPACK_IMPORTED_MODULE_0__.DataManagementService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 1, consts: [[1, "navbar", "navbar-light", "navbar-expand-lg"], [1, "container-fluid", "px-0"], ["href", "#!", 1, "navbar-brand", "logo"], ["src", "assets/images/logo.png"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", 2, "box-shadow", "none"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["class", "fake-url", "ngbDropdownItem", "", 3, "href", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "fake-url", 3, "href"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Popular documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataManagementService.landingPageList);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem], styles: [".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 290px;\r\n}\r\n\r\n.fake-url[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAyOTBweDtcclxufVxyXG5cclxuLmZha2UtdXJsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5314:
/*!****************************************************************************!*\
  !*** ./src/app/components/partials/photo-button/photo-button.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoButtonComponent": () => (/* binding */ PhotoButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-management.service */ 3931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








const _c0 = function (a0) { return { "background-color": a0 }; };
class PhotoButtonComponent {
    // file = new HTMLCanvasElement();
    constructor(formBuilder, api, dataManagementService, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.dataManagementService = dataManagementService;
        this.router = router;
        this.formData = new FormData();
        this.reader = new FileReader();
        this.onStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.primaryColor = '#21ca37';
    }
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            image: ['']
        });
    }
    resetData() {
        this.formData.delete('image');
        this.dataManagementService.imgURL = '';
        this.dataManagementService.processingResponse = { details: '', image: '' };
        this.uploadForm.get('image').setValue('');
    }
    submitImage(docID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.dataManagementService.removeBackground(this.formData, docID);
        });
    }
    onStartEmit() {
        this.onStart.emit();
    }
    onDoneEmit() {
        this.onDone.emit();
    }
    onFileSelect(event) {
        this.resetData();
        this.onStartEmit();
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.formData.append("image", file);
            this.reader.readAsDataURL(file);
            this.reader.onload = (_event) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.dataManagementService.imgURL = this.reader.result;
                yield this.submitImage(this.documentID);
                this.onDoneEmit();
            });
        }
    }
}
PhotoButtonComponent.ɵfac = function PhotoButtonComponent_Factory(t) { return new (t || PhotoButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_management_service__WEBPACK_IMPORTED_MODULE_1__.DataManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PhotoButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhotoButtonComponent, selectors: [["app-photo-button"]], inputs: { documentID: "documentID", primaryColor: "primaryColor" }, outputs: { onStart: "onStart", onDone: "onDone", onError: "onError" }, decls: 6, vars: 3, consts: [[3, "ngStyle", "click"], [1, "d-flex", "flex-center"], ["type", "file", "accept", "image/jpeg, image/png, image/gif", "name", "image", "id", "formFile", 2, "display", "none", 3, "change"], ["uploadInput", ""]], template: function PhotoButtonComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoButtonComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Upload Photo\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PhotoButtonComponent_Template_input_change_4_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.primaryColor));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], styles: ["*[_ngcontent-%COMP%] {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  background-size: 500%;\r\n  border: none;\r\n  border-radius: 5rem;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 1.2em;\r\n  font-weight: 600;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  letter-spacing: 0.05em;\r\n  outline: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  padding: 0.5em 0.5em 0.5em 1.8em;\r\n  position: relative;\r\n  \r\n  width: 12rem;\r\n  margin-left: 2rem;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n}\r\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  background-color: #fff;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\r\n  transform: translate(-50%, -50%);\r\n  font-size: 1.5em;\r\n  line-height: 0;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.158) ;\r\n  padding: 18%;\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  animation-name: gradient;\r\n  -webkit-animation-name: gradient;\r\n  animation-duration: 2s;\r\n  -webkit-animation-duration: s;\r\n  animation-iteration-count: 1;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-fill-mode: forwards;\r\n}\r\n@keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  100% {\r\n    background-position: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUd6QixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDZDQUE2QztFQUM3QyxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoicGhvdG8tYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAuNWVtIDEuOGVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBoZWlnaHQ6IDRyZW07ICovXHJcbiAgd2lkdGg6IDEycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIgIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5idXR0b24gc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1OCkgO1xyXG4gIHBhZGRpbmc6IDE4JTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGdyYWRpZW50O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGdyYWRpZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1562:
/*!*************************************************************************!*\
  !*** ./src/app/components/processing-page/processing-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessingPageComponent": () => (/* binding */ ProcessingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data-management.service */ 3931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





function ProcessingPageComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined)("src", ctx_r0.dataManagementService.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProcessingPageComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
} }
function ProcessingPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcessingPageComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.dataManagementService.viewMyImageDetails(ctx_r3.dataManagementService.processingResponse.details); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Show detailed photo criteria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class ProcessingPageComponent {
    constructor(dataManagementService, router) {
        this.dataManagementService = dataManagementService;
        this.router = router;
        if (!this.dataManagementService.imgURL) {
            this.router.navigate(['']);
        }
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
}
ProcessingPageComponent.ɵfac = function ProcessingPageComponent_Factory(t) { return new (t || ProcessingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_management_service__WEBPACK_IMPORTED_MODULE_0__.DataManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ProcessingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcessingPageComponent, selectors: [["app-processing-page"]], decls: 9, vars: 11, consts: [[1, "background", 3, "ngStyle"], [1, "d-flex", "flex-column", "flex-center", "h-100", "animate"], [1, "d-flex", "flex-row", "flex-center"], [1, "m-3", "animate", "d-flex", "flex-center", "flex-column"], ["alt", "image", "class", "rounded mx-auto d-block img-thumbnail p-0", "style", "max-width: 400px", 3, "src", 4, "ngIf"], ["class", "loading__anim mt-2", 4, "ngIf"], [1, "m-3", "animate", "animate-photo-container-start"], ["alt", "crop", 1, "rounded", "mx-auto", "d-block", "img-thumbnail", "p-0", "animate", "animate-photo-start", 2, "max-width", "400px", 3, "src"], ["class", "col-12 text-center", 4, "ngIf"], ["alt", "image", 1, "rounded", "mx-auto", "d-block", "img-thumbnail", "p-0", 2, "max-width", "400px", 3, "src"], [1, "loading__anim", "mt-2"], [1, "col-12", "text-center"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-info-circle"]], template: function ProcessingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProcessingPageComponent_img_4_Template, 1, 2, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProcessingPageComponent_span_5_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProcessingPageComponent_div_8_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.dataManagementService.settings.primaryColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.dataManagementService.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataManagementService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-photo-container-end", ctx.dataManagementService.processingResponse.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-photo-end", ctx.dataManagementService.processingResponse.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.dataManagementService.processingResponse.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.dataManagementService.processingResponse.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["div.background[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n\r\n.loading__anim[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n  display: inline-block;\r\n  border: 5px solid rgba(0, 0, 0, 0.26);\r\n  border-left-color: rgb(255, 255, 255);\r\n  border-top-color: rgb(255, 255, 255);\r\n  border-radius: 50%;\r\n  animation: rotate 600ms infinite linear;\r\n}\r\n\r\n\r\n@keyframes rotate {\r\n  to {\r\n    transform: rotate(1turn)\r\n  }\r\n}\r\n\r\n\r\n.animate-photo-container-start[_ngcontent-%COMP%] {\r\n  max-width: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.animate-photo-container-end[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n\r\n\r\n.animate-photo-start[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  \r\n}\r\n\r\n\r\n.animate-photo-end[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  \r\n}\r\n\r\n\r\n.animate[_ngcontent-%COMP%] {\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n\r\n.bar[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 100%;\r\n  height: 10px;\r\n  border-radius: 2px;\r\n  background-color: #4b9cdb;\r\n}\r\n\r\n\r\n.bar[_ngcontent-%COMP%] {\r\n  animation: loadingJ 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;\r\n}\r\n\r\n\r\n.animate-filter[_ngcontent-%COMP%] {\r\n  animation: filterA 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;\r\n}\r\n\r\n\r\n@keyframes filterA {\r\n  0% {\r\n    filter: blur(0);\r\n  }\r\n  10% {\r\n    filter: hue-rotate(40)\r\n  }\r\n  20% {\r\n    filter: blur(0);\r\n  }\r\n  30% {\r\n    filter: invert();\r\n  }\r\n  40% {\r\n    filter: blur(0);\r\n  }\r\n\r\n  50% {\r\n    filter: brightness(20);\r\n  }\r\n  60% {\r\n    filter: blur(0);\r\n  }\r\n\r\n  70% {\r\n    filter: saturate(10);\r\n  }\r\n  80% {\r\n    filter: blur(0);\r\n  }\r\n\r\n  90% {\r\n    filter: contrast(0.5);\r\n  }\r\n\r\n  100% {\r\n    filter: blur(1px)\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3NpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOzs7QUFDQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxvRUFBb0U7QUFDdEU7OztBQUVBO0VBQ0UscUVBQXFFO0FBQ3ZFOzs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0U7RUFDRjs7QUFFRiIsImZpbGUiOiJwcm9jZXNzaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuXHJcbi5sb2FkaW5nX19hbmltIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDYwMG1zIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmFuaW1hdGUtcGhvdG8tY29udGFpbmVyLXN0YXJ0IHtcclxuICBtYXgtd2lkdGg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYW5pbWF0ZS1waG90by1jb250YWluZXItZW5kIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZS1waG90by1zdGFydCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyAqL1xyXG59XHJcblxyXG4uYW5pbWF0ZS1waG90by1lbmQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAqL1xyXG59XHJcblxyXG4uYW5pbWF0ZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG4uYmFyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjljZGI7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZ0ogMnMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuMzcsIDAuNDMsIDAuNjcpIGluZmluaXRlO1xyXG59XHJcblxyXG4uYW5pbWF0ZS1maWx0ZXIge1xyXG4gIGFuaW1hdGlvbjogZmlsdGVyQSAxLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjM3LCAwLjQzLCAwLjY3KSBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGZpbHRlckEge1xyXG4gIDAlIHtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSg0MClcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDIwKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEwKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICB9XHJcblxyXG4gIDkwJSB7XHJcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDAuNSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGZpbHRlcjogYmx1cigxcHgpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fade', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 5717:
/*!*************************************!*\
  !*** ./src/app/models/dashboard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModel": () => (/* binding */ LandingPageModel),
/* harmony export */   "DocumentRequirementsModel": () => (/* binding */ DocumentRequirementsModel),
/* harmony export */   "ValueUnitModel": () => (/* binding */ ValueUnitModel),
/* harmony export */   "LandingPageListModel": () => (/* binding */ LandingPageListModel)
/* harmony export */ });
// export class LandingPageModel {
//     constructor(
//       public id: number,
//       public name: string,
//       public country: string,
//       public dpi: number,
//       public width: number,
//       public height: number,
//       public sizeUnit: string,
//       public bgColor: string,
//       public headHeight: number,
//       public hairToTop: number,
//       public headUnit: string,
//       public isOnline: boolean,
//       public isPrintable: boolean,
//       public introText: string,
//       public differencesText: string,
//       public requirementsText: string,
//       public aboutText: string
//     ){}
// }
class LandingPageModel {
    constructor(id = undefined, title, country, imageUrl = "", requirements = new DocumentRequirementsModel(), html1 = "", detailed_img_url = "", meta_data = [], faq = "", html2 = "", guidelines = "", status = "published", updatedAt) {
        this.id = id;
        this.title = title;
        this.country = country;
        this.imageUrl = imageUrl;
        this.requirements = requirements;
        this.html1 = html1;
        this.detailed_img_url = detailed_img_url;
        this.meta_data = meta_data;
        this.faq = faq;
        this.html2 = html2;
        this.guidelines = guidelines;
        this.status = status;
        this.updatedAt = updatedAt;
    }
}
class DocumentRequirementsModel {
    constructor(dpi = 300, isOnline = false, isPrintable = false, bgColor = "#ffffff", width = new ValueUnitModel(), height = new ValueUnitModel(), headHeight = new ValueUnitModel(), hairToTop = new ValueUnitModel(), eyesToBottom = undefined) {
        this.dpi = dpi;
        this.isOnline = isOnline;
        this.isPrintable = isPrintable;
        this.bgColor = bgColor;
        this.width = width;
        this.height = height;
        this.headHeight = headHeight;
        this.hairToTop = hairToTop;
        this.eyesToBottom = eyesToBottom;
    }
}
class ValueUnitModel {
    constructor(value = 0, unit = 'in') {
        this.value = value;
        this.unit = unit;
    }
}
class LandingPageListModel {
    constructor(id, title, country, imageUrl) {
        this.id = id;
        this.title = title;
        this.country = country;
        this.imageUrl = imageUrl;
    }
}


/***/ }),

/***/ 2080:
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SearchPipe {
    transform(value, searchText) {
        if (!value)
            return [];
        if (!searchText)
            return value;
        searchText = searchText.toLowerCase();
        return value.filter(it => {
            return it.title.toLowerCase().includes(searchText) || it.country.toLowerCase().includes(searchText) || it.status.toLowerCase().includes(searchText);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ 3931:
/*!*****************************************************!*\
  !*** ./src/app/services/data-management.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataManagementService": () => (/* binding */ DataManagementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest-api.service */ 4714);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);






class DataManagementService {
    constructor(router, api, sanitizer, titleService, metaTagService) {
        this.router = router;
        this.api = api;
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.landingAnimation = false;
        this.loading = false;
        this.loadingData = true;
        this.processingResponse = { image: '', details: '' };
        this.metaData = [];
        this.settings = { primaryColor: '#42d2ef', defaultPageId: null };
        this.removeBackgroundErrorHandler = (error) => {
            this.stopLoading();
            let message = "Something Went Wrong!";
            switch (error.status) {
                case 400:
                    message = "BAD_REQUEST";
                    break;
                case 404:
                    message = "NOT_FOUND";
                    break;
                case 500:
                    message = "INTERNAL_SERVER";
                    break;
                case 401:
                    message = "FACE_TO_CLOSE";
                    break;
                case 402:
                    message = "NO_FACE_DETECTED";
                    break;
                case 403:
                    message = "UPLOAD_ERROR";
                    break;
                case 405:
                    message = "PHOTOROOM_ERROR";
                    break;
                case 406:
                    message = "JIMP_ERROR";
                    break;
                default:
                    break;
            }
            this.router.navigate(['/']);
            this.swalErrorAlert(message);
        };
        this.getLandingPageDataErrorHandler = this.getLandingPageDataErrorHandler.bind(this);
    }
    getAllSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const allSettings = yield this.api.getAllSettings().toPromise();
            let primaryColor = allSettings.find(a => a.key === 'primaryColor');
            this.settings.primaryColor = primaryColor.value;
            let defaultPageId = allSettings.find(a => a.key === 'defaultPageId');
            this.settings.defaultPageId = defaultPageId.value;
            console.log(this.settings);
        });
    }
    viewMyImageDetails(img = "assets/images/passport.png") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Detailed photo criteria',
            showConfirmButton: false,
            html: `
      <div class="row col-12 mx-0">
        <div class="col-5">
        <img src="${img}" class="w-100">
        </div>
        <div class="col-7 text-left">
        <h4 class="mb-2">
Compatibility test <strong class="text-success">passed</strong> <span class="ml-2">👍</span>
</h4>
        <ul class="check-list mb-4">
       <li>Face is recognized</li>
       <li>Only one face is allowed</li>
       <li>Minimum dimension</li>
       <li>Correct photo proportions<sup class="ml-1 text-warning">★</sup></li>
       <li>Correct photo orientation</li>
       <li>Face occupied 30% to 50% of the photo area<sup class="ml-1 text-warning">★</sup></li>
       <li>No red eyes</li>
       <li>Can remove background</li>
       </ul>
       <sup class="ml-1 text-warning">★</sup> automatically corrected
        </div>
      </div>
      `,
            customClass: { title: 'text-left', popup: 'swal-popup-w', htmlContainer: 'mx-0' }
        });
    }
    viewLandingPage(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(id);
            this.startLoadingData();
            this.landingPageData = yield this.api.getLandingPageById(id, this.getLandingPageDataErrorHandler).toPromise();
            if (!!this.landingPageData) {
                this.setTitleAndMeta(this.landingPageData.title, this.landingPageData.meta_data);
            }
            else {
                yield this.getAllLandingPages();
                this.router.navigate(['/']);
                this.stopLoadingData();
            }
            this.stopLoadingData();
        });
    }
    getLandingPageDataErrorHandler(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    setTitleAndMeta(title, meta) {
        this.titleService.setTitle('Passport App - ' + title);
        this.metaTagService.addTags(meta);
    }
    startLoadingData() {
        this.loadingData = true;
    }
    stopLoadingData() {
        this.loadingData = false;
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
    removeBackground(formData, docID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.startLoading();
            let Imageresp = yield this.api.cropImage(formData, docID, this.removeBackgroundErrorHandler).toPromise();
            // const imageObjectURL = URL.createObjectURL(imageBlob);
            // this.dataManagementService.processingResponse.image = this.sanitizer.bypassSecurityTrustResourceUrl(imageObjectURL);
            this.processingResponse = Imageresp;
            this.stopLoading();
            return this.processingResponse;
        });
    }
    swalErrorAlert(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Error',
            text: message,
            icon: 'error',
        });
    }
    getAllLandingPagesList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.startLoadingData();
            this.landingPageList = yield this.api.getAllLandingPagesList().toPromise();
            this.stopLoadingData();
        });
    }
    getAllLandingPages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.startLoadingData();
            const LandingPages = yield this.api.getAllLandingPages().toPromise();
            this.landingPagesData = LandingPages;
            this.landingPageData = this.landingPagesData[0];
            console.log(this.landingPageData);
            this.stopLoadingData();
        });
    }
}
DataManagementService.ɵfac = function DataManagementService_Factory(t) { return new (t || DataManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta)); };
DataManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataManagementService, factory: DataManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4714:
/*!**********************************************!*\
  !*** ./src/app/services/rest-api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestApiService": () => (/* binding */ RestApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





class RestApiService {
    constructor(http) {
        this.http = http;
        // Define API
        this.apiBase = 'https://fathomless-bastion-96634.herokuapp.com/api';
        this.apiURL = 'https://sdk.photoroom.com/v1';
        this.apiKey = 'fd24a7481f4d27d6741052516e4b671eb2c83216';
        // Http Options
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    // Admin Endpoints
    getAllLandingPagesAdmin(errorHandler = undefined) {
        return this.get('admin-control', errorHandler);
    }
    getAllSettingsAdmin(errorHandler = undefined) {
        return this.get('admin-control/settings', errorHandler);
    }
    updateSettingAdmin(reqBody, errorHandler = undefined) {
        return this.put('admin-control/settings', {}, reqBody, errorHandler);
    }
    updateBulkSettingAdmin(settings, errorHandler = undefined) {
        return this.put('admin-control/all-settings', {}, { settings }, errorHandler);
    }
    getAllLandingPagesWidthIdAdmin(documentId, errorHandler = undefined) {
        return this.get('admin-control/' + documentId.toString(), errorHandler);
    }
    createNewDocumentAdmin(documentData, errorHandler = undefined) {
        return this.post('admin-control', this.headers, documentData, errorHandler);
    }
    updateDocumentAdmin(documentData, errorHandler = undefined) {
        return this.put('admin-control/' + documentData.id.toString(), {}, documentData, errorHandler);
    }
    deleteLandingPageWithIdAdmin(documentId, errorHandler = undefined) {
        return this.delete('admin-control/' + documentId.toString(), errorHandler);
    }
    // User Endpoints
    getAllSettings(errorHandler = undefined) {
        return this.get('settings', errorHandler);
    }
    cropImage(formData, docID, errorHandler = undefined) {
        return this.post('upload/' + docID.toString(), {}, formData, errorHandler);
    }
    getAllLandingPagesList(errorHandler = undefined) {
        return this.get('documents/list', errorHandler);
    }
    getAllLandingPages(errorHandler = undefined) {
        return this.get('documents', errorHandler);
    }
    getLandingPageById(id, errorHandler = undefined) {
        return this.get('documents/' + id.toString(), errorHandler);
    }
    post(path, headers = null, params, errorHandler = undefined) {
        return this.call('post', path, headers, params, errorHandler);
    }
    patch(path, params, errorHandler = undefined) {
        return this.call('patch', path, params, errorHandler);
    }
    get(path, errorHandler = undefined) {
        return this.call('get', path, {}, {}, errorHandler);
    }
    put(path, headers = null, params, errorHandler = undefined) {
        return this.call('put', path, headers, params, errorHandler);
    }
    delete(path, errorHandler = undefined) {
        return this.call('delete', path, {}, {}, errorHandler);
    }
    download(path, params = undefined, errorHandler = undefined) {
        if (!errorHandler)
            errorHandler = this.handleError;
        return this.http
            .get(`${this.apiBase}/${path}`, {
            params,
            headers: this.headers,
            responseType: 'blob',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(errorHandler));
    }
    callImage(method, path, headers, params, errorHandler = undefined) {
        if (!errorHandler)
            errorHandler = this.handleError;
        return this.http
            .request(method, `${this.apiBase}/${path}`, {
            body: params,
            headers: !!headers ? headers : this.headers,
            responseType: 'blob',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            if (resp.error) {
                console.error('Error', resp);
                throw resp.error;
            }
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(errorHandler));
    }
    call(method, path, headers, params, errorHandler = undefined) {
        if (!errorHandler)
            errorHandler = this.handleError;
        return this.http
            .request(method, `${this.apiBase}/${path}`, {
            body: params,
            headers: !!headers ? headers : this.headers,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            if (resp.error) {
                console.error('Error', resp);
                throw resp.error;
            }
            return resp;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(errorHandler));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
RestApiService.ɵfac = function RestApiService_Factory(t) { return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RestApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RestApiService, factory: RestApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map