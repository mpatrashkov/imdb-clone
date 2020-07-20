function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./movies/movies.module */
        "./src/app/movies/movies.module.ts")).then(function (m) {
          return m.MoviesModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: 'favourites',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./favourites/favourites.module */
        "./src/app/favourites/favourites.module.ts")).then(function (m) {
          return m.FavouritesModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation/components/navigation/navigation.component */
    "./src/app/navigation/components/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'imdb-clone';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navigation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movies/movies.module */
    "./src/app/movies/movies.module.ts");
    /* harmony import */


    var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./store/auth/auth.reducer */
    "./src/app/store/auth/auth.reducer.ts");
    /* harmony import */


    var _store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./store/auth/auth.effects */
    "./src/app/store/auth/auth.effects.ts");
    /* harmony import */


    var _favourites_favourites_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./favourites/favourites.module */
    "./src/app/favourites/favourites.module.ts");
    /* harmony import */


    var _store_favourites_favourites_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./store/favourites/favourites.effects */
    "./src/app/store/favourites/favourites.effects.ts");
    /* harmony import */


    var _store_favourites_favourites_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./store/favourites/favourites.reducer */
    "./src/app/store/favourites/favourites.reducer.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__["MoviesModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _favourites_favourites_module__WEBPACK_IMPORTED_MODULE_15__["FavouritesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
        auth: _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_13__["authReducer"],
        favourites: _store_favourites_favourites_reducer__WEBPACK_IMPORTED_MODULE_17__["favouritesReducer"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_14__["AuthEffects"], _store_favourites_favourites_effects__WEBPACK_IMPORTED_MODULE_16__["FavouriteEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
        name: 'IMDb clone'
      }), ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__["MoviesModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _favourites_favourites_module__WEBPACK_IMPORTED_MODULE_15__["FavouritesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__["MoviesModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _favourites_favourites_module__WEBPACK_IMPORTED_MODULE_15__["FavouritesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({
            auth: _store_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_13__["authReducer"],
            favourites: _store_favourites_favourites_reducer__WEBPACK_IMPORTED_MODULE_17__["favouritesReducer"]
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_auth_auth_effects__WEBPACK_IMPORTED_MODULE_14__["AuthEffects"], _store_favourites_favourites_effects__WEBPACK_IMPORTED_MODULE_16__["FavouriteEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
            name: 'IMDb clone'
          }), ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRouting */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRouting", function () {
      return AuthRouting;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/auth/pages/login/login.component.ts");
    /* harmony import */


    var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/sign-up/sign-up.component */
    "./src/app/auth/pages/sign-up/sign-up.component.ts");
    /* harmony import */


    var _shared_guards_not_logged_not_logged_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/guards/not-logged/not-logged.guard */
    "./src/app/auth/shared/guards/not-logged/not-logged.guard.ts");

    var routes = [{
      path: 'signIn',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      canActivate: [_shared_guards_not_logged_not_logged_guard__WEBPACK_IMPORTED_MODULE_4__["NotLoggedGuard"]]
    }, {
      path: 'signUp',
      component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
      canActivate: [_shared_guards_not_logged_not_logged_guard__WEBPACK_IMPORTED_MODULE_4__["NotLoggedGuard"]]
    }];

    var AuthRouting = function AuthRouting() {
      _classCallCheck(this, AuthRouting);
    };

    AuthRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRouting
    });
    AuthRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRouting_Factory(t) {
        return new (t || AuthRouting)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRouting, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/auth/pages/login/login.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui/pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/sign-up/sign-up.component */
    "./src/app/auth/pages/sign-up/sign-up.component.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/pages/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/pages/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_directives_validate_form_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/directives/validate-form.directive */
    "./src/app/auth/shared/directives/validate-form.directive.ts");
    /* harmony import */


    var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is not a valid email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong email or password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, route, store, actions$) {
        var _this = this;

        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.route = route;
        this.store = store;
        this.actions$ = actions$;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
        this.loginFailed = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.route.queryParamMap.subscribe(function (paramMap) {
          _this.refUrl = paramMap.get('ref');
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this2.router.navigate([_this2.refUrl || '/']);
          });
          this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginFailed"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this2.loginFailed = true;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.loginForm.valid) {
            this.store.dispatch(Object(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["login"])({
              payload: {
                email: this.email.value,
                password: this.password.value
              }
            }));
          } else {
            Object(_shared_directives_validate_form_directive__WEBPACK_IMPORTED_MODULE_3__["validateForm"])(this.loginForm);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 4,
      consts: [[1, "container"], [1, "loginForm"], [1, "loginForm--title"], [1, "elevation-1", "loginForm--form", 3, "formGroup", "ngSubmit"], [1, "loginForm--form-title"], [1, "input"], ["for", "email"], ["type", "email", "formControlName", "email"], ["class", "input--error", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password"], [1, "button", "button__secondary"], ["class", "alert alert__danger loginForm--form-alert", 4, "ngIf"], [1, "login--signUp"], ["routerLink", "/auth/signUp", "queryParamsHandling", "merge"], [1, "input--error"], [1, "alert", "alert__danger", "loginForm--form-alert"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IMDb Clone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFailed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      styles: [".login--signUp[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcYXV0aFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5cbi5sb2dpbiB7XG4gICYtLXNpZ25VcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG4iLCIubG9naW4tLXNpZ25VcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        }, {
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/pages/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/pages/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthPagesSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_directives_confirm_password_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/directives/confirm-password.directive */
    "./src/app/auth/shared/directives/confirm-password.directive.ts");
    /* harmony import */


    var _shared_directives_validate_form_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/directives/validate-form.directive */
    "./src/app/auth/shared/directives/validate-form.directive.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/services/auth/auth.service */
    "./src/app/auth/shared/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignUpComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is not a valid email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords don't match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignUpComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected error during registration ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(router, store, actions$, authService) {
        _classCallCheck(this, SignUpComponent);

        this.router = router;
        this.store = store;
        this.actions$ = actions$;
        this.authService = authService;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        }, {
          validators: _shared_directives_confirm_password_directive__WEBPACK_IMPORTED_MODULE_2__["confirmPasswordValidator"]
        });
        this.signUpFailed = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_6__["signUpSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this3.router.navigate(['/']);
          });
          this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_6__["signUpFailed"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this3.signUpFailed = true;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.signUpForm.valid) {
            this.store.dispatch(Object(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_6__["signUp"])({
              payload: {
                email: this.email.value,
                password: this.password.value
              }
            }));
          } else {
            Object(_shared_directives_validate_form_directive__WEBPACK_IMPORTED_MODULE_3__["validateForm"])(this.signUpForm);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }, {
        key: "email",
        get: function get() {
          return this.signUpForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signUpForm.get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.signUpForm.get('confirmPassword');
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 30,
      vars: 6,
      consts: [[1, "container"], [1, "loginForm"], [1, "loginForm--title"], [1, "elevation-1", "loginForm--form", 3, "formGroup", "ngSubmit"], [1, "loginForm--form-title"], [1, "input"], ["for", "email"], ["type", "email", "formControlName", "email"], ["class", "input--error", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password"], ["type", "password", "formControlName", "confirmPassword"], [1, "button", "button__secondary"], ["class", "alert alert__danger loginForm--form-alert", 4, "ngIf"], [1, "signUp--signIn"], ["routerLink", "/auth/signIn", "queryParamsHandling", "merge"], [1, "input--error"], [1, "alert", "alert__danger", "loginForm--form-alert"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IMDb Clone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignUpComponent_div_11_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpComponent_div_16_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cofirm Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignUpComponent_div_21_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_div_22_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_div_25_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword.invalid && (ctx.confirmPassword.dirty || ctx.confirmPassword.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors.passwordsNoMatch) && (ctx.signUpForm.touched || ctx.signUpForm.dirty));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpFailed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      styles: [".signUp--signIn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9zaWduLXVwL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxhdXRoXFxwYWdlc1xcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnblVwIHtcbiAgJi0tc2lnbkluIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbiIsIi5zaWduVXAtLXNpZ25JbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
        }, {
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
        }, {
          type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/shared/directives/confirm-password.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/auth/shared/directives/confirm-password.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: confirmPasswordValidator */

  /***/
  function srcAppAuthSharedDirectivesConfirmPasswordDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function () {
      return confirmPasswordValidator;
    });

    var confirmPasswordValidator = function confirmPasswordValidator(control) {
      var password = control.get('password');
      var confirmPassword = control.get('confirmPassword');
      return password && confirmPassword && password.value !== confirmPassword.value ? {
        passwordsNoMatch: true
      } : null;
    };
    /***/

  },

  /***/
  "./src/app/auth/shared/directives/validate-form.directive.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/shared/directives/validate-form.directive.ts ***!
    \*******************************************************************/

  /*! exports provided: validateForm */

  /***/
  function srcAppAuthSharedDirectivesValidateFormDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateForm", function () {
      return validateForm;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var validateForm = function validateForm(formGroup) {
      Object.keys(formGroup.controls).forEach(function (field) {
        var control = formGroup.get(field);

        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
          control.markAsTouched({
            onlySelf: true
          });
        } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
          undefined.validateAllFormFields(control);
        }
      });
    };
    /***/

  },

  /***/
  "./src/app/auth/shared/endpoints.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/shared/endpoints.ts ***!
    \******************************************/

  /*! exports provided: login, signUp */

  /***/
  function srcAppAuthSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signUp", function () {
      return signUp;
    });
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var login = src_app_config__WEBPACK_IMPORTED_MODULE_0__["authUrl"] + 'accounts:signInWithPassword';
    var signUp = src_app_config__WEBPACK_IMPORTED_MODULE_0__["authUrl"] + 'accounts:signUp';
    /***/
  },

  /***/
  "./src/app/auth/shared/guards/logged/logged.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/shared/guards/logged/logged.guard.ts ***!
    \***********************************************************/

  /*! exports provided: LoggedGuard */

  /***/
  function srcAppAuthSharedGuardsLoggedLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () {
      return LoggedGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoggedGuard = /*#__PURE__*/function () {
      function LoggedGuard(store, router) {
        _classCallCheck(this, LoggedGuard);

        this.store = store;
        this.router = router;
      }

      _createClass(LoggedGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this4 = this;

          var loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.auth.loggedIn;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
          loggedIn$.subscribe(function (loggedIn) {
            if (!loggedIn) {
              _this4.router.navigate(['/auth/signIn']);
            }
          });
          return loggedIn$;
        }
      }]);

      return LoggedGuard;
    }();

    LoggedGuard.ɵfac = function LoggedGuard_Factory(t) {
      return new (t || LoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoggedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggedGuard,
      factory: LoggedGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/shared/guards/not-logged/not-logged.guard.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/shared/guards/not-logged/not-logged.guard.ts ***!
    \*******************************************************************/

  /*! exports provided: NotLoggedGuard */

  /***/
  function srcAppAuthSharedGuardsNotLoggedNotLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotLoggedGuard", function () {
      return NotLoggedGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var NotLoggedGuard = /*#__PURE__*/function () {
      function NotLoggedGuard(store) {
        _classCallCheck(this, NotLoggedGuard);

        this.store = store;
      }

      _createClass(NotLoggedGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.auth.loggedIn;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return !data;
          }));
        }
      }]);

      return NotLoggedGuard;
    }();

    NotLoggedGuard.ɵfac = function NotLoggedGuard_Factory(t) {
      return new (t || NotLoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    NotLoggedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotLoggedGuard,
      factory: NotLoggedGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotLoggedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/shared/services/auth/auth.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/shared/services/auth/auth.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthSharedServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../endpoints */
    "./src/app/auth/shared/endpoints.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/ui/services/request/request.service */
    "./src/app/ui/services/request/request.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(request) {
        _classCallCheck(this, AuthService);

        this.request = request;
        this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
          email: '',
          logged: false
        });
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this5 = this;

          var request$ = this.request.post(_endpoints__WEBPACK_IMPORTED_MODULE_2__["login"], {
            email: email,
            password: password
          }, {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["authKey"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
            _this5.loggedUser.next({
              logged: true,
              email: email
            });
          });
          return request$;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loggedUser.next({
            logged: false,
            email: ''
          });
        }
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          var _this6 = this;

          var request$ = this.request.post(_endpoints__WEBPACK_IMPORTED_MODULE_2__["signUp"], {
            email: email,
            password: password
          }, {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["authKey"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
            _this6.loggedUser.next({
              logged: true,
              email: email
            });
          });
          return request$;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: apiUrl, apiKey, authUrl, authKey, dataUrl, dataKey */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiUrl", function () {
      return apiUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiKey", function () {
      return apiKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authUrl", function () {
      return authUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authKey", function () {
      return authKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataUrl", function () {
      return dataUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataKey", function () {
      return dataKey;
    });

    var apiUrl = 'https://api.themoviedb.org/3';
    var apiKey = '519e9b151c1dc701bf50e6824fbe3409';
    var authUrl = 'https://identitytoolkit.googleapis.com/v1/';
    var authKey = 'AIzaSyD15XONBwSn_kgvyJ7OE46Zt_CZ7_Yl6nM';
    var dataUrl = 'https://practce-on-focus.firebaseio.com';
    var dataKey = authKey;
    /***/
  },

  /***/
  "./src/app/favourites/favourites-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/favourites/favourites-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FavouritesRouting */

  /***/
  function srcAppFavouritesFavouritesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesRouting", function () {
      return FavouritesRouting;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_shared_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/shared/guards/logged/logged.guard */
    "./src/app/auth/shared/guards/logged/logged.guard.ts");
    /* harmony import */


    var _pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/favourites/favourites.component */
    "./src/app/favourites/pages/favourites/favourites.component.ts");

    var routes = [{
      path: 'all',
      component: _pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_3__["FavouritesComponent"],
      canActivate: [_auth_shared_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_2__["LoggedGuard"]]
    }];

    var FavouritesRouting = function FavouritesRouting() {
      _classCallCheck(this, FavouritesRouting);
    };

    FavouritesRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavouritesRouting
    });
    FavouritesRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavouritesRouting_Factory(t) {
        return new (t || FavouritesRouting)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavouritesRouting, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/favourites/favourites.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/favourites/favourites.module.ts ***!
    \*************************************************/

  /*! exports provided: FavouritesModule */

  /***/
  function srcAppFavouritesFavouritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesModule", function () {
      return FavouritesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui/pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/favourites/favourites.component */
    "./src/app/favourites/pages/favourites/favourites.component.ts");
    /* harmony import */


    var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favourites-routing.module */
    "./src/app/favourites/favourites-routing.module.ts");
    /* harmony import */


    var _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ui/components/movie-card/movie-card.module */
    "./src/app/ui/components/movie-card/movie-card.module.ts");

    var FavouritesModule = function FavouritesModule() {
      _classCallCheck(this, FavouritesModule);
    };

    FavouritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavouritesModule
    });
    FavouritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavouritesModule_Factory(t) {
        return new (t || FavouritesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesRouting"], _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_6__["MovieCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavouritesModule, {
        declarations: [_pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesRouting"], _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_6__["MovieCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesRouting"], _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_6__["MovieCardModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/favourites/pages/favourites/favourites.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/favourites/pages/favourites/favourites.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FavouritesComponent */

  /***/
  function srcAppFavouritesPagesFavouritesFavouritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function () {
      return FavouritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/favourites/favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../ui/components/movie-card/movie-card/movie-card.component */
    "./src/app/ui/components/movie-card/movie-card/movie-card.component.ts");

    function FavouritesComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r4);
      }
    }

    function FavouritesComponent_div_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Favourites");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FavouritesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouritesComponent_div_4_div_1_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouritesComponent_div_4_i_2_Template, 2, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var favourites_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", favourites_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", favourites_r1.length === 0);
      }
    }

    var FavouritesComponent = /*#__PURE__*/function () {
      function FavouritesComponent(store) {
        _classCallCheck(this, FavouritesComponent);

        this.store = store;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(FavouritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.favourites$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.favourites.favourites ? Object.values(state.favourites.favourites) : [];
          }));
          this.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__["getFavourites"])());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(false);
          this.destroyed$.complete();
        }
      }]);

      return FavouritesComponent;
    }();

    FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) {
      return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavouritesComponent,
      selectors: [["app-favourites"]],
      decls: 6,
      vars: 3,
      consts: [[1, "favourites", "movieGrid"], [1, "container"], [1, "home--title", "title"], ["class", "movieGrid--row", 4, "ngIf"], [1, "movieGrid--row"], ["class", "col", 4, "ngFor", "ngForOf"], ["class", "gray", 4, "ngIf"], [1, "col"], [3, "movie"], [1, "gray"]],
      template: function FavouritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Favourites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavouritesComponent_div_4_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.favourites$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_5__["MovieCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZXMvcGFnZXMvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favourites',
          templateUrl: './favourites.component.html',
          styleUrls: ['./favourites.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/favourites/shared/endpoints.ts":
  /*!************************************************!*\
    !*** ./src/app/favourites/shared/endpoints.ts ***!
    \************************************************/

  /*! exports provided: favourites, putFavourite */

  /***/
  function srcAppFavouritesSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favourites", function () {
      return favourites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "putFavourite", function () {
      return putFavourite;
    });
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var favourites = function favourites(localId) {
      return "".concat(src_app_config__WEBPACK_IMPORTED_MODULE_0__["dataUrl"], "/favorites/").concat(localId, ".json");
    };

    var putFavourite = function putFavourite(localId, movieId) {
      return "".concat(src_app_config__WEBPACK_IMPORTED_MODULE_0__["dataUrl"], "/favorites/").concat(localId, "/").concat(movieId, ".json");
    };
    /***/

  },

  /***/
  "./src/app/favourites/shared/services/favourite/favourite.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/favourites/shared/services/favourite/favourite.service.ts ***!
    \***************************************************************************/

  /*! exports provided: FavouriteService */

  /***/
  function srcAppFavouritesSharedServicesFavouriteFavouriteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteService", function () {
      return FavouriteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../endpoints */
    "./src/app/favourites/shared/endpoints.ts");
    /* harmony import */


    var src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/ui/services/request/request.service */
    "./src/app/ui/services/request/request.service.ts");

    var FavouriteService = /*#__PURE__*/function () {
      function FavouriteService(request) {
        _classCallCheck(this, FavouriteService);

        this.request = request;
      }

      _createClass(FavouriteService, [{
        key: "getAll",
        value: function getAll(localId) {
          return this.request.get(Object(_endpoints__WEBPACK_IMPORTED_MODULE_2__["favourites"])(localId), {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["dataKey"]
          });
        }
      }, {
        key: "addMovieToFavourites",
        value: function addMovieToFavourites(localId, movie) {
          return this.request.put(Object(_endpoints__WEBPACK_IMPORTED_MODULE_2__["putFavourite"])(localId, movie.id), movie, {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["dataKey"]
          });
        }
      }, {
        key: "removeMovieFromFavourites",
        value: function removeMovieFromFavourites(localId, movieId) {
          return this.request["delete"](Object(_endpoints__WEBPACK_IMPORTED_MODULE_2__["putFavourite"])(localId, movieId), {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["dataKey"]
          });
        }
      }, {
        key: "addPersonalNoteToFavourite",
        value: function addPersonalNoteToFavourite(localId, movieId, personalNote) {
          return this.request.patch(Object(_endpoints__WEBPACK_IMPORTED_MODULE_2__["putFavourite"])(localId, movieId), {
            personalNote: personalNote
          }, {
            key: src_app_config__WEBPACK_IMPORTED_MODULE_1__["dataKey"]
          });
        }
      }]);

      return FavouriteService;
    }();

    FavouriteService.ɵfac = function FavouriteService_Factory(t) {
      return new (t || FavouriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]));
    };

    FavouriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FavouriteService,
      factory: FavouriteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/genres/shared/endpoints.ts":
  /*!********************************************!*\
    !*** ./src/app/genres/shared/endpoints.ts ***!
    \********************************************/

  /*! exports provided: genres */

  /***/
  function srcAppGenresSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "genres", function () {
      return genres;
    });
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var genres = src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + '/genre/movie/list';
    /***/
  },

  /***/
  "./src/app/genres/shared/services/genre/genre.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/genres/shared/services/genre/genre.service.ts ***!
    \***************************************************************/

  /*! exports provided: GenreService */

  /***/
  function srcAppGenresSharedServicesGenreGenreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenreService", function () {
      return GenreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../endpoints */
    "./src/app/genres/shared/endpoints.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/ui/services/request/request.service */
    "./src/app/ui/services/request/request.service.ts");

    var GenreService = /*#__PURE__*/function () {
      function GenreService(request) {
        _classCallCheck(this, GenreService);

        this.request = request;
      }

      _createClass(GenreService, [{
        key: "getGenres",
        value: function getGenres() {
          if (!this.genres$) {
            this.genres$ = this.request.get(_endpoints__WEBPACK_IMPORTED_MODULE_1__["genres"], {
              api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"]
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data.genres;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
          }

          return this.genres$;
        }
      }, {
        key: "getGenreById",
        value: function getGenreById(id) {
          return this.getGenres().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (genre) {
            return genre;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (genre) {
            return genre.id === id;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        }
      }, {
        key: "getGenresByIds",
        value: function getGenresByIds(ids) {
          return this.getGenres().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (genre) {
            return genre;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (genre) {
            return ids.includes(genre.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])());
        }
      }]);

      return GenreService;
    }();

    GenreService.ɵfac = function GenreService_Factory(t) {
      return new (t || GenreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]));
    };

    GenreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GenreService,
      factory: GenreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-cast-member-image/movie-cast-member-image.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/movies/components/movie-cast-member-image/movie-cast-member-image.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: MovieCastMemberImageComponent */

  /***/
  function srcAppMoviesComponentsMovieCastMemberImageMovieCastMemberImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCastMemberImageComponent", function () {
      return MovieCastMemberImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ui/components/image/image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");

    function MovieCastMemberImageComponent_app_image_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx_r0.castMember.profile_path)("posterSize", ctx_r0.size)("aspectRatio", 3 / 2);
      }
    }

    function MovieCastMemberImageComponent_ng_template_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "/assets/userMaleGray.svg");
      }
    }

    function MovieCastMemberImageComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "/assets/userFemaleGray.svg");
      }
    }

    function MovieCastMemberImageComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieCastMemberImageComponent_ng_template_2_div_2_Template, 1, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieCastMemberImageComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.castMember.gender === 2)("ngIfElse", _r4);
      }
    }

    var MovieCastMemberImageComponent = function MovieCastMemberImageComponent() {
      _classCallCheck(this, MovieCastMemberImageComponent);

      this.size = 'w154';
    };

    MovieCastMemberImageComponent.ɵfac = function MovieCastMemberImageComponent_Factory(t) {
      return new (t || MovieCastMemberImageComponent)();
    };

    MovieCastMemberImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieCastMemberImageComponent,
      selectors: [["app-movie-cast-member-image"]],
      inputs: {
        castMember: "castMember",
        size: "size",
        width: "width"
      },
      decls: 4,
      vars: 4,
      consts: [[1, "movieCastMemberImage"], [3, "path", "posterSize", "aspectRatio", 4, "ngIf", "ngIfElse"], ["noImage", ""], [3, "path", "posterSize", "aspectRatio"], [1, "movieCastMemberImage--image"], [1, "movieCastMemberImage--image-svg"], [3, "inlineSVG", 4, "ngIf", "ngIfElse"], ["female", ""], [3, "inlineSVG"]],
      template: function MovieCastMemberImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieCastMemberImageComponent_app_image_1_Template, 1, 3, "app-image", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieCastMemberImageComponent_ng_template_2_Template, 5, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castMember.profile_path)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGDirective"]],
      styles: [".movieCastMemberImage--image[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background: #121212;\n}\n.movieCastMemberImage--image-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 150%;\n  position: relative;\n}\n.movieCastMemberImage--image-svg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtY2FzdC1tZW1iZXItaW1hZ2UvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXG1vdmllc1xcY29tcG9uZW50c1xcbW92aWUtY2FzdC1tZW1iZXItaW1hZ2VcXG1vdmllLWNhc3QtbWVtYmVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1jYXN0LW1lbWJlci1pbWFnZS9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1jYXN0LW1lbWJlci1pbWFnZS9tb3ZpZS1jYXN0LW1lbWJlci1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNjUTtBQ2hCWjtBRklJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVGTjtBRklNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBRUhSIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtY2FzdC1tZW1iZXItaW1hZ2UvbW92aWUtY2FzdC1tZW1iZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcblxuLm1vdmllQ2FzdE1lbWJlckltYWdlIHtcbiAgJi0taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkZGFyay1ncmF5O1xuXG4gICAgJi1zdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogMTUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG5cbiRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuXG4vLyBCcmVha3BvaW50c1xuJHNtOiA0ODBweDtcbiRtZDogNzY4cHg7XG4kbGc6IDEwMjRweDtcbiR4bDogMTI4MHB4O1xuJHh4bDogMTQ0MHB4O1xuXG4kZm9udC1wcmltYXJ5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogd2hpdGU7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ1LCAxOTcsIDI0KTtcbiRjb2xvci1kYW5nZXI6IHJnYigyNTUsIDQyLCA0Mik7XG5cbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogcmdiKDIwOSwgMTY5LCAyMik7XG5cbiRncmF5OiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG4kbGlnaHQtZ3JheTogcmdiKDE4OSwgMTg5LCAxODkpO1xuJGRhcmstZ3JheTogcmdiKDE4LCAxOCwgMTgpO1xuIiwiLm1vdmllQ2FzdE1lbWJlckltYWdlLS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xufVxuLm1vdmllQ2FzdE1lbWJlckltYWdlLS1pbWFnZS1zdmcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb3ZpZUNhc3RNZW1iZXJJbWFnZS0taW1hZ2Utc3ZnIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCastMemberImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-cast-member-image',
          templateUrl: './movie-cast-member-image.component.html',
          styleUrls: ['./movie-cast-member-image.component.scss']
        }]
      }], null, {
        castMember: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-cast/movie-cast.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/movies/components/movie-cast/movie-cast.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MovieCastComponent */

  /***/
  function srcAppMoviesComponentsMovieCastMovieCastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCastComponent", function () {
      return MovieCastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../movie-cast-member-image/movie-cast-member-image.component */
    "./src/app/movies/components/movie-cast-member-image/movie-cast-member-image.component.ts");

    function MovieCastComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-cast-member-image", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var castMember_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("castMember", castMember_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](castMember_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](castMember_r1.character);
      }
    }

    var MovieCastComponent = /*#__PURE__*/function () {
      function MovieCastComponent(movieService) {
        _classCallCheck(this, MovieCastComponent);

        this.movieService = movieService;
        this.showMembersCount = 10;
      }

      _createClass(MovieCastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fullCast$ = this.movieService.getCast(this.movieId);
          this.cast$ = this.fullCast$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (member) {
            return member;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(this.showMembersCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
        }
      }]);

      return MovieCastComponent;
    }();

    MovieCastComponent.ɵfac = function MovieCastComponent_Factory(t) {
      return new (t || MovieCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]));
    };

    MovieCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieCastComponent,
      selectors: [["app-movie-cast"]],
      inputs: {
        movieId: "movieId",
        showMembersCount: "showMembersCount"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "movieCast"], [1, "movieCast--row"], ["class", "movieCast--row-member", 4, "ngFor", "ngForOf"], ["routerLink", "cast", 1, "movieCast--fullCast"], [1, "movieCast--row-member"], [3, "castMember"], [1, "bold", "truncate"], [1, "gray"]],
      template: function MovieCastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieCastComponent_div_2_Template, 6, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Full Cast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.cast$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_5__["MovieCastMemberImageComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".movieCast[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.movieCast--row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: auto;\n  margin: 0 -5px;\n}\n.movieCast--row-member[_ngcontent-%COMP%] {\n  width: 120px;\n  flex-shrink: 0;\n  padding: 5px;\n  font-size: 14px;\n}\n@media (min-width: 1280px) {\n  .movieCast--row-member[_ngcontent-%COMP%] {\n    width: 154px;\n    font-size: 16px;\n  }\n}\n.movieCast--row-member-svg[_ngcontent-%COMP%] {\n  height: 165px;\n  display: flex;\n  align-items: center;\n  background: #121212;\n}\n.movieCast--row-member-svg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.movieCast--fullCast[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 14px;\n  color: #f5c518;\n}\n@media (min-width: 1280px) {\n  .movieCast--fullCast[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtY2FzdC9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxjb21wb25lbnRzXFxtb3ZpZS1jYXN0XFxtb3ZpZS1jYXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1jYXN0L21vdmllLWNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9jb21wb25lbnRzL21vdmllLWNhc3QvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtY2FzdC9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtBQ0ZGO0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0FDSEo7QURLSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNITjtBQ2RFO0VGYUU7SUFPSSxZQUFBO0lBQ0EsZUFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkdSSTtBRk1aO0FESVE7RUFDRSxXQUFBO0FDRlY7QURRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0czQmM7QUZxQmxCO0FDbENFO0VGcUNBO0lBTUksZUFBQTtFQ0xKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1jYXN0L21vdmllLWNhc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4ubW92aWVDYXN0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICAmLS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgICBtYXJnaW46IDAgLTVweDtcblxuICAgICYtbWVtYmVyIHtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYSgkeGwpIHtcbiAgICAgICAgd2lkdGg6IDE1NHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgICYtc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiAxNjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcmstZ3JheTtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi0tZnVsbENhc3Qge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCR4bCkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIiwiLm1vdmllQ2FzdCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5tb3ZpZUNhc3QtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW46IDAgLTVweDtcbn1cbi5tb3ZpZUNhc3QtLXJvdy1tZW1iZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLm1vdmllQ2FzdC0tcm93LW1lbWJlciB7XG4gICAgd2lkdGg6IDE1NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLm1vdmllQ2FzdC0tcm93LW1lbWJlci1zdmcge1xuICBoZWlnaHQ6IDE2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xufVxuLm1vdmllQ2FzdC0tcm93LW1lbWJlci1zdmcgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW92aWVDYXN0LS1mdWxsQ2FzdCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZjVjNTE4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAubW92aWVDYXN0LS1mdWxsQ2FzdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59IiwiQG1peGluIG1lZGlhKCRzaXplKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIkaGVhZGVyLWhlaWdodDogNTBweDtcblxuJGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cbi8vIEJyZWFrcG9pbnRzXG4kc206IDQ4MHB4O1xuJG1kOiA3NjhweDtcbiRsZzogMTAyNHB4O1xuJHhsOiAxMjgwcHg7XG4keHhsOiAxNDQwcHg7XG5cbiRmb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiB3aGl0ZTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDUsIDE5NywgMjQpO1xuJGNvbG9yLWRhbmdlcjogcmdiKDI1NSwgNDIsIDQyKTtcblxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiByZ2IoMjA5LCAxNjksIDIyKTtcblxuJGdyYXk6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiRsaWdodC1ncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XG4kZGFyay1ncmF5OiByZ2IoMTgsIDE4LCAxOCk7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-cast',
          templateUrl: './movie-cast.component.html',
          styleUrls: ['./movie-cast.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
        }];
      }, {
        movieId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showMembersCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-go-back/movie-go-back.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/movies/components/movie-go-back/movie-go-back.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MovieGoBackComponent */

  /***/
  function srcAppMoviesComponentsMovieGoBackMovieGoBackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieGoBackComponent", function () {
      return MovieGoBackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../ui/components/image/image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var _movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../movie-title/movie-title.component */
    "./src/app/movies/components/movie-title/movie-title.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MovieGoBackComponent = function MovieGoBackComponent() {
      _classCallCheck(this, MovieGoBackComponent);

      this.text = 'Back to main';
      this.link = '../';
    };

    MovieGoBackComponent.ɵfac = function MovieGoBackComponent_Factory(t) {
      return new (t || MovieGoBackComponent)();
    };

    MovieGoBackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieGoBackComponent,
      selectors: [["app-movie-go-back"]],
      inputs: {
        movieOverview: "movieOverview",
        text: "text",
        link: "link"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "movieGoBack"], ["posterSize", "w45", 3, "path", "aspectRatio"], [3, "movieOverview"], [3, "routerLink"]],
      template: function MovieGoBackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-movie-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.movieOverview.poster_path)("aspectRatio", 3 / 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", ctx.movieOverview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      directives: [_ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"], _movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_2__["MovieTitleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".movieGoBack[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.movieGoBack[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 100%;\n  border-radius: 5px;\n}\n.movieGoBack[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtZ28tYmFjay9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxjb21wb25lbnRzXFxtb3ZpZS1nby1iYWNrXFxtb3ZpZS1nby1iYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1nby1iYWNrL21vdmllLWdvLWJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1nby1iYWNrL21vdmllLWdvLWJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVHb0JhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGFwcC1pbWFnZSB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIGEge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxufVxuIiwiLm1vdmllR29CYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb3ZpZUdvQmFjayBhcHAtaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW92aWVHb0JhY2sgYSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieGoBackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-go-back',
          templateUrl: './movie-go-back.component.html',
          styleUrls: ['./movie-go-back.component.scss']
        }]
      }], null, {
        movieOverview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-info/movie-info.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/movies/components/movie-info/movie-info.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MovieInfoComponent */

  /***/
  function srcAppMoviesComponentsMovieInfoMovieInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieInfoComponent", function () {
      return MovieInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/favourites/favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../movie-title/movie-title.component */
    "./src/app/movies/components/movie-title/movie-title.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_read_more_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../ui/components/read-more/read-more/read-more.component */
    "./src/app/ui/components/read-more/read-more/read-more.component.ts");
    /* harmony import */


    var _ui_components_movie_card_movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../ui/components/movie-card/movie-rating/movie-rating.component */
    "./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts");
    /* harmony import */


    var _ui_pipes_genres_genres_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../ui/pipes/genres/genres.pipe */
    "./src/app/ui/pipes/genres/genres.pipe.ts");
    /* harmony import */


    var _ui_pipes_duration_duration_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../ui/pipes/duration/duration.pipe */
    "./src/app/ui/pipes/duration/duration.pipe.ts");

    function MovieInfoComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.movieOverview.runtime), " ");
      }
    }

    var _c0 = function _c0() {
      return {
        high: "movieInfo--rating-high",
        normal: "movieInfo--rating-normal",
        low: "movieInfo--rating-low"
      };
    };

    function MovieInfoComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-rating", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " User Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx_r1.movieOverview.vote_average)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function MovieInfoComponent_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieInfoComponent_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.unfavourite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Remove From Favourites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MovieInfoComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieInfoComponent_ng_template_23_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.favourite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add To Favourites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MovieInfoComponent = /*#__PURE__*/function () {
      function MovieInfoComponent(router, store) {
        _classCallCheck(this, MovieInfoComponent);

        this.router = router;
        this.store = store;
      }

      _createClass(MovieInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.auth.loggedIn;
          }));
          this.favourite$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.favourites.favourites && state.favourites.favourites[_this7.movieOverview.id] !== undefined;
          }));
        }
      }, {
        key: "favourite",
        value: function favourite() {
          var _this8 = this;

          this.loggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (loggedIn) {
            if (loggedIn) {
              _this8.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__["addMovieToFavourites"])({
                payload: {
                  movie: _this8.getMovieObject
                }
              }));
            } else {
              _this8.router.navigate(['/auth/signIn'], {
                queryParams: {
                  ref: _this8.router.url
                }
              });
            }
          });
        }
      }, {
        key: "unfavourite",
        value: function unfavourite() {
          this.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__["removeMovieFromFavourites"])({
            payload: {
              movieId: this.movieOverview.id
            }
          }));
        }
      }, {
        key: "getMovieObject",
        get: function get() {
          return Object.assign(Object.assign({}, this.movieOverview), {
            genre_ids: this.movieOverview.genres.map(function (genre) {
              return genre.id;
            }),
            personalNote: ''
          });
        }
      }]);

      return MovieInfoComponent;
    }();

    MovieInfoComponent.ɵfac = function MovieInfoComponent_Factory(t) {
      return new (t || MovieInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MovieInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieInfoComponent,
      selectors: [["app-movie-info"]],
      inputs: {
        movieOverview: "movieOverview"
      },
      decls: 25,
      vars: 14,
      consts: [[1, "movieInfo"], [3, "movieOverview"], [1, "movieInfo--subtitle"], [4, "ngIf"], [1, "movieInfo--tagline"], [1, "movieInfo--description"], [1, "movieInfo--description-title", "bold"], [1, "movieInfo--description-readMore"], [3, "content", "length"], [1, "movieInfo--description-text"], [1, "movieInfo--bottomRow"], ["class", "movieInfo--rating", 4, "ngIf"], [1, "movieInfo--favourite"], ["class", "button button__secondary", 3, "click", 4, "ngIf", "ngIfElse"], ["alreadyFavourited", ""], [1, "movieInfo--rating"], ["suffix", "", 3, "rating", "styles"], [1, "button", "button__secondary", 3, "click"], [1, "material-icons"]],
      template: function MovieInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieInfoComponent_div_3_Template, 3, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "genres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-read-more", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieInfoComponent_div_19_Template, 3, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieInfoComponent_button_21_Template, 4, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MovieInfoComponent_ng_template_23_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", ctx.movieOverview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieOverview.runtime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.movieOverview.genres));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieOverview.tagline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.movieOverview.overview)("length", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieOverview.overview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieOverview.vote_count > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, ctx.favourite$))("ngIfElse", _r3);
        }
      },
      directives: [_movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_5__["MovieTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ui_components_read_more_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_7__["ReadMoreComponent"], _ui_components_movie_card_movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_8__["MovieRatingComponent"]],
      pipes: [_ui_pipes_genres_genres_pipe__WEBPACK_IMPORTED_MODULE_9__["GenresPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ui_pipes_duration_duration_pipe__WEBPACK_IMPORTED_MODULE_10__["DurationPipe"]],
      styles: [".movieInfo[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  background-color: #121212;\n}\n@media (min-width: 768px) {\n  .movieInfo[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n}\n.movieInfo--title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .movieInfo--title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.movieInfo--title-year[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #919191;\n  margin-left: 7px;\n}\n@media (min-width: 768px) {\n  .movieInfo--title-year[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.movieInfo--subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  color: #bdbdbd;\n  font-size: 14px;\n  padding: 0 15px 10px;\n  border-bottom: 1px solid gray;\n}\n@media (min-width: 768px) {\n  .movieInfo--subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    border-bottom: none;\n  }\n}\n.movieInfo--subtitle[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 7px;\n}\n.movieInfo--subtitle[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)::after {\n  padding-left: 7px;\n  display: inline-block;\n  content: \"\";\n  height: 11px;\n  border-right: 1px solid gray;\n}\n.movieInfo--tagline[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: #919191;\n  border-bottom: 1px solid gray;\n}\n@media (min-width: 768px) {\n  .movieInfo--tagline[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n}\n@media (min-width: 1280px) {\n  .movieInfo--tagline[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n}\n@media (min-width: 768px) {\n  .movieInfo--tagline[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n}\n.movieInfo--description[_ngcontent-%COMP%] {\n  padding: 10px 15px 0;\n  font-size: 14px;\n}\n@media (min-width: 1024px) {\n  .movieInfo--description[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (min-width: 1280px) {\n  .movieInfo--description[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n}\n.movieInfo--description-title[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .movieInfo--description-title[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 20px;\n    margin-bottom: 5px;\n  }\n}\n@media (min-width: 768px) {\n  .movieInfo--description-readMore[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.movieInfo--description-text[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .movieInfo--description-text[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .movieInfo--bottomRow[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.movieInfo--rating[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.movieInfo--rating-high[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.movieInfo--rating-normal[_ngcontent-%COMP%] {\n  background-color: orange;\n}\n.movieInfo--rating-low[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.movieInfo[_ngcontent-%COMP%]   app-movie-rating[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 16px;\n  padding: 5px;\n  margin-right: 5px;\n}\n.movieInfo--favourite[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n.movieInfo--favourite[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.movieInfo--favourite[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtaW5mby9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxjb21wb25lbnRzXFxtb3ZpZS1pbmZvXFxtb3ZpZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1pbmZvL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vdmllcy9jb21wb25lbnRzL21vdmllLWluZm8vbW92aWUtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtaW5mby9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQUE7RUFDQSx5QkNnQlU7QUNsQlo7QUNGRTtFSEVGO0lBS0ksNkJBQUE7RUVERjtBQUNGO0FGR0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBRUZKO0FDYkU7RUhVQTtJQVFJLGVBQUE7RUVESjtBQUNGO0FGR0k7RUFDRSxlQUFBO0VBQ0EsY0NMQztFRE1ELGdCQUFBO0FFRE47QUN2QkU7RUhxQkU7SUFNSSxlQUFBO0VFQU47QUFDRjtBRklFO0VBQ0UsYUFBQTtFQUNBLGNDZlM7RURnQlQsZUFBQTtFQUNBLG9CQUFBO0VBRUEsNkJDckNLO0FDa0NUO0FDbkNFO0VIZ0NBO0lBU0ksZUFBQTtJQUNBLG1CQUFBO0VFRko7QUFDRjtBRklJO0VBQ0UsaUJBQUE7QUVGTjtBRktJO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJDckRHO0FDa0RUO0FGT0U7RUFDRSxrQkFBQTtFQVVBLGNDbkRHO0VEcURILDZCQ3RFSztBQ3VEVDtBQ3hERTtFSDBEQTtJQUlJLGVBQUE7RUVGSjtBQUNGO0FDN0RFO0VIMERBO0lBUUksa0JBQUE7RUVESjtBQUNGO0FDbEVFO0VIMERBO0lBZ0JJLG1CQUFBO0VFSko7QUFDRjtBRk9FO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FFTEo7QUMzRUU7RUg4RUE7SUFLSSxlQUFBO0VFSko7QUFDRjtBQ2hGRTtFSDhFQTtJQVNJLGtCQUFBO0VFSEo7QUFDRjtBRktJO0VBQ0UsYUFBQTtBRUhOO0FDeEZFO0VIMEZFO0lBSUksY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFRUZOO0FBQ0Y7QUMvRkU7RUhvR0U7SUFFSSxhQUFBO0VFSE47QUFDRjtBRk1JO0VBQ0UsYUFBQTtBRUpOO0FDdkdFO0VIMEdFO0lBSUksY0FBQTtFRUhOO0FBQ0Y7QUM1R0U7RUhtSEE7SUFFSSxhQUFBO0VFTEo7QUFDRjtBRlFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FFUEo7QUZTSTtFQUNFLHVCQUFBO0FFUE47QUZTSTtFQUNFLHdCQUFBO0FFUE47QUZTSTtFQUNFLHFCQUFBO0FFUE47QUZXRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUVUSjtBRllFO0VBQ0Usa0JBQUE7QUVWSjtBRllJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FFVk47QUZhSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRVhOIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtaW5mby9tb3ZpZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllSW5mbyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJi0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAmLXllYXIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcblxuICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweCAxMHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICA+IDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIH1cblxuICAgID4gOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMTFweDtcbiAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAmLS10YWdsaW5lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkeGwpIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG5cbiAgICBjb2xvcjogJGdyYXk7XG5cbiAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYtLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbGcpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkeGwpIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1yZWFkTW9yZSB7XG4gICAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtLWJvdHRvbVJvdyB7XG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuXG4gICYtLXJhdGluZyB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYtaGlnaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgJi1ub3JtYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIH1cbiAgICAmLWxvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG5cbiAgYXBwLW1vdmllLXJhdGluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gICYtLWZhdm91cml0ZSB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG4iLCIkaGVhZGVyLWhlaWdodDogNTBweDtcblxuJGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cbi8vIEJyZWFrcG9pbnRzXG4kc206IDQ4MHB4O1xuJG1kOiA3NjhweDtcbiRsZzogMTAyNHB4O1xuJHhsOiAxMjgwcHg7XG4keHhsOiAxNDQwcHg7XG5cbiRmb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiB3aGl0ZTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDUsIDE5NywgMjQpO1xuJGNvbG9yLWRhbmdlcjogcmdiKDI1NSwgNDIsIDQyKTtcblxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiByZ2IoMjA5LCAxNjksIDIyKTtcblxuJGdyYXk6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiRsaWdodC1ncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XG4kZGFyay1ncmF5OiByZ2IoMTgsIDE4LCAxOCk7XG4iLCIubW92aWVJbmZvIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllSW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi5tb3ZpZUluZm8tLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllSW5mby0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuLm1vdmllSW5mby0tdGl0bGUteWVhciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllSW5mby0tdGl0bGUteWVhciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4ubW92aWVJbmZvLS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVJbmZvLS1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cbi5tb3ZpZUluZm8tLXN1YnRpdGxlID4gOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5tb3ZpZUluZm8tLXN1YnRpdGxlID4gOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xufVxuLm1vdmllSW5mby0tdGFnbGluZSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZUluZm8tLXRhZ2xpbmUge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAubW92aWVJbmZvLS10YWdsaW5lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVJbmZvLS10YWdsaW5lIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG4ubW92aWVJbmZvLS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tb3ZpZUluZm8tLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLm1vdmllSW5mby0tZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxufVxuLm1vdmllSW5mby0tZGVzY3JpcHRpb24tdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZUluZm8tLWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllSW5mby0tZGVzY3JpcHRpb24tcmVhZE1vcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tb3ZpZUluZm8tLWRlc2NyaXB0aW9uLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZUluZm8tLWRlc2NyaXB0aW9uLXRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllSW5mby0tYm90dG9tUm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4ubW92aWVJbmZvLS1yYXRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb3ZpZUluZm8tLXJhdGluZy1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4ubW92aWVJbmZvLS1yYXRpbmctbm9ybWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuLm1vdmllSW5mby0tcmF0aW5nLWxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5tb3ZpZUluZm8gYXBwLW1vdmllLXJhdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubW92aWVJbmZvLS1mYXZvdXJpdGUge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4ubW92aWVJbmZvLS1mYXZvdXJpdGUgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW92aWVJbmZvLS1mYXZvdXJpdGUgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCJAbWl4aW4gbWVkaWEoJHNpemUpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzaXplKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-info',
          templateUrl: './movie-info.component.html',
          styleUrls: ['./movie-info.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        movieOverview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-personal-note/movie-personal-note.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/movies/components/movie-personal-note/movie-personal-note.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MoviePersonalNoteComponent */

  /***/
  function srcAppMoviesComponentsMoviePersonalNoteMoviePersonalNoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviePersonalNoteComponent", function () {
      return MoviePersonalNoteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/favourites/favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MoviePersonalNoteComponent = /*#__PURE__*/function () {
      function MoviePersonalNoteComponent(store) {
        _classCallCheck(this, MoviePersonalNoteComponent);

        this.store = store;
        this.personalNoteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(MoviePersonalNoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.favourites.favourites[_this9.movieOverview.id];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (movie) {
            _this9.note.setValue(movie.personalNote);
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_3__["addPersonalNoteToFavourite"])({
            payload: {
              movieId: this.movieOverview.id,
              personalNote: this.note.value
            }
          }));
        }
      }, {
        key: "note",
        get: function get() {
          return this.personalNoteForm.get('note');
        }
      }]);

      return MoviePersonalNoteComponent;
    }();

    MoviePersonalNoteComponent.ɵfac = function MoviePersonalNoteComponent_Factory(t) {
      return new (t || MoviePersonalNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MoviePersonalNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoviePersonalNoteComponent,
      selectors: [["app-movie-personal-note"]],
      inputs: {
        movieOverview: "movieOverview"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "moviePersonalNote"], [3, "formGroup", "ngSubmit"], [1, "textarea"], ["formControlName", "note", "placeholder", "Write anything you would like about this movie", 1, "elevation-1"], [1, "button", "button__secondary"]],
      template: function MoviePersonalNoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MoviePersonalNoteComponent_Template_form_ngSubmit_1_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personalNoteForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".moviePersonalNote[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcGVyc29uYWwtbm90ZS9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxjb21wb25lbnRzXFxtb3ZpZS1wZXJzb25hbC1ub3RlXFxtb3ZpZS1wZXJzb25hbC1ub3RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1wZXJzb25hbC1ub3RlL21vdmllLXBlcnNvbmFsLW5vdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1wZXJzb25hbC1ub3RlL21vdmllLXBlcnNvbmFsLW5vdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVQZXJzb25hbE5vdGUge1xuICB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuIiwiLm1vdmllUGVyc29uYWxOb3RlIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviePersonalNoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-personal-note',
          templateUrl: './movie-personal-note.component.html',
          styleUrls: ['./movie-personal-note.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        movieOverview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-recommendations/movie-recommendations.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/movies/components/movie-recommendations/movie-recommendations.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: MovieRecommendationsComponent */

  /***/
  function srcAppMoviesComponentsMovieRecommendationsMovieRecommendationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieRecommendationsComponent", function () {
      return MovieRecommendationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/components/movie-card/movie-card/movie-card.component */
    "./src/app/ui/components/movie-card/movie-card/movie-card.component.ts");

    function MovieRecommendationsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r2);
      }
    }

    function MovieRecommendationsComponent_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Recommendations ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MovieRecommendationsComponent = /*#__PURE__*/function () {
      function MovieRecommendationsComponent(movieService) {
        _classCallCheck(this, MovieRecommendationsComponent);

        this.movieService = movieService;
      }

      _createClass(MovieRecommendationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recommendations$ = this.movieService.getRecommendations(this.movieId);
        }
      }]);

      return MovieRecommendationsComponent;
    }();

    MovieRecommendationsComponent.ɵfac = function MovieRecommendationsComponent_Factory(t) {
      return new (t || MovieRecommendationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]));
    };

    MovieRecommendationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieRecommendationsComponent,
      selectors: [["app-movie-recommendations"]],
      inputs: {
        movieId: "movieId"
      },
      decls: 5,
      vars: 6,
      consts: [[1, "movieRecommendations"], ["class", "movieRecommendations--movie", 4, "ngFor", "ngForOf"], ["class", "gray movieRecommendations--noRecommendation", 4, "ngIf"], [1, "movieRecommendations--movie"], [3, "movie"], [1, "gray", "movieRecommendations--noRecommendation"]],
      template: function MovieRecommendationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieRecommendationsComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieRecommendationsComponent_i_3_Template, 2, 0, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_1_0 = null;
          var currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.recommendations$)) == null ? null : tmp_1_0.length) === 0;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.recommendations$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__["MovieCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".movieRecommendations[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  margin: 0 -5px;\n}\n.movieRecommendations--movie[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 45%;\n  padding: 5px;\n}\n@media (min-width: 480px) {\n  .movieRecommendations--movie[_ngcontent-%COMP%] {\n    width: 33.3333333333%;\n  }\n}\n@media (min-width: 1024px) {\n  .movieRecommendations--movie[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media (min-width: 1280px) {\n  .movieRecommendations--movie[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (min-width: 1440px) {\n  .movieRecommendations--movie[_ngcontent-%COMP%] {\n    width: 16.6666666667%;\n  }\n}\n.movieRecommendations--noRecommendation[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcmVjb21tZW5kYXRpb25zL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxtb3ZpZXNcXGNvbXBvbmVudHNcXG1vdmllLXJlY29tbWVuZGF0aW9uc1xcbW92aWUtcmVjb21tZW5kYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZWNvbW1lbmRhdGlvbnMvbW92aWUtcmVjb21tZW5kYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZWNvbW1lbmRhdGlvbnMvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUNIRjtBREtFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSEo7QUNSRTtFRlFBO0lBTUkscUJBQUE7RUNGSjtBQUNGO0FDYkU7RUZRQTtJQVVJLFVBQUE7RUNESjtBQUNGO0FDbEJFO0VGUUE7SUFjSSxVQUFBO0VDQUo7QUFDRjtBQ3ZCRTtFRlFBO0lBa0JJLHFCQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0UsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcmVjb21tZW5kYXRpb25zL21vdmllLXJlY29tbWVuZGF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbi5tb3ZpZVJlY29tbWVuZGF0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgbWFyZ2luOiAwIC01cHg7XG5cbiAgJi0tbW92aWUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJHNtKSB7XG4gICAgICB3aWR0aDogcGVyY2VudGFnZSgkbnVtYmVyOiAxIC8gMyk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEoJGxnKSB7XG4gICAgICB3aWR0aDogcGVyY2VudGFnZSgkbnVtYmVyOiAxIC8gNCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEoJHhsKSB7XG4gICAgICB3aWR0aDogcGVyY2VudGFnZSgkbnVtYmVyOiAxIC8gNSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEoJHh4bCkge1xuICAgICAgd2lkdGg6IHBlcmNlbnRhZ2UoJG51bWJlcjogMSAvIDYpO1xuICAgIH1cbiAgfVxuXG4gICYtLW5vUmVjb21tZW5kYXRpb24ge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG4iLCIubW92aWVSZWNvbW1lbmRhdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW46IDAgLTVweDtcbn1cbi5tb3ZpZVJlY29tbWVuZGF0aW9ucy0tbW92aWUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5tb3ZpZVJlY29tbWVuZGF0aW9ucy0tbW92aWUge1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubW92aWVSZWNvbW1lbmRhdGlvbnMtLW1vdmllIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5tb3ZpZVJlY29tbWVuZGF0aW9ucy0tbW92aWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1vdmllUmVjb21tZW5kYXRpb25zLS1tb3ZpZSB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG59XG4ubW92aWVSZWNvbW1lbmRhdGlvbnMtLW5vUmVjb21tZW5kYXRpb24ge1xuICBwYWRkaW5nOiAwIDVweDtcbn0iLCJAbWl4aW4gbWVkaWEoJHNpemUpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzaXplKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieRecommendationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-recommendations',
          templateUrl: './movie-recommendations.component.html',
          styleUrls: ['./movie-recommendations.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
        }];
      }, {
        movieId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-review/movie-review.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/movies/components/movie-review/movie-review.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MovieReviewComponent */

  /***/
  function srcAppMoviesComponentsMovieReviewMovieReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieReviewComponent", function () {
      return MovieReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ui_components_read_more_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ui/components/read-more/read-more/read-more.component */
    "./src/app/ui/components/read-more/read-more/read-more.component.ts");
    /* harmony import */


    var _ui_pipes_markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/pipes/markdown/markdown.pipe */
    "./src/app/ui/pipes/markdown/markdown.pipe.ts");

    var MovieReviewComponent = /*#__PURE__*/function () {
      function MovieReviewComponent(router, route) {
        var _this10 = this;

        _classCallCheck(this, MovieReviewComponent);

        this.router = router;
        this.route = route;
        this.length = 150;
        this.route.paramMap.subscribe(function (paramMap) {
          _this10.id = parseInt(paramMap.get('id'));
        });
      }

      _createClass(MovieReviewComponent, [{
        key: "readMoreClicked",
        value: function readMoreClicked() {
          this.router.navigate(['/movies', this.id, 'reviews', this.review.id], {
            queryParams: {
              ref: this.router.url
            }
          });
        }
      }]);

      return MovieReviewComponent;
    }();

    MovieReviewComponent.ɵfac = function MovieReviewComponent_Factory(t) {
      return new (t || MovieReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    MovieReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieReviewComponent,
      selectors: [["app-movie-review"]],
      inputs: {
        review: "review",
        length: "length"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "movieReview"], [1, "movieReview--author", "bold"], [3, "content", "length", "readMore"]],
      template: function MovieReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-read-more", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("readMore", function MovieReviewComponent_Template_app_read_more_readMore_4_listener() {
            return ctx.readMoreClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "markdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.review.content))("length", ctx.length);
        }
      },
      directives: [_ui_components_read_more_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__["ReadMoreComponent"]],
      pipes: [_ui_pipes_markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_3__["MarkdownPipe"]],
      styles: [".movieReview[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  .movieReview[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.movieReview--author[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcmV2aWV3L0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxtb3ZpZXNcXGNvbXBvbmVudHNcXG1vdmllLXJldmlld1xcbW92aWUtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZXZpZXcvbW92aWUtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZXZpZXcvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7QUNGRjtBQ0RFO0VGRUY7SUFJSSxlQUFBO0VDREY7QUFDRjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZXZpZXcvbW92aWUtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllUmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICYtLWF1dGhvciB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbiIsIi5tb3ZpZVJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVSZXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLm1vdmllUmV2aWV3LS1hdXRob3Ige1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59IiwiQG1peGluIG1lZGlhKCRzaXplKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-review',
          templateUrl: './movie-review.component.html',
          styleUrls: ['./movie-review.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        review: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-reviews/movie-reviews.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/movies/components/movie-reviews/movie-reviews.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MovieReviewsComponent */

  /***/
  function srcAppMoviesComponentsMovieReviewsMovieReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieReviewsComponent", function () {
      return MovieReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../movie-review/movie-review.component */
    "./src/app/movies/components/movie-review/movie-review.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MovieReviewsComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-review", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var review_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r5);
      }
    }

    function MovieReviewsComponent_div_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View All Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MovieReviewsComponent_div_0_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MovieReviewsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieReviewsComponent_div_0_div_2_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieReviewsComponent_div_0_a_3_Template, 2, 0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieReviewsComponent_div_0_i_5_Template, 2, 0, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reviews_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_1_0 = null;
        var currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r0.allReviews$)) == null ? null : tmp_1_0.length) > ctx_r0.showReviewsCount;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reviews_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reviews_r1.length === 0);
      }
    }

    var MovieReviewsComponent = /*#__PURE__*/function () {
      function MovieReviewsComponent(movieService) {
        _classCallCheck(this, MovieReviewsComponent);

        this.movieService = movieService;
        this.showReviewsCount = 3;
      }

      _createClass(MovieReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allReviews$ = this.movieService.getReviews(this.movieId);
          this.reviews$ = this.allReviews$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (review) {
            return review;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(this.showReviewsCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
        }
      }]);

      return MovieReviewsComponent;
    }();

    MovieReviewsComponent.ɵfac = function MovieReviewsComponent_Factory(t) {
      return new (t || MovieReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]));
    };

    MovieReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieReviewsComponent,
      selectors: [["app-movie-reviews"]],
      inputs: {
        movieId: "movieId",
        showReviewsCount: "showReviewsCount"
      },
      decls: 2,
      vars: 3,
      consts: [["class", "movieReviews", 4, "ngIf"], [1, "movieReviews"], [1, "movieReviews--row"], ["class", "movieReviews--review", 4, "ngFor", "ngForOf"], ["routerLink", "reviews", "class", "movieReviews--more", 4, "ngIf"], ["class", "gray", 4, "ngIf"], [1, "movieReviews--review"], [3, "review"], ["routerLink", "reviews", 1, "movieReviews--more"], [1, "gray"]],
      template: function MovieReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieReviewsComponent_div_0_Template, 6, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.reviews$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_4__["MovieReviewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".movieReviews[_ngcontent-%COMP%] {\n  padding: 0 15px 5px;\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  .movieReviews[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.movieReviews--row[_ngcontent-%COMP%] {\n  margin: 0 -5px;\n}\n@media (min-width: 768px) {\n  .movieReviews--row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: auto;\n  }\n}\n.movieReviews--review[_ngcontent-%COMP%] {\n  padding: 0 5px 15px;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .movieReviews--review[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 1280px) {\n  .movieReviews--review[_ngcontent-%COMP%] {\n    width: 33%;\n  }\n}\n.movieReviews--author[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcmV2aWV3cy9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxjb21wb25lbnRzXFxtb3ZpZS1yZXZpZXdzXFxtb3ZpZS1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS1yZXZpZXdzL21vdmllLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9jb21wb25lbnRzL21vdmllLXJldmlld3MvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0VBRUEsZUFBQTtBQ0hGO0FDRkU7RUZFRjtJQU1JLGVBQUE7RUNGRjtBQUNGO0FESUU7RUFDRSxjQUFBO0FDRko7QUNWRTtFRldBO0lBR0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNESjtBQ3JCRTtFRm9CQTtJQUtJLFVBQUE7RUNBSjtBQUNGO0FDMUJFO0VGb0JBO0lBU0ksVUFBQTtFQ0NKO0FBQ0Y7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtcmV2aWV3cy9tb3ZpZS1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllUmV2aWV3cyB7XG4gIHBhZGRpbmc6IDAgMTVweCA1cHg7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICYtLXJvdyB7XG4gICAgbWFyZ2luOiAwIC01cHg7XG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgJi0tcmV2aWV3IHtcbiAgICBwYWRkaW5nOiAwIDVweCAxNXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhKCR4bCkge1xuICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG4gIH1cblxuICAmLS1hdXRob3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4iLCIubW92aWVSZXZpZXdzIHtcbiAgcGFkZGluZzogMCAxNXB4IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZVJldmlld3Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLm1vdmllUmV2aWV3cy0tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllUmV2aWV3cy0tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxufVxuLm1vdmllUmV2aWV3cy0tcmV2aWV3IHtcbiAgcGFkZGluZzogMCA1cHggMTVweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllUmV2aWV3cy0tcmV2aWV3IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5tb3ZpZVJldmlld3MtLXJldmlldyB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxufVxuLm1vdmllUmV2aWV3cy0tYXV0aG9yIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSIsIkBtaXhpbiBtZWRpYSgkc2l6ZSkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNpemUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-reviews',
          templateUrl: './movie-reviews.component.html',
          styleUrls: ['./movie-reviews.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
        }];
      }, {
        movieId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showReviewsCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/components/movie-title/movie-title.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/movies/components/movie-title/movie-title.component.ts ***!
    \************************************************************************/

  /*! exports provided: MovieTitleComponent */

  /***/
  function srcAppMoviesComponentsMovieTitleMovieTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieTitleComponent", function () {
      return MovieTitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MovieTitleComponent = function MovieTitleComponent() {
      _classCallCheck(this, MovieTitleComponent);
    };

    MovieTitleComponent.ɵfac = function MovieTitleComponent_Factory(t) {
      return new (t || MovieTitleComponent)();
    };

    MovieTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieTitleComponent,
      selectors: [["app-movie-title"]],
      inputs: {
        movieOverview: "movieOverview"
      },
      decls: 6,
      vars: 5,
      consts: [[1, "movieTitle"], [1, "bold"], [1, "movieTitle--year"]],
      template: function MovieTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieOverview.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx.movieOverview.release_date, "yyyy"), ")");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".movieTitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .movieTitle[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.movieTitle--year[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #919191;\n  margin-left: 7px;\n}\n@media (min-width: 768px) {\n  .movieTitle--year[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtdGl0bGUvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXG1vdmllc1xcY29tcG9uZW50c1xcbW92aWUtdGl0bGVcXG1vdmllLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvY29tcG9uZW50cy9tb3ZpZS10aXRsZS9tb3ZpZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtdGl0bGUvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbW92aWVzL2NvbXBvbmVudHMvbW92aWUtdGl0bGUvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDSEY7QUNKRTtFRkVGO0lBUUksZUFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNFLGVBQUE7RUFDQSxjR0dHO0VIRkgsZ0JBQUE7QUNGSjtBQ2RFO0VGYUE7SUFNSSxlQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9jb21wb25lbnRzL21vdmllLXRpdGxlL21vdmllLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllVGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gICYtLXllYXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogJGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiLm1vdmllVGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG4ubW92aWVUaXRsZS0teWVhciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5MTkxOTE7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vdmllVGl0bGUtLXllYXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufSIsIkBtaXhpbiBtZWRpYSgkc2l6ZSkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNpemUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG5cbiRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuXG4vLyBCcmVha3BvaW50c1xuJHNtOiA0ODBweDtcbiRtZDogNzY4cHg7XG4kbGc6IDEwMjRweDtcbiR4bDogMTI4MHB4O1xuJHh4bDogMTQ0MHB4O1xuXG4kZm9udC1wcmltYXJ5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogd2hpdGU7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ1LCAxOTcsIDI0KTtcbiRjb2xvci1kYW5nZXI6IHJnYigyNTUsIDQyLCA0Mik7XG5cbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogcmdiKDIwOSwgMTY5LCAyMik7XG5cbiRncmF5OiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG4kbGlnaHQtZ3JheTogcmdiKDE4OSwgMTg5LCAxODkpO1xuJGRhcmstZ3JheTogcmdiKDE4LCAxOCwgMTgpO1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-title',
          templateUrl: './movie-title.component.html',
          styleUrls: ['./movie-title.component.scss']
        }]
      }], null, {
        movieOverview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/movies/movies-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/movies/movies-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MoviesRoutingModule */

  /***/
  function srcAppMoviesMoviesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function () {
      return MoviesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/movies/pages/home/home.component.ts");
    /* harmony import */


    var _pages_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/movie-details/movie-details.component */
    "./src/app/movies/pages/movie-details/movie-details.component.ts");
    /* harmony import */


    var _pages_movie_full_cast_movie_full_cast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/movie-full-cast/movie-full-cast.component */
    "./src/app/movies/pages/movie-full-cast/movie-full-cast.component.ts");
    /* harmony import */


    var _pages_movie_all_reviews_movie_all_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/movie-all-reviews/movie-all-reviews.component */
    "./src/app/movies/pages/movie-all-reviews/movie-all-reviews.component.ts");
    /* harmony import */


    var _pages_movie_full_review_movie_full_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/movie-full-review/movie-full-review.component */
    "./src/app/movies/pages/movie-full-review/movie-full-review.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: ':id',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'movies/:id',
      component: _pages_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"]
    }, {
      path: 'movies/:id/cast',
      component: _pages_movie_full_cast_movie_full_cast_component__WEBPACK_IMPORTED_MODULE_4__["MovieFullCastComponent"]
    }, {
      path: 'movies/:id/reviews',
      component: _pages_movie_all_reviews_movie_all_reviews_component__WEBPACK_IMPORTED_MODULE_5__["MovieAllReviewsComponent"]
    }, {
      path: 'movies/:id/reviews/:reviewId',
      component: _pages_movie_full_review_movie_full_review_component__WEBPACK_IMPORTED_MODULE_6__["MovieFullReviewComponent"]
    }];

    var MoviesRoutingModule = function MoviesRoutingModule() {
      _classCallCheck(this, MoviesRoutingModule);
    };

    MoviesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MoviesRoutingModule
    });
    MoviesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MoviesRoutingModule_Factory(t) {
        return new (t || MoviesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/movies.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/movies/movies.module.ts ***!
    \*****************************************/

  /*! exports provided: MoviesModule */

  /***/
  function srcAppMoviesMoviesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesModule", function () {
      return MoviesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/movies/pages/home/home.component.ts");
    /* harmony import */


    var _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui/pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _movies_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movies-routing.module */
    "./src/app/movies/movies-routing.module.ts");
    /* harmony import */


    var _pages_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/movie-details/movie-details.component */
    "./src/app/movies/pages/movie-details/movie-details.component.ts");
    /* harmony import */


    var _ui_components_read_more_read_more_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ui/components/read-more/read-more.module */
    "./src/app/ui/components/read-more/read-more.module.ts");
    /* harmony import */


    var _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/movie-cast/movie-cast.component */
    "./src/app/movies/components/movie-cast/movie-cast.component.ts");
    /* harmony import */


    var ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/movie-reviews/movie-reviews.component */
    "./src/app/movies/components/movie-reviews/movie-reviews.component.ts");
    /* harmony import */


    var _components_movie_recommendations_movie_recommendations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/movie-recommendations/movie-recommendations.component */
    "./src/app/movies/components/movie-recommendations/movie-recommendations.component.ts");
    /* harmony import */


    var _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/movie-info/movie-info.component */
    "./src/app/movies/components/movie-info/movie-info.component.ts");
    /* harmony import */


    var _pages_movie_full_cast_movie_full_cast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/movie-full-cast/movie-full-cast.component */
    "./src/app/movies/pages/movie-full-cast/movie-full-cast.component.ts");
    /* harmony import */


    var _components_movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/movie-cast-member-image/movie-cast-member-image.component */
    "./src/app/movies/components/movie-cast-member-image/movie-cast-member-image.component.ts");
    /* harmony import */


    var _components_movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/movie-title/movie-title.component */
    "./src/app/movies/components/movie-title/movie-title.component.ts");
    /* harmony import */


    var _pages_movie_all_reviews_movie_all_reviews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/movie-all-reviews/movie-all-reviews.component */
    "./src/app/movies/pages/movie-all-reviews/movie-all-reviews.component.ts");
    /* harmony import */


    var _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/movie-go-back/movie-go-back.component */
    "./src/app/movies/components/movie-go-back/movie-go-back.component.ts");
    /* harmony import */


    var _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/movie-review/movie-review.component */
    "./src/app/movies/components/movie-review/movie-review.component.ts");
    /* harmony import */


    var _pages_movie_full_review_movie_full_review_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/movie-full-review/movie-full-review.component */
    "./src/app/movies/pages/movie-full-review/movie-full-review.component.ts");
    /* harmony import */


    var _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../ui/components/image/image.module */
    "./src/app/ui/components/image/image.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_movies_movies_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../store/movies/movies.reducer */
    "./src/app/store/movies/movies.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_movies_movies_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../store/movies/movies.effects */
    "./src/app/store/movies/movies.effects.ts");
    /* harmony import */


    var _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../ui/components/movie-card/movie-card.module */
    "./src/app/ui/components/movie-card/movie-card.module.ts");
    /* harmony import */


    var _components_movie_personal_note_movie_personal_note_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/movie-personal-note/movie-personal-note.component */
    "./src/app/movies/components/movie-personal-note/movie-personal-note.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MoviesModule = function MoviesModule() {
      _classCallCheck(this, MoviesModule);
    };

    MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MoviesModule,
      bootstrap: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
    });
    MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MoviesModule_Factory(t) {
        return new (t || MoviesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesRoutingModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _ui_components_read_more_read_more_module__WEBPACK_IMPORTED_MODULE_6__["ReadMoreModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_19__["ImageModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreModule"].forFeature('movies', _store_movies_movies_reducer__WEBPACK_IMPORTED_MODULE_21__["moviesReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsModule"].forFeature([_store_movies_movies_effects__WEBPACK_IMPORTED_MODULE_23__["MovieEffects"]]), _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_24__["MovieCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, {
        declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _pages_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"], _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_7__["MovieCastComponent"], _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_9__["MovieReviewsComponent"], _components_movie_recommendations_movie_recommendations_component__WEBPACK_IMPORTED_MODULE_10__["MovieRecommendationsComponent"], _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_11__["MovieInfoComponent"], _pages_movie_full_cast_movie_full_cast_component__WEBPACK_IMPORTED_MODULE_12__["MovieFullCastComponent"], _components_movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_13__["MovieCastMemberImageComponent"], _components_movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_14__["MovieTitleComponent"], _pages_movie_all_reviews_movie_all_reviews_component__WEBPACK_IMPORTED_MODULE_15__["MovieAllReviewsComponent"], _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_16__["MovieGoBackComponent"], _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_17__["MovieReviewComponent"], _pages_movie_full_review_movie_full_review_component__WEBPACK_IMPORTED_MODULE_18__["MovieFullReviewComponent"], _components_movie_personal_note_movie_personal_note_component__WEBPACK_IMPORTED_MODULE_25__["MoviePersonalNoteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesRoutingModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _ui_components_read_more_read_more_module__WEBPACK_IMPORTED_MODULE_6__["ReadMoreModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_19__["ImageModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsFeatureModule"], _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_24__["MovieCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _pages_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"], _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_7__["MovieCastComponent"], _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_9__["MovieReviewsComponent"], _components_movie_recommendations_movie_recommendations_component__WEBPACK_IMPORTED_MODULE_10__["MovieRecommendationsComponent"], _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_11__["MovieInfoComponent"], _pages_movie_full_cast_movie_full_cast_component__WEBPACK_IMPORTED_MODULE_12__["MovieFullCastComponent"], _components_movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_13__["MovieCastMemberImageComponent"], _components_movie_title_movie_title_component__WEBPACK_IMPORTED_MODULE_14__["MovieTitleComponent"], _pages_movie_all_reviews_movie_all_reviews_component__WEBPACK_IMPORTED_MODULE_15__["MovieAllReviewsComponent"], _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_16__["MovieGoBackComponent"], _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_17__["MovieReviewComponent"], _pages_movie_full_review_movie_full_review_component__WEBPACK_IMPORTED_MODULE_18__["MovieFullReviewComponent"], _components_movie_personal_note_movie_personal_note_component__WEBPACK_IMPORTED_MODULE_25__["MoviePersonalNoteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesRoutingModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _ui_components_read_more_read_more_module__WEBPACK_IMPORTED_MODULE_6__["ReadMoreModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_8__["InlineSVGModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_19__["ImageModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreModule"].forFeature('movies', _store_movies_movies_reducer__WEBPACK_IMPORTED_MODULE_21__["moviesReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_22__["EffectsModule"].forFeature([_store_movies_movies_effects__WEBPACK_IMPORTED_MODULE_23__["MovieEffects"]]), _ui_components_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_24__["MovieCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"]],
          bootstrap: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/pages/home/home.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/movies/pages/home/home.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppMoviesPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/operators/take */
    "./node_modules/rxjs/internal/operators/take.js");
    /* harmony import */


    var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/movies/movies.actions */
    "./src/app/store/movies/movies.actions.ts");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../ui/components/movie-card/movie-card/movie-card.component */
    "./src/app/ui/components/movie-card/movie-card/movie-card.component.ts");

    function HomeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(movieService, store) {
        _classCallCheck(this, HomeComponent);

        this.movieService = movieService;
        this.store = store;
        this.pageId = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.movies.popularMovies;
          }));
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.movies.currentPage;
          }), Object(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (page) {
            if (page === 1) {
              _this11.loadMore();
            }
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          this.store.dispatch(Object(src_app_store_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__["nextPage"])());
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 3,
      consts: [[1, "home", "movieGrid"], [1, "container"], [1, "title"], [1, "movieGrid--row"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "click"], [1, "col"], [3, "movie"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_7_listener() {
            return ctx.loadMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.movies$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ui_components_movie_card_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_6__["MovieCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/pages/movie-all-reviews/movie-all-reviews.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/movies/pages/movie-all-reviews/movie-all-reviews.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MovieAllReviewsComponent */

  /***/
  function srcAppMoviesPagesMovieAllReviewsMovieAllReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieAllReviewsComponent", function () {
      return MovieAllReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/movie-go-back/movie-go-back.component */
    "./src/app/movies/components/movie-go-back/movie-go-back.component.ts");
    /* harmony import */


    var _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/movie-review/movie-review.component */
    "./src/app/movies/components/movie-review/movie-review.component.ts");

    function MovieAllReviewsComponent_app_movie_go_back_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-go-back", 4);
      }

      if (rf & 2) {
        var movieOverview_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r2);
      }
    }

    function MovieAllReviewsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-review", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var review_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r3)("length", 300);
      }
    }

    var MovieAllReviewsComponent = function MovieAllReviewsComponent(route, movieService) {
      var _this12 = this;

      _classCallCheck(this, MovieAllReviewsComponent);

      this.route = route;
      this.movieService = movieService;
      this.route.paramMap.subscribe(function (paramMap) {
        _this12.id = parseInt(paramMap.get('id'));
        _this12.reviews$ = _this12.movieService.getReviews(_this12.id);
        _this12.movieOverview$ = _this12.movieService.getMovieDetails(_this12.id);
      });
    };

    MovieAllReviewsComponent.ɵfac = function MovieAllReviewsComponent_Factory(t) {
      return new (t || MovieAllReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]));
    };

    MovieAllReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieAllReviewsComponent,
      selectors: [["app-movie-all-reviews"]],
      decls: 7,
      vars: 6,
      consts: [[1, "container", "movieAllReviews"], [3, "movieOverview", 4, "ngIf"], [1, "title"], ["class", "movieAllReviews--review", 4, "ngFor", "ngForOf"], [3, "movieOverview"], [1, "movieAllReviews--review"], [3, "review", "length"]],
      template: function MovieAllReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieAllReviewsComponent_app_movie_go_back_1_Template, 1, 1, "app-movie-go-back", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieAllReviewsComponent_div_5_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.movieOverview$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.reviews$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_4__["MovieGoBackComponent"], _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_5__["MovieReviewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".movieAllReviews[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n@media (min-width: 768px) {\n  .movieAllReviews[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n.movieAllReviews--review[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  border-bottom: 1px solid gray;\n}\n.movieAllReviews--review[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWFsbC1yZXZpZXdzL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxtb3ZpZXNcXHBhZ2VzXFxtb3ZpZS1hbGwtcmV2aWV3c1xcbW92aWUtYWxsLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1hbGwtcmV2aWV3cy9tb3ZpZS1hbGwtcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWFsbC1yZXZpZXdzL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1hbGwtcmV2aWV3cy9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7QUNGRjtBQ0RFO0VGRUY7SUFJSSxlQUFBO0VDREY7QUFDRjtBREdFO0VBQ0UsZUFBQTtFQUNBLDZCR1ZLO0FGU1Q7QURJRTtFQUNFLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvcGFnZXMvbW92aWUtYWxsLXJldmlld3MvbW92aWUtYWxsLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4ubW92aWVBbGxSZXZpZXdzIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gICYtLXJldmlldyB7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XG4gIH1cblxuICAmLS1yZXZpZXc6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufVxuIiwiLm1vdmllQWxsUmV2aWV3cyB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVBbGxSZXZpZXdzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cbi5tb3ZpZUFsbFJldmlld3MtLXJldmlldyB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4ubW92aWVBbGxSZXZpZXdzLS1yZXZpZXc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59IiwiQG1peGluIG1lZGlhKCRzaXplKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIkaGVhZGVyLWhlaWdodDogNTBweDtcblxuJGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cbi8vIEJyZWFrcG9pbnRzXG4kc206IDQ4MHB4O1xuJG1kOiA3NjhweDtcbiRsZzogMTAyNHB4O1xuJHhsOiAxMjgwcHg7XG4keHhsOiAxNDQwcHg7XG5cbiRmb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiB3aGl0ZTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDUsIDE5NywgMjQpO1xuJGNvbG9yLWRhbmdlcjogcmdiKDI1NSwgNDIsIDQyKTtcblxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiByZ2IoMjA5LCAxNjksIDIyKTtcblxuJGdyYXk6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiRsaWdodC1ncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XG4kZGFyay1ncmF5OiByZ2IoMTgsIDE4LCAxOCk7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieAllReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-all-reviews',
          templateUrl: './movie-all-reviews.component.html',
          styleUrls: ['./movie-all-reviews.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/pages/movie-details/movie-details.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/movies/pages/movie-details/movie-details.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MovieDetailsComponent */

  /***/
  function srcAppMoviesPagesMovieDetailsMovieDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function () {
      return MovieDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../ui/components/image/image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/movie-info/movie-info.component */
    "./src/app/movies/components/movie-info/movie-info.component.ts");
    /* harmony import */


    var _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/movie-cast/movie-cast.component */
    "./src/app/movies/components/movie-cast/movie-cast.component.ts");
    /* harmony import */


    var _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/movie-reviews/movie-reviews.component */
    "./src/app/movies/components/movie-reviews/movie-reviews.component.ts");
    /* harmony import */


    var _components_movie_recommendations_movie_recommendations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/movie-recommendations/movie-recommendations.component */
    "./src/app/movies/components/movie-recommendations/movie-recommendations.component.ts");
    /* harmony import */


    var _ui_components_movie_card_movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../ui/components/movie-card/movie-rating/movie-rating.component */
    "./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts");
    /* harmony import */


    var _components_movie_personal_note_movie_personal_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/movie-personal-note/movie-personal-note.component */
    "./src/app/movies/components/movie-personal-note/movie-personal-note.component.ts");

    var _c0 = function _c0() {
      return {
        high: "details--image-rating-high",
        normal: "details--image-rating-normal",
        low: "details--image-rating-low"
      };
    };

    function MovieDetailsComponent_div_0_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-rating", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movieOverview_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", movieOverview_r1.vote_average)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function MovieDetailsComponent_div_0_section_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personal Note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-movie-personal-note", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movieOverview_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r1);
      }
    }

    function MovieDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-image", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-image", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-image", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-image", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-image", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovieDetailsComponent_div_0_div_16_Template, 2, 3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-image", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-image", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-image", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-image", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-image", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-image", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-movie-info", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-movie-info", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Movie Cast");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-movie-cast", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Release Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Homepage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Budget");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-movie-reviews", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Recommendations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-movie-recommendations", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MovieDetailsComponent_div_0_section_64_Template, 4, 1, "section", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movieOverview_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.backdrop_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movieOverview_r1.vote_count > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", movieOverview_r1.poster_path)("aspectRatio", 3 / 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieId", movieOverview_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 29, movieOverview_r1.release_date, "dd/MM/yyyy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", movieOverview_r1.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieOverview_r1.homepage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 32, movieOverview_r1.budget), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieId", movieOverview_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieId", movieOverview_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 34, ctx_r0.favourited$));
      }
    }

    var MovieDetailsComponent = /*#__PURE__*/function () {
      function MovieDetailsComponent(route, movieService, store) {
        var _this13 = this;

        _classCallCheck(this, MovieDetailsComponent);

        this.route = route;
        this.movieService = movieService;
        this.store = store;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.route.paramMap.subscribe(function (paramMap) {
          _this13.id = parseInt(paramMap.get('id'));
          _this13.movieOverview$ = movieService.getMovieDetails(_this13.id);

          _this13.movieOverview$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this13.destroyed$)).subscribe(function (movieOverview) {
            _this13.favourited$ = _this13.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
              return state.favourites.favourites && state.favourites.favourites[movieOverview.id] !== undefined;
            }));
          });
        });
      }

      _createClass(MovieDetailsComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }]);

      return MovieDetailsComponent;
    }();

    MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) {
      return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieDetailsComponent,
      selectors: [["app-movie-details"]],
      decls: 2,
      vars: 3,
      consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "details--image"], [1, "details--image-backdrop"], [1, "details--poster-xs"], [3, "path"], [1, "details--poster-sm"], ["posterSize", "w780", "height", "100%", 3, "path"], [1, "details--poster-md"], ["posterSize", "w780", 3, "path"], [1, "details--poster-lg"], [1, "details--poster-xl"], ["posterSize", "w1280", "width", "1280px", "height", "100%", 3, "path"], [1, "details--poster-xxl"], [1, "details--image-backdrop-gradient"], ["class", "details--image-rating bold", 4, "ngIf"], [1, "container", "details--image-container"], [1, "details--image-poster"], ["posterSize", "w92", "width", "92px", 1, "details--poster-xs", "details--image-poster-image", 3, "path", "aspectRatio"], ["posterSize", "w154", "width", "154px", 1, "details--poster-sm", "details--image-poster-image", 3, "path", "aspectRatio"], ["posterSize", "w185", "width", "185px", 1, "details--poster-md", "details--image-poster-image", 3, "path", "aspectRatio"], ["posterSize", "w185", "width", "185px", 1, "details--poster-lg", "details--image-poster-image", 3, "path", "aspectRatio"], ["posterSize", "w342", "width", "342px", 1, "details--poster-xl", "details--image-poster-image", 3, "path", "aspectRatio"], ["posterSize", "w342", "width", "342px", 1, "details--poster-xxl", "details--image-poster-image", 3, "path", "aspectRatio"], [1, "details--image-info"], [3, "movieOverview"], [1, "details--info"], [1, "container"], [1, "details--title", "title"], [3, "movieId"], [1, "details--details"], [1, "title"], [1, ""], [1, "details--detail"], [1, "bold"], [1, "details--details-value"], [3, "href"], [1, "details--recommendations"], ["id", "personalNote", "class", "details--personalNote", 4, "ngIf"], [1, "details--image-rating", "bold"], [3, "rating", "styles"], ["id", "personalNote", 1, "details--personalNote"]],
      template: function MovieDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_0_Template, 66, 36, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.movieOverview$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_7__["ImageComponent"], _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_8__["MovieInfoComponent"], _components_movie_cast_movie_cast_component__WEBPACK_IMPORTED_MODULE_9__["MovieCastComponent"], _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__["MovieReviewsComponent"], _components_movie_recommendations_movie_recommendations_component__WEBPACK_IMPORTED_MODULE_11__["MovieRecommendationsComponent"], _ui_components_movie_card_movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_12__["MovieRatingComponent"], _components_movie_personal_note_movie_personal_note_component__WEBPACK_IMPORTED_MODULE_13__["MoviePersonalNoteComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: [".details[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n}\n@media (min-width: 480px) {\n  .details--poster-xs[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--poster-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 480px) {\n  .details--poster-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .details--poster-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--poster-md[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .details--poster-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n  .details--poster-md[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--poster-lg[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .details--poster-lg[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 1280px) {\n  .details--poster-lg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--poster-xl[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1280px) {\n  .details--poster-xl[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 1440px) {\n  .details--poster-xl[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--poster-xxl[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1440px) {\n  .details--poster-xxl[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.details--image[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (min-width: 480px) {\n  .details--image-backdrop[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    width: 100%;\n    max-height: 350px;\n    -o-object-fit: none;\n       object-fit: none;\n    -o-object-position: right top;\n       object-position: right top;\n  }\n}\n@media (min-width: 768px) {\n  .details--image-backdrop[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n    height: 430px;\n    width: auto;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    -o-object-fit: none;\n       object-fit: none;\n  }\n}\n@media (min-width: 1024px) {\n  .details--image-backdrop[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n    height: 439px;\n  }\n}\n@media (min-width: 1280px) {\n  .details--image-backdrop[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n}\n@media (min-width: 1440px) {\n  .details--image-backdrop[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n    height: 720px;\n  }\n}\n.details--image-backdrop-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, black 0%, rgba(0, 0, 0, 0.8883928571) 25%, rgba(0, 0, 0, 0) 100%);\n}\n@media (min-width: 768px) {\n  .details--image-backdrop-gradient[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, black 0%, black 35%, rgba(0, 0, 0, 0.3617822129) 100%);\n  }\n}\n.details--image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  padding: 0 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .details--image-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.details--image-poster[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.details--image-poster-image[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.details--image-rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px 5px;\n  font-size: 14px;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-bottom-left-radius: 5px;\n}\n@media (min-width: 768px) {\n  .details--image-rating[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--image-rating-high[_ngcontent-%COMP%] {\n  color: green;\n}\n.details--image-rating-normal[_ngcontent-%COMP%] {\n  color: orange;\n}\n.details--image-rating-low[_ngcontent-%COMP%] {\n  color: red;\n}\n.details--image-info[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .details--image-info[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .details--info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.details--title[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.details--details[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  padding: 5px 15px;\n  background: #121212;\n}\n.details--details-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  .details--details-value[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.details--detail[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.details--detail[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.details--detail[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.details--recommendations[_ngcontent-%COMP%] {\n  background-color: #121212;\n  padding: 5px 15px;\n}\n.details--personalNote[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWRldGFpbHMvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXG1vdmllc1xccGFnZXNcXG1vdmllLWRldGFpbHNcXG1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1kZXRhaWxzL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1kZXRhaWxzL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FDRkU7RUZPRTtJQUVJLGFBQUE7RUNITjtBQUNGO0FETUk7RUFDRSxhQUFBO0FDSk47QUNWRTtFRmFFO0lBR0ksY0FBQTtFQ0ZOO0FBQ0Y7QUNmRTtFRmFFO0lBTUksYUFBQTtFQ0FOO0FBQ0Y7QURHSTtFQUNFLGFBQUE7QUNETjtBQ3ZCRTtFRnVCRTtJQUdJLGNBQUE7RUNDTjtBQUNGO0FDNUJFO0VGdUJFO0lBTUksYUFBQTtFQ0dOO0FBQ0Y7QURBSTtFQUNFLGFBQUE7QUNFTjtBQ3BDRTtFRmlDRTtJQUdJLGNBQUE7RUNJTjtBQUNGO0FDekNFO0VGaUNFO0lBTUksYUFBQTtFQ01OO0FBQ0Y7QURISTtFQUNFLGFBQUE7QUNLTjtBQ2pERTtFRjJDRTtJQUdJLGNBQUE7RUNPTjtBQUNGO0FDdERFO0VGMkNFO0lBTUksYUFBQTtFQ1NOO0FBQ0Y7QUROSTtFQUNFLGFBQUE7QUNRTjtBQzlERTtFRnFERTtJQUdJLGNBQUE7RUNVTjtBQUNGO0FETkU7RUFDRSxrQkFBQTtBQ1FKO0FDdEVFO0VGaUVJO0lBRUksYUFBQTtJQUNBLDJCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7T0FBQSxnQkFBQTtJQUNBLDZCQUFBO09BQUEsMEJBQUE7RUNPUjtBQUNGO0FDaEZFO0VGaUVJO0lBVUksYUFBQTtJQUNBLFdBQUE7SUFDQSwrQkFBQTtJQUFBLDRCQUFBO0lBQUEsdUJBQUE7SUFDQSxtQkFBQTtPQUFBLGdCQUFBO0VDU1I7QUFDRjtBQ3hGRTtFRmlFSTtJQWdCSSxhQUFBO0VDV1I7QUFDRjtBQzdGRTtFRmlFSTtJQW1CSSxhQUFBO0VDYVI7QUFDRjtBQ2xHRTtFRmlFSTtJQXNCSSxhQUFBO0VDZVI7QUFDRjtBRFpNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsb0dBQUE7QUNhUjtBQy9HRTtFRjJGSTtJQWVJLHlGQUFBO0VDU1I7QUFDRjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjtBQzlIRTtFRm9IRTtJQVdJLFVBQUE7RUNHTjtBQUNGO0FEQUk7RUFDRSxjQUFBO0FDRU47QURBTTtFQUNFLGtCQUFBO0FDRVI7QURFSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FDQU47QUNsSkU7RUYySUU7SUFVSSxhQUFBO0VDQ047QUFDRjtBRENNO0VBQ0UsWUFBQTtBQ0NSO0FEQ007RUFDRSxhQUFBO0FDQ1I7QURDTTtFQUNFLFVBQUE7QUNDUjtBREdJO0VBQ0UsYUFBQTtBQ0ROO0FDbktFO0VGbUtFO0lBR0ksY0FBQTtFQ0NOO0FBQ0Y7QUN4S0U7RUYyS0E7SUFFSSxhQUFBO0VDREo7QUFDRjtBRElFO0VBQ0UsaUJBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJHcEtRO0FGaUtaO0FES0k7RUFDRSxlQUFBO0FDSE47QUN4TEU7RUYwTEU7SUFHSSxlQUFBO0VDRE47QUFDRjtBREtFO0VBQ0UsY0FBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0FDSko7QURPRTtFQUNFLGlCQUFBO0FDTEo7QURRRTtFQUNFLHlCRzNMUTtFSDRMUixpQkFBQTtBQ05KO0FEU0U7RUFDRSxpQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbi5kZXRhaWxzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcblxuICAmLS1wb3N0ZXIge1xuICAgICYteHMge1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJHNtKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1zbSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJHNtKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1tZCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEoJGxnKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1sZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJGxnKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEoJHhsKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi14bCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJHhsKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgbWVkaWEoJHh4bCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICYteHhsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAaW5jbHVkZSBtZWRpYSgkeHhsKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLWJhY2tkcm9wIHtcbiAgICAgIGFwcC1pbWFnZSB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKCRzbSkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IG5vbmU7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiByaWdodCB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgICAgaGVpZ2h0OiA0MzBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICBvYmplY3QtZml0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKCRsZykge1xuICAgICAgICAgIGhlaWdodDogNDM5cHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoJHhsKSB7XG4gICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYSgkeHhsKSB7XG4gICAgICAgICAgaGVpZ2h0OiA3MjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWdyYWRpZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjg4ODM5Mjg1NzE0Mjg1NzEpIDI1JSxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcbiAgICAgICAgKTtcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMCUsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDM1JSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zNjE3ODIyMTI4ODUxNTQxKSAxMDAlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjBweDtcbiAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXBvc3RlciB7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgJi1pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXJhdGluZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNyk7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLWhpZ2gge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG4gICAgICAmLW5vcm1hbCB7XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICB9XG4gICAgICAmLWxvdyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi0taW5mbyB7XG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYtLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gICYtLWRldGFpbHMge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogJGRhcmstZ3JheTtcblxuICAgICYtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLS1kZXRhaWwge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgJi0tZGV0YWlsOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gICYtLWRldGFpbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gICYtLXJlY29tbWVuZGF0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JheTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgfVxuXG4gICYtLXBlcnNvbmFsTm90ZSB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gIH1cbn1cbiIsIi5kZXRhaWxzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuZGV0YWlscy0tcG9zdGVyLXhzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGV0YWlscy0tcG9zdGVyLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuZGV0YWlscy0tcG9zdGVyLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzLS1wb3N0ZXItc20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kZXRhaWxzLS1wb3N0ZXItbWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzLS1wb3N0ZXItbWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5kZXRhaWxzLS1wb3N0ZXItbWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kZXRhaWxzLS1wb3N0ZXItbGcge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZGV0YWlscy0tcG9zdGVyLWxnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuZGV0YWlscy0tcG9zdGVyLWxnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGV0YWlscy0tcG9zdGVyLXhsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmRldGFpbHMtLXBvc3Rlci14bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmRldGFpbHMtLXBvc3Rlci14bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmRldGFpbHMtLXBvc3Rlci14eGwge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuZGV0YWlscy0tcG9zdGVyLXh4bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5kZXRhaWxzLS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuZGV0YWlscy0taW1hZ2UtYmFja2Ryb3AgYXBwLWltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICBvYmplY3QtZml0OiBub25lO1xuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQgdG9wO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmRldGFpbHMtLWltYWdlLWJhY2tkcm9wIGFwcC1pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MzBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBvYmplY3QtZml0OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5kZXRhaWxzLS1pbWFnZS1iYWNrZHJvcCBhcHAtaW1hZ2Uge1xuICAgIGhlaWdodDogNDM5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmRldGFpbHMtLWltYWdlLWJhY2tkcm9wIGFwcC1pbWFnZSB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuZGV0YWlscy0taW1hZ2UtYmFja2Ryb3AgYXBwLWltYWdlIHtcbiAgICBoZWlnaHQ6IDcyMHB4O1xuICB9XG59XG4uZGV0YWlscy0taW1hZ2UtYmFja2Ryb3AtZ3JhZGllbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjg4ODM5Mjg1NzEpIDI1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGV0YWlscy0taW1hZ2UtYmFja2Ryb3AtZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgYmxhY2sgMCUsIGJsYWNrIDM1JSwgcmdiYSgwLCAwLCAwLCAwLjM2MTc4MjIxMjkpIDEwMCUpO1xuICB9XG59XG4uZGV0YWlscy0taW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGV0YWlscy0taW1hZ2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4uZGV0YWlscy0taW1hZ2UtcG9zdGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZGV0YWlscy0taW1hZ2UtcG9zdGVyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRldGFpbHMtLWltYWdlLXJhdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmRldGFpbHMtLWltYWdlLXJhdGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmRldGFpbHMtLWltYWdlLXJhdGluZy1oaWdoIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmRldGFpbHMtLWltYWdlLXJhdGluZy1ub3JtYWwge1xuICBjb2xvcjogb3JhbmdlO1xufVxuLmRldGFpbHMtLWltYWdlLXJhdGluZy1sb3cge1xuICBjb2xvcjogcmVkO1xufVxuLmRldGFpbHMtLWltYWdlLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzLS1pbWFnZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzLS1pbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGV0YWlscy0tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5kZXRhaWxzLS1kZXRhaWxzIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMxMjEyMTI7XG59XG4uZGV0YWlscy0tZGV0YWlscy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGV0YWlscy0tZGV0YWlscy12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZGV0YWlscy0tZGV0YWlsIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uZGV0YWlscy0tZGV0YWlsOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uZGV0YWlscy0tZGV0YWlsOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5kZXRhaWxzLS1yZWNvbW1lbmRhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5kZXRhaWxzLS1wZXJzb25hbE5vdGUge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn0iLCJAbWl4aW4gbWVkaWEoJHNpemUpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzaXplKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xuXG4kYm9yZGVyOiAxcHggc29saWQgZ3JheTtcblxuLy8gQnJlYWtwb2ludHNcbiRzbTogNDgwcHg7XG4kbWQ6IDc2OHB4O1xuJGxnOiAxMDI0cHg7XG4keGw6IDEyODBweDtcbiR4eGw6IDE0NDBweDtcblxuJGZvbnQtcHJpbWFyeTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcblxuJGNvbG9yLXByaW1hcnk6IHdoaXRlO1xuJGNvbG9yLXNlY29uZGFyeTogcmdiKDI0NSwgMTk3LCAyNCk7XG4kY29sb3ItZGFuZ2VyOiByZ2IoMjU1LCA0MiwgNDIpO1xuXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6IHJnYigyMDksIDE2OSwgMjIpO1xuXG4kZ3JheTogcmdiKDE0NSwgMTQ1LCAxNDUpO1xuJGxpZ2h0LWdyYXk6IHJnYigxODksIDE4OSwgMTg5KTtcbiRkYXJrLWdyYXk6IHJnYigxOCwgMTgsIDE4KTtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-details',
          templateUrl: './movie-details.component.html',
          styleUrls: ['./movie-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/pages/movie-full-cast/movie-full-cast.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/movies/pages/movie-full-cast/movie-full-cast.component.ts ***!
    \***************************************************************************/

  /*! exports provided: MovieFullCastComponent */

  /***/
  function srcAppMoviesPagesMovieFullCastMovieFullCastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieFullCastComponent", function () {
      return MovieFullCastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/movie-go-back/movie-go-back.component */
    "./src/app/movies/components/movie-go-back/movie-go-back.component.ts");
    /* harmony import */


    var _components_movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/movie-cast-member-image/movie-cast-member-image.component */
    "./src/app/movies/components/movie-cast-member-image/movie-cast-member-image.component.ts");

    function MovieFullCastComponent_app_movie_go_back_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-go-back", 5);
      }

      if (rf & 2) {
        var movieOverview_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r2);
      }
    }

    function MovieFullCastComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-movie-cast-member-image", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var castMember_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("castMember", castMember_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](castMember_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](castMember_r3.character);
      }
    }

    var MovieFullCastComponent = function MovieFullCastComponent(route, movieService) {
      var _this14 = this;

      _classCallCheck(this, MovieFullCastComponent);

      this.route = route;
      this.movieService = movieService;
      this.route.paramMap.subscribe(function (paramMap) {
        _this14.id = parseInt(paramMap.get('id'));
        _this14.cast$ = _this14.movieService.getCast(_this14.id);
        _this14.movieOverview$ = _this14.movieService.getMovieDetails(_this14.id);
      });
    };

    MovieFullCastComponent.ɵfac = function MovieFullCastComponent_Factory(t) {
      return new (t || MovieFullCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]));
    };

    MovieFullCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieFullCastComponent,
      selectors: [["app-movie-full-cast"]],
      decls: 8,
      vars: 6,
      consts: [[1, "container", "movieFullCast"], [3, "movieOverview", 4, "ngIf"], [1, "title"], [1, "movieFullCast--row"], ["class", "movieFullCast--col", 4, "ngFor", "ngForOf"], [3, "movieOverview"], [1, "movieFullCast--col"], [1, "movieFullCast--image"], ["size", "w92", "width", "92px", 3, "castMember"], [1, "movieFullCast--col-info"], [1, "bold"], [1, "gray"]],
      template: function MovieFullCastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieFullCastComponent_app_movie_go_back_1_Template, 1, 1, "app-movie-go-back", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieFullCastComponent_div_6_Template, 8, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.movieOverview$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.cast$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_4__["MovieGoBackComponent"], _components_movie_cast_member_image_movie_cast_member_image_component__WEBPACK_IMPORTED_MODULE_5__["MovieCastMemberImageComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".movieFullCast[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 15px;\n}\n@media (min-width: 768px) {\n  .movieFullCast[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n.movieFullCast--movie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.movieFullCast--movie[_ngcontent-%COMP%]   app-iamge[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n}\n.movieFullCast--movie[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.movieFullCast--row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.movieFullCast--col[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .movieFullCast--col[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.movieFullCast--col-info[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWZ1bGwtY2FzdC9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbW92aWVzXFxwYWdlc1xcbW92aWUtZnVsbC1jYXN0XFxtb3ZpZS1mdWxsLWNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1mdWxsLWNhc3QvbW92aWUtZnVsbC1jYXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvcGFnZXMvbW92aWUtZnVsbC1jYXN0L0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBRUEsa0JBQUE7QUNIRjtBQ0ZFO0VGRUY7SUFLSSxlQUFBO0VDREY7QUFDRjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURNRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTEo7QUM1QkU7RUY2QkE7SUFPSSxVQUFBO0VDSko7QUFDRjtBRE1JO0VBQ0Usa0JBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1mdWxsLWNhc3QvbW92aWUtZnVsbC1jYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllRnVsbENhc3Qge1xuICBjb2xvcjogd2hpdGU7XG5cbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAmLS1tb3ZpZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYXBwLWlhbWdlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICB9XG4gIH1cblxuICAmLS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgJi0tY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYtaW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCIubW92aWVGdWxsQ2FzdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZUZ1bGxDYXN0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cbi5tb3ZpZUZ1bGxDYXN0LS1tb3ZpZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW92aWVGdWxsQ2FzdC0tbW92aWUgYXBwLWlhbWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW92aWVGdWxsQ2FzdC0tbW92aWUgYSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5tb3ZpZUZ1bGxDYXN0LS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubW92aWVGdWxsQ2FzdC0tY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW92aWVGdWxsQ2FzdC0tY29sIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4ubW92aWVGdWxsQ2FzdC0tY29sLWluZm8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59IiwiQG1peGluIG1lZGlhKCRzaXplKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieFullCastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-full-cast',
          templateUrl: './movie-full-cast.component.html',
          styleUrls: ['./movie-full-cast.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/pages/movie-full-review/movie-full-review.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/movies/pages/movie-full-review/movie-full-review.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MovieFullReviewComponent */

  /***/
  function srcAppMoviesPagesMovieFullReviewMovieFullReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieFullReviewComponent", function () {
      return MovieFullReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/movie-go-back/movie-go-back.component */
    "./src/app/movies/components/movie-go-back/movie-go-back.component.ts");
    /* harmony import */


    var _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/movie-review/movie-review.component */
    "./src/app/movies/components/movie-review/movie-review.component.ts");

    function MovieFullReviewComponent_app_movie_go_back_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-go-back", 4);
      }

      if (rf & 2) {
        var movieOverview_r2 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movieOverview", movieOverview_r2)("link", ctx_r0.refUrl)("text", "Back to " + ctx_r0.refText);
      }
    }

    function MovieFullReviewComponent_app_movie_review_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-review", 5);
      }

      if (rf & 2) {
        var review_r3 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r3)("length", 0 - 1);
      }
    }

    var MovieFullReviewComponent = function MovieFullReviewComponent(route, movieService) {
      var _this15 = this;

      _classCallCheck(this, MovieFullReviewComponent);

      this.route = route;
      this.movieService = movieService;
      this.refUrl = '../';
      this.refText = 'main';
      this.route.queryParamMap.subscribe(function (paramMap) {
        _this15.refUrl = paramMap.get('ref');

        var path = _this15.refUrl.split('/').pop();

        if (path === 'reviews') {
          _this15.refText = 'reviews';
        }
      });
      this.route.paramMap.subscribe(function (paramMap) {
        _this15.id = parseInt(paramMap.get('id'));
        _this15.reviewId = paramMap.get('reviewId');
        _this15.movieOverview$ = _this15.movieService.getMovieDetails(_this15.id);
        _this15.review$ = _this15.movieService.getReviews(_this15.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (review) {
          return review;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (review) {
          return review.id === _this15.reviewId;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
      });
    };

    MovieFullReviewComponent.ɵfac = function MovieFullReviewComponent_Factory(t) {
      return new (t || MovieFullReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]));
    };

    MovieFullReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieFullReviewComponent,
      selectors: [["app-movie-full-review"]],
      decls: 6,
      vars: 6,
      consts: [[1, "container", "movieFullReview"], [3, "movieOverview", "link", "text", 4, "ngIf"], [1, "movieFullReview--review"], [3, "review", "length", 4, "ngIf"], [3, "movieOverview", "link", "text"], [3, "review", "length"]],
      template: function MovieFullReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieFullReviewComponent_app_movie_go_back_1_Template, 1, 3, "app-movie-go-back", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieFullReviewComponent_app_movie_review_4_Template, 1, 2, "app-movie-review", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.movieOverview$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.review$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_movie_go_back_movie_go_back_component__WEBPACK_IMPORTED_MODULE_5__["MovieGoBackComponent"], _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_6__["MovieReviewComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".movieFullReview[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n@media (min-width: 768px) {\n  .movieFullReview[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n.movieFullReview--review[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWZ1bGwtcmV2aWV3L0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxtb3ZpZXNcXHBhZ2VzXFxtb3ZpZS1mdWxsLXJldmlld1xcbW92aWUtZnVsbC1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9wYWdlcy9tb3ZpZS1mdWxsLXJldmlldy9tb3ZpZS1mdWxsLXJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWZ1bGwtcmV2aWV3L0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtBQ0ZGO0FDREU7RUZFRjtJQUlJLGVBQUE7RUNERjtBQUNGO0FER0U7RUFDRSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL3BhZ2VzL21vdmllLWZ1bGwtcmV2aWV3L21vdmllLWZ1bGwtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcblxuLm1vdmllRnVsbFJldmlldyB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcblxuICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAmLS1yZXZpZXcge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59XG4iLCIubW92aWVGdWxsUmV2aWV3IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb3ZpZUZ1bGxSZXZpZXcge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxufVxuLm1vdmllRnVsbFJldmlldy0tcmV2aWV3IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59IiwiQG1peGluIG1lZGlhKCRzaXplKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieFullReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-full-review',
          templateUrl: './movie-full-review.component.html',
          styleUrls: ['./movie-full-review.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies/shared/endpoints.ts":
  /*!********************************************!*\
    !*** ./src/app/movies/shared/endpoints.ts ***!
    \********************************************/

  /*! exports provided: moviePopular, movieDetails, movieCast, movieReviews, movieRecommnedations */

  /***/
  function srcAppMoviesSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moviePopular", function () {
      return moviePopular;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "movieDetails", function () {
      return movieDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "movieCast", function () {
      return movieCast;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "movieReviews", function () {
      return movieReviews;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "movieRecommnedations", function () {
      return movieRecommnedations;
    });
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var moviePopular = src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + '/movie/popular';

    var movieDetails = function movieDetails(movieId) {
      return src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + "/movie/".concat(movieId);
    };

    var movieCast = function movieCast(movieId) {
      return src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + "/movie/".concat(movieId, "/credits");
    };

    var movieReviews = function movieReviews(movieId) {
      return src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + "/movie/".concat(movieId, "/reviews");
    };

    var movieRecommnedations = function movieRecommnedations(movieId) {
      return src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + "/movie/".concat(movieId, "/recommendations");
    };
    /***/

  },

  /***/
  "./src/app/movies/shared/services/movie/movie.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/movies/shared/services/movie/movie.service.ts ***!
    \***************************************************************/

  /*! exports provided: MovieService */

  /***/
  function srcAppMoviesSharedServicesMovieMovieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieService", function () {
      return MovieService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../endpoints */
    "./src/app/movies/shared/endpoints.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/ui/services/request/request.service */
    "./src/app/ui/services/request/request.service.ts");

    var MovieService = /*#__PURE__*/function () {
      function MovieService(request) {
        _classCallCheck(this, MovieService);

        this.request = request;
      }

      _createClass(MovieService, [{
        key: "getPopularMovies",
        value: function getPopularMovies() {
          var pageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          return this.request.get(_endpoints__WEBPACK_IMPORTED_MODULE_1__["moviePopular"], {
            api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"],
            page: pageId.toString()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.results;
          }));
        }
      }, {
        key: "getMovieDetails",
        value: function getMovieDetails(movieId) {
          return this.request.get(Object(_endpoints__WEBPACK_IMPORTED_MODULE_1__["movieDetails"])(movieId), {
            api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"]
          });
        }
      }, {
        key: "getCast",
        value: function getCast(movieId) {
          return this.request.get(Object(_endpoints__WEBPACK_IMPORTED_MODULE_1__["movieCast"])(movieId), {
            api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.cast;
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews(movieId) {
          return this.request.get(Object(_endpoints__WEBPACK_IMPORTED_MODULE_1__["movieReviews"])(movieId), {
            api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.results;
          }));
        }
      }, {
        key: "getRecommendations",
        value: function getRecommendations(movieId) {
          return this.request.get(Object(_endpoints__WEBPACK_IMPORTED_MODULE_1__["movieRecommnedations"])(movieId), {
            api_key: src_app_config__WEBPACK_IMPORTED_MODULE_3__["apiKey"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.results;
          }));
        }
      }]);

      return MovieService;
    }();

    MovieService.ɵfac = function MovieService_Factory(t) {
      return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]));
    };

    MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MovieService,
      factory: MovieService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/components/navigation/navigation.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/navigation/components/navigation/navigation.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/auth/auth.actions */
    "./src/app/store/auth/auth.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/navigation/components/search/search.component.ts");

    function NavigationComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_12_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.linkClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Favourites");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavigationComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " account_circle ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavigationComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_19_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavigationComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavigationComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_24_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(store) {
        _classCallCheck(this, NavigationComponent);

        this.store = store;
        this.opened = false;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.auth.loggedIn;
          }));
        }
      }, {
        key: "menuClicked",
        value: function menuClicked() {
          this.opened = !this.opened;
        }
      }, {
        key: "linkClicked",
        value: function linkClicked() {
          this.opened = false;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(Object(src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 26,
      vars: 13,
      consts: [[1, "nav"], [1, "container"], [1, "nav--row"], [1, "nav--menuBtn", "btn", "btn__blank", 3, "click"], [1, "material-icons"], ["routerLink", "/", 1, "nav--logo", "bold"], [3, "click"], ["routerLink", "/"], [3, "click", 4, "ngIf"], [1, "nav--rightIcons"], [1, "nav--loginBtn", "btn", "btn__blank"], ["routerLink", "auth/signIn"], ["class", "material-icons", 4, "ngIf", "ngIfElse"], ["logged", ""], [1, "nav--search"], ["class", "nav--loginLink", 4, "ngIf", "ngIfElse"], ["loggedLink", ""], ["routerLink", "favourites/all"], [1, "material-icons", 3, "click"], [1, "nav--loginLink"], [1, "nav--loginLink", 3, "click"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_3_listener() {
            return ctx.menuClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IMDb Clone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_9_listener() {
            return ctx.linkClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavigationComponent_li_12_Template, 3, 0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_span_17_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavigationComponent_ng_template_19_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-search", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavigationComponent_div_22_Template, 3, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavigationComponent_ng_template_24_Template, 3, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav--menu__opened", ctx.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.loggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.loggedIn$))("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 11, ctx.loggedIn$))("ngIfElse", _r5);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".nav[_ngcontent-%COMP%] {\n  background-color: #121212;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n@media (min-width: 768px) {\n  .nav[_ngcontent-%COMP%] {\n    position: static;\n    padding: 0 20px;\n  }\n}\n.nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.nav--rightIcons[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  padding: 0 6px;\n}\n@media (min-width: 768px) {\n  .nav--rightIcons[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.nav--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .nav--row[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n.nav--logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .nav--logo[_ngcontent-%COMP%] {\n    border-right: 1px solid gray;\n    padding-right: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .nav--menuBtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .nav--loginBtn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav--loginLink[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: auto;\n  color: #f5c518;\n}\n@media (min-width: 768px) {\n  .nav--loginLink[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.nav[_ngcontent-%COMP%]   ul.nav--menu__opened[_ngcontent-%COMP%] {\n  display: block;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 50px;\n  background-color: #1f1f1f;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    position: static;\n    width: auto;\n    background-color: inherit;\n    display: flex;\n    flex-direction: row;\n  }\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  width: 100%;\n  color: white;\n}\n@media (min-width: 768px) {\n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 0 10px 20px;\n  }\n}\n.nav--search[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n@media (min-width: 768px) {\n  .nav--search[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXG5hdmlnYXRpb25cXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNpQlU7RURoQlYsWUNMYztFRE1kLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7QUVIRjtBQ05FO0VIRUY7SUFVSSxnQkFBQTtJQUNBLGVBQUE7RUVGRjtBQUNGO0FGSUU7RUFDRSxZQUFBO0FFRko7QUZLRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRUhKO0FDckJFO0VIb0JBO0lBT0ksY0FBQTtFRUZKO0FBQ0Y7QUZLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUVISjtBQy9CRTtFSCtCQTtJQU1JLHNCQUFBO0VFRko7QUFDRjtBRktFO0VBQ0UsY0FBQTtBRUhKO0FDdkNFO0VIeUNBO0lBR0ksNEJDM0NHO0lENENILG1CQUFBO0VFREo7QUFDRjtBQzdDRTtFSGlEQTtJQUVJLGFBQUE7RUVGSjtBQUNGO0FDbERFO0VIdURBO0lBRUksYUFBQTtFRUhKO0FBQ0Y7QUZNRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbkRjO0FDK0NsQjtBQzVERTtFSDZEQTtJQU1JLGNBQUE7RUVISjtBQUNGO0FGTUU7RUFDRSxjQUFBO0FFSko7QUZPRTtFQUNFLGFBQUE7RUFFQSxlQUFBO0VBQ0EsU0NoRlk7RURpRloseUJBQUE7RUFDQSxXQUFBO0FFTko7QUMzRUU7RUgyRUE7SUFTSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUVMSjtBQUNGO0FGT0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FFTk47QUMxRkU7RUg0RkU7SUFPSSxXQUFBO0lBQ0EseUJBQUE7RUVMTjtBQUNGO0FGU0U7RUFDRSxnQkFBQTtBRVBKO0FDbkdFO0VIeUdBO0lBSUksaUJBQUE7RUVOSjtBQUNGO0FGVUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUVQRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4ubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JheTtcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHotaW5kZXg6IDEwO1xuXG4gIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgJi0tcmlnaHRJY29ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICAmLS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgJi0tbG9nbyB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBib3JkZXItcmlnaHQ6ICRib3JkZXI7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICYtLW1lbnVCdG4ge1xuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLS1sb2dpbkJ0biB7XG4gICAgQGluY2x1ZGUgbWVkaWEoJG1kKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYtLWxvZ2luTGluayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgdWwubmF2LS1tZW51X19vcGVuZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLS1zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbiIsIiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xuXG4kYm9yZGVyOiAxcHggc29saWQgZ3JheTtcblxuLy8gQnJlYWtwb2ludHNcbiRzbTogNDgwcHg7XG4kbWQ6IDc2OHB4O1xuJGxnOiAxMDI0cHg7XG4keGw6IDEyODBweDtcbiR4eGw6IDE0NDBweDtcblxuJGZvbnQtcHJpbWFyeTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcblxuJGNvbG9yLXByaW1hcnk6IHdoaXRlO1xuJGNvbG9yLXNlY29uZGFyeTogcmdiKDI0NSwgMTk3LCAyNCk7XG4kY29sb3ItZGFuZ2VyOiByZ2IoMjU1LCA0MiwgNDIpO1xuXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6IHJnYigyMDksIDE2OSwgMjIpO1xuXG4kZ3JheTogcmdiKDE0NSwgMTQ1LCAxNDUpO1xuJGxpZ2h0LWdyYXk6IHJnYigxODksIDE4OSwgMTg5KTtcbiRkYXJrLWdyYXk6IHJnYigxOCwgMTgsIDE4KTtcbiIsIi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cbi5uYXYgLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uYXYtLXJpZ2h0SWNvbnMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi0tcmlnaHRJY29ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5uYXYtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LS1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIH1cbn1cbi5uYXYtLWxvZ28ge1xuICBmbGV4LXNocmluazogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LS1sb2dvIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LS1tZW51QnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi0tbG9naW5CdG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5uYXYtLWxvZ2luTGluayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogI2Y1YzUxODtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LS1sb2dpbkxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ubmF2IHVsLm5hdi0tbWVudV9fb3BlbmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2IHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5uYXYgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdiB1bCBsaSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMjBweDtcbiAgfVxufVxuLm5hdi0tc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LS1zZWFyY2gge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufSIsIkBtaXhpbiBtZWRpYSgkc2l6ZSkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNpemUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/components/search-result/search-result.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/navigation/components/search-result/search-result.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SearchResultComponent */

  /***/
  function srcAppNavigationComponentsSearchResultSearchResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
      return SearchResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ui/components/image/image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_pipes_genres_genres_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../ui/pipes/genres/genres.pipe */
    "./src/app/ui/pipes/genres/genres.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["movies", a1];
    };

    var SearchResultComponent = function SearchResultComponent() {
      _classCallCheck(this, SearchResultComponent);
    };

    SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) {
      return new (t || SearchResultComponent)();
    };

    SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultComponent,
      selectors: [["app-search-result"]],
      inputs: {
        searchResult: "searchResult"
      },
      decls: 12,
      vars: 12,
      consts: [[3, "routerLink"], [1, "searchResult"], ["posterSize", "w92", 1, "searchResult--image", 3, "path"], [1, "searchResult--info"], [1, "searchResult--year"], [1, "searchResult--genres"]],
      template: function SearchResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "genres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.searchResult.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.searchResult.poster_path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.searchResult.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.searchResult.release_date, "yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.searchResult.genres));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ui_components_image_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ui_pipes_genres_genres_pipe__WEBPACK_IMPORTED_MODULE_4__["GenresPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.searchResult[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  border-bottom: 1px solid gray;\n}\n\n.searchResult--image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 75px;\n  flex-shrink: 0;\n}\n\n.searchResult--info[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.searchResult--year[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #919191;\n}\n\n.searchResult--genres[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #919191;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXG5hdmlnYXRpb25cXGNvbXBvbmVudHNcXHNlYXJjaC1yZXN1bHRcXHNlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEsNkJFVk87QURPVDs7QURLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxjRVBHO0FERVA7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsY0VaRztBRE1QIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoUmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiA4cHg7XG5cbiAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcblxuICAmLS1pbWFnZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgJi0taW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgJi0teWVhciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgfVxuXG4gICYtLWdlbnJlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaFJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4uc2VhcmNoUmVzdWx0LS1pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNlYXJjaFJlc3VsdC0taW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5zZWFyY2hSZXN1bHQtLXllYXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuLnNlYXJjaFJlc3VsdC0tZ2VucmVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzkxOTE5MTtcbn0iLCIkaGVhZGVyLWhlaWdodDogNTBweDtcblxuJGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cbi8vIEJyZWFrcG9pbnRzXG4kc206IDQ4MHB4O1xuJG1kOiA3NjhweDtcbiRsZzogMTAyNHB4O1xuJHhsOiAxMjgwcHg7XG4keHhsOiAxNDQwcHg7XG5cbiRmb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiB3aGl0ZTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDUsIDE5NywgMjQpO1xuJGNvbG9yLWRhbmdlcjogcmdiKDI1NSwgNDIsIDQyKTtcblxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiByZ2IoMjA5LCAxNjksIDIyKTtcblxuJGdyYXk6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiRsaWdodC1ncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XG4kZGFyay1ncmF5OiByZ2IoMTgsIDE4LCAxOCk7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-result',
          templateUrl: './search-result.component.html',
          styleUrls: ['./search-result.component.scss']
        }]
      }], null, {
        searchResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navigation/components/search/search.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/navigation/components/search/search.component.ts ***!
    \******************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppNavigationComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/search/search.service */
    "./src/app/navigation/shared/services/search/search.service.ts");
    /* harmony import */


    var _ui_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/directives/click-outside/click-outside.directive */
    "./src/app/ui/directives/click-outside/click-outside.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../search-result/search-result.component */
    "./src/app/navigation/components/search-result/search-result.component.ts");

    function SearchComponent_div_9_app_search_result_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-result", 10);
      }

      if (rf & 2) {
        var searchResult_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResult", searchResult_r3);
      }
    }

    function SearchComponent_div_9_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("See all results for \"", ctx_r2.query.value, "\"");
      }
    }

    function SearchComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_9_app_search_result_1_Template, 1, 1, "app-search-result", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_9_div_3_Template, 3, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r0.searchResults, 0, 8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResults.length);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(searchService) {
        var _this16 = this;

        _classCallCheck(this, SearchComponent);

        this.searchService = searchService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          query: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.searchOpen = false;
        this.searchResults = [];
        this.searchResult = this.searchService.search(this.query.valueChanges).subscribe(function (searchResults) {
          _this16.searchResults = searchResults;
          _this16.searchOpen = true;
        });
      }

      _createClass(SearchComponent, [{
        key: "closeSearch",
        value: function closeSearch() {
          this.searchOpen = false;
        }
      }, {
        key: "openSearch",
        value: function openSearch() {
          this.searchOpen = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.searchResult.unsubscribe();
        }
      }, {
        key: "query",
        get: function get() {
          return this.searchForm.get('query');
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 10,
      vars: 2,
      consts: [[1, "search"], [1, "search--button"], [1, "material-icons"], [3, "formGroup"], ["type", "text", "formControlName", "query", "placeholder", "Search IMDb Clone", 3, "appClickOutside", "focus"], [1, "search--icon"], ["class", "search--results elevation-1", 4, "ngIf"], [1, "search--results", "elevation-1"], ["class", "search--result", 3, "searchResult", 4, "ngFor", "ngForOf"], ["class", "search--result search--results-more", 4, "ngIf"], [1, "search--result", 3, "searchResult"], [1, "search--result", "search--results-more"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appClickOutside", function SearchComponent_Template_input_appClickOutside_5_listener() {
            return ctx.closeSearch();
          })("focus", function SearchComponent_Template_input_focus_5_listener() {
            return ctx.openSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 4, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOpen);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ui_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.search[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  padding: 7px 40px 7px 7px;\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    display: block;\n    width: 300px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n\n.search--button[_ngcontent-%COMP%] {\n  display: block;\n  background: none;\n  border: none;\n  padding: 0;\n}\n\n@media (min-width: 768px) {\n  .search--button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.search--icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .search--icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.search--results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  z-index: 10;\n}\n\n.search--results-more[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.search--result[_ngcontent-%COMP%]:hover {\n  transition: all 0.15s;\n  background-color: #121212;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NlYXJjaC9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcbmF2aWdhdGlvblxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvc2VhcmNoL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vY29tcG9uZW50cy9zZWFyY2gvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FESUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7QUNISjs7QUNYRTtFRlNBO0lBUUksY0FBQTtJQUNBLFlBQUE7RUNGSjtBQUNGOztBQ2pCRTtFRlNBO0lBYUksWUFBQTtFQ0RKO0FBQ0Y7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBQzVCRTtFRjBCQTtJQU9JLGFBQUE7RUNESjtBQUNGOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUVBLGFBQUE7QUNKSjs7QUMzQ0U7RUZxQ0E7SUFhSSxjQUFBO0VDSEo7QUFDRjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBRUEsV0FBQTtBQ0xKOztBRE9JO0VBQ0UsYUFBQTtBQ0xOOztBRFNFO0VBQ0UscUJBQUE7RUFDQSx5QkdqRFE7QUYwQ1oiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogN3B4IDQwcHggN3B4IDdweDtcblxuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAaW5jbHVkZSBtZWRpYSgkbWQpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhKCRsZykge1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgIH1cbiAgfVxuXG4gICYtLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBpbmNsdWRlIG1lZGlhKCRtZCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJi0tcmVzdWx0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgei1pbmRleDogMTA7XG5cbiAgICAmLW1vcmUge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICAmLS1yZXN1bHQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA3cHggNDBweCA3cHggN3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2ggaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuc2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbi5zZWFyY2gtLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC0tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2VhcmNoLS1pY29uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC0taWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5zZWFyY2gtLXJlc3VsdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuLnNlYXJjaC0tcmVzdWx0cy1tb3JlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWFyY2gtLXJlc3VsdDpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn0iLCJAbWl4aW4gbWVkaWEoJHNpemUpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzaXplKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIiRoZWFkZXItaGVpZ2h0OiA1MHB4O1xuXG4kYm9yZGVyOiAxcHggc29saWQgZ3JheTtcblxuLy8gQnJlYWtwb2ludHNcbiRzbTogNDgwcHg7XG4kbWQ6IDc2OHB4O1xuJGxnOiAxMDI0cHg7XG4keGw6IDEyODBweDtcbiR4eGw6IDE0NDBweDtcblxuJGZvbnQtcHJpbWFyeTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcblxuJGNvbG9yLXByaW1hcnk6IHdoaXRlO1xuJGNvbG9yLXNlY29uZGFyeTogcmdiKDI0NSwgMTk3LCAyNCk7XG4kY29sb3ItZGFuZ2VyOiByZ2IoMjU1LCA0MiwgNDIpO1xuXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6IHJnYigyMDksIDE2OSwgMjIpO1xuXG4kZ3JheTogcmdiKDE0NSwgMTQ1LCAxNDUpO1xuJGxpZ2h0LWdyYXk6IHJnYigxODksIDE4OSwgMTg5KTtcbiRkYXJrLWdyYXk6IHJnYigxOCwgMTgsIDE4KTtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/navigation/navigation.module.ts ***!
    \*************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcAppNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/navigation/components/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/navigation/components/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/search-result/search-result.component */
    "./src/app/navigation/components/search-result/search-result.component.ts");
    /* harmony import */


    var _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ui/components/image/image.module */
    "./src/app/ui/components/image/image.module.ts");
    /* harmony import */


    var _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../ui/pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _ui_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../ui/directives/directives.module */
    "./src/app/ui/directives/directives.module.ts");

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NavigationModule
    });
    NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NavigationModule_Factory(t) {
        return new (t || NavigationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_7__["ImageModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ui_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["DirectivesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, {
        declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_7__["ImageModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ui_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["DirectivesModule"]],
        exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ui_components_image_image_module__WEBPACK_IMPORTED_MODULE_7__["ImageModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ui_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["DirectivesModule"]],
          exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/shared/endpoints.ts":
  /*!************************************************!*\
    !*** ./src/app/navigation/shared/endpoints.ts ***!
    \************************************************/

  /*! exports provided: search */

  /***/
  function srcAppNavigationSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "search", function () {
      return search;
    });
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var search = src_app_config__WEBPACK_IMPORTED_MODULE_0__["apiUrl"] + '/search/movie';
    /***/
  },

  /***/
  "./src/app/navigation/shared/services/search/search.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/navigation/shared/services/search/search.service.ts ***!
    \*********************************************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppNavigationSharedServicesSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../endpoints */
    "./src/app/navigation/shared/endpoints.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/ui/services/request/request.service */
    "./src/app/ui/services/request/request.service.ts");
    /* harmony import */


    var src_app_genres_shared_services_genre_genre_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/genres/shared/services/genre/genre.service */
    "./src/app/genres/shared/services/genre/genre.service.ts");

    var SearchService = /*#__PURE__*/function () {
      function SearchService(request, genreService) {
        _classCallCheck(this, SearchService);

        this.request = request;
        this.genreService = genreService;
      }

      _createClass(SearchService, [{
        key: "search",
        value: function search(query) {
          var _this17 = this;

          return query.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (query) {
            return _this17.searchRequest(query);
          }));
        }
      }, {
        key: "searchRequest",
        value: function searchRequest(query) {
          var _this18 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            if (query.length > 0) {
              var searchResult = _this18.request.get(_endpoints__WEBPACK_IMPORTED_MODULE_2__["search"], {
                api_key: src_app_config__WEBPACK_IMPORTED_MODULE_4__["apiKey"],
                query: query
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                return data.results;
              })).subscribe(function (movies) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var searchResults, _iterator, _step, movie;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          searchResults = [];
                          _iterator = _createForOfIteratorHelper(movies);
                          _context.prev = 2;

                          _iterator.s();

                        case 4:
                          if ((_step = _iterator.n()).done) {
                            _context.next = 18;
                            break;
                          }

                          movie = _step.value;
                          _context.t0 = searchResults;
                          _context.t1 = movie.id;
                          _context.t2 = movie.original_title;
                          _context.t3 = movie.release_date;
                          _context.t4 = movie.poster_path;
                          _context.next = 13;
                          return this.genreService.getGenresByIds(movie.genre_ids).toPromise();

                        case 13:
                          _context.t5 = _context.sent;
                          _context.t6 = {
                            id: _context.t1,
                            title: _context.t2,
                            release_date: _context.t3,
                            poster_path: _context.t4,
                            genres: _context.t5
                          };

                          _context.t0.push.call(_context.t0, _context.t6);

                        case 16:
                          _context.next = 4;
                          break;

                        case 18:
                          _context.next = 23;
                          break;

                        case 20:
                          _context.prev = 20;
                          _context.t7 = _context["catch"](2);

                          _iterator.e(_context.t7);

                        case 23:
                          _context.prev = 23;

                          _iterator.f();

                          return _context.finish(23);

                        case 26:
                          subscriber.next(searchResults);
                          searchResult.unsubscribe();

                        case 28:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this, [[2, 20, 23, 26]]);
                }));
              });
            } else {
              subscriber.next([]);
            }
          });
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_genres_shared_services_genre_genre_service__WEBPACK_IMPORTED_MODULE_7__["GenreService"]));
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_ui_services_request_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: src_app_genres_shared_services_genre_genre_service__WEBPACK_IMPORTED_MODULE_7__["GenreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/auth/auth.actions.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.actions.ts ***!
    \********************************************/

  /*! exports provided: login, loginSuccess, loginFailed, signUp, signUpSuccess, signUpFailed, logout */

  /***/
  function srcAppStoreAuthAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginSuccess", function () {
      return loginSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginFailed", function () {
      return loginFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signUp", function () {
      return signUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signUpSuccess", function () {
      return signUpSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signUpFailed", function () {
      return signUpFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logout", function () {
      return logout;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Login Failed');
    var signUp = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign Up', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var signUpSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign Up Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var signUpFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign Up Failed');
    var logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Logout');
    /***/
  },

  /***/
  "./src/app/store/auth/auth.effects.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.effects.ts ***!
    \********************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppStoreAuthAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.actions */
    "./src/app/store/auth/auth.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../favourites/favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var src_app_auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/auth/shared/services/auth/auth.service */
    "./src/app/auth/shared/services/auth/auth.service.ts");

    var AuthEffects = function AuthEffects(actions$, authService) {
      var _this19 = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.authService = authService;
      this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["login"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
          return _this19.authService.login(action.payload.email, action.payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (loginResult) {
            return Object(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["loginSuccess"])({
              payload: {
                loggedIn: true,
                loggedUser: {
                  email: loginResult.email,
                  localId: loginResult.localId
                }
              }
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["loginFailed"])());
          }));
        }));
      });
      this.signUp$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["signUp"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
          return _this19.authService.signUp(action.payload.email, action.payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (loginResult) {
            return Object(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["loginSuccess"])({
              payload: {
                loggedIn: true,
                loggedUser: {
                  email: loginResult.email,
                  localId: loginResult.localId
                }
              }
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["signUpFailed"])());
          }));
        }));
      });
      this.loginSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["loginSuccess"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
          return Object(_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_5__["getFavourites"])();
        }));
      });
    };

    AuthEffects.ɵfac = function AuthEffects_Factory(t) {
      return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthEffects,
      factory: AuthEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/auth/auth.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/store/auth/auth.reducer.ts ***!
    \********************************************/

  /*! exports provided: authReducer */

  /***/
  function srcAppStoreAuthAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authReducer", function () {
      return authReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.state */
    "./src/app/store/auth/auth.state.ts");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.actions */
    "./src/app/store/auth/auth.actions.ts");

    var _authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_auth_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"], function (state, _ref) {
      var payload = _ref.payload;
      return Object.assign(Object.assign({}, state), {
        loggedUser: payload.loggedUser,
        loggedIn: payload.loggedIn
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["signUpSuccess"], function (state, _ref2) {
      var payload = _ref2.payload;
      return Object.assign(Object.assign({}, state), {
        loggedUser: payload.loggedUser,
        loggedIn: payload.loggedIn
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loggedUser: null,
        loggedIn: false
      });
    }));

    function authReducer(state, action) {
      return _authReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/auth/auth.state.ts":
  /*!******************************************!*\
    !*** ./src/app/store/auth/auth.state.ts ***!
    \******************************************/

  /*! exports provided: initialState */

  /***/
  function srcAppStoreAuthAuthStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var initialState = {
      loggedIn: false,
      loggedUser: null
    };
    /***/
  },

  /***/
  "./src/app/store/favourites/favourites.actions.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/favourites/favourites.actions.ts ***!
    \********************************************************/

  /*! exports provided: getFavourites, getFavouritesSuccess, addMovieToFavourites, addMovieToFavouritesSuccess, removeMovieFromFavourites, removeMovieFromFavouritesSuccess, addPersonalNoteToFavourite, addPersonalNoteToFavouriteSuccess */

  /***/
  function srcAppStoreFavouritesFavouritesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFavourites", function () {
      return getFavourites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFavouritesSuccess", function () {
      return getFavouritesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addMovieToFavourites", function () {
      return addMovieToFavourites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addMovieToFavouritesSuccess", function () {
      return addMovieToFavouritesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeMovieFromFavourites", function () {
      return removeMovieFromFavourites;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeMovieFromFavouritesSuccess", function () {
      return removeMovieFromFavouritesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addPersonalNoteToFavourite", function () {
      return addPersonalNoteToFavourite;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addPersonalNoteToFavouriteSuccess", function () {
      return addPersonalNoteToFavouriteSuccess;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getFavourites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Get Favourites');
    var getFavouritesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Get Favourites Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addMovieToFavourites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Add Movie To Favourites', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addMovieToFavouritesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Add Movie To Favourites Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var removeMovieFromFavourites = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Remove Movie From Favourites', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var removeMovieFromFavouritesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Remove Movie From Favourites Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addPersonalNoteToFavourite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Add Personal Note To Favourite', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addPersonalNoteToFavouriteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Favourites] Add Personal Note To Favourite Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/favourites/favourites.effects.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/favourites/favourites.effects.ts ***!
    \********************************************************/

  /*! exports provided: FavouriteEffects */

  /***/
  function srcAppStoreFavouritesFavouritesEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteEffects", function () {
      return FavouriteEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _favourites_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var src_app_favourites_shared_services_favourite_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/favourites/shared/services/favourite/favourite.service */
    "./src/app/favourites/shared/services/favourite/favourite.service.ts");

    var FavouriteEffects = function FavouriteEffects(actions$, store, favouriteService) {
      var _this20 = this;

      _classCallCheck(this, FavouriteEffects);

      this.actions$ = actions$;
      this.store = store;
      this.favouriteService = favouriteService;
      this.getFavourites$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this20.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_5__["getFavourites"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this20.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return state.auth;
          }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              action = _ref4[0],
              state = _ref4[1];

          return _this20.favouriteService.getAll(state.loggedUser.localId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (favourites) {
            return {
              type: _favourites_actions__WEBPACK_IMPORTED_MODULE_5__["getFavouritesSuccess"].type,
              payload: {
                favourites: favourites
              }
            };
          }));
        }));
      });
      this.addMovieToFavourites$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this20.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_5__["addMovieToFavourites"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this20.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return state.auth;
          }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              action = _ref6[0],
              state = _ref6[1];

          return _this20.favouriteService.addMovieToFavourites(state.loggedUser.localId, action.payload.movie).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return {
              type: _favourites_actions__WEBPACK_IMPORTED_MODULE_5__["addMovieToFavouritesSuccess"].type,
              payload: {
                movie: action.payload.movie
              }
            };
          }));
        }));
      });
      this.removeMovieFromFavourites$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this20.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_5__["removeMovieFromFavourites"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this20.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return state.auth;
          }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              action = _ref8[0],
              state = _ref8[1];

          return _this20.favouriteService.removeMovieFromFavourites(state.loggedUser.localId, action.payload.movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return {
              type: _favourites_actions__WEBPACK_IMPORTED_MODULE_5__["removeMovieFromFavouritesSuccess"].type,
              payload: {
                movieId: action.payload.movieId
              }
            };
          }));
        }));
      });
      this.addPersonalNoteToFavourite$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this20.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_5__["addPersonalNoteToFavourite"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this20.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return state.auth;
          }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              action = _ref10[0],
              state = _ref10[1];

          return _this20.favouriteService.addPersonalNoteToFavourite(state.loggedUser.localId, action.payload.movieId, action.payload.personalNote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return {
              type: _favourites_actions__WEBPACK_IMPORTED_MODULE_5__["addPersonalNoteToFavouriteSuccess"].type,
              payload: {
                movieId: action.payload.movieId,
                personalNote: action.payload.personalNote
              }
            };
          }));
        }));
      });
    };

    FavouriteEffects.ɵfac = function FavouriteEffects_Factory(t) {
      return new (t || FavouriteEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_favourites_shared_services_favourite_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"]));
    };

    FavouriteEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FavouriteEffects,
      factory: FavouriteEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: src_app_favourites_shared_services_favourite_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/favourites/favourites.reducer.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/favourites/favourites.reducer.ts ***!
    \********************************************************/

  /*! exports provided: favouritesReducer */

  /***/
  function srcAppStoreFavouritesFavouritesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "favouritesReducer", function () {
      return favouritesReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _favourites_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./favourites.state */
    "./src/app/store/favourites/favourites.state.ts");
    /* harmony import */


    var _favourites_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");

    var _favouritesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_favourites_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["getFavouritesSuccess"], function (state, _ref11) {
      var payload = _ref11.payload;
      return Object.assign(Object.assign({}, state), {
        favourites: payload.favourites
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieToFavouritesSuccess"], function (state, _ref12) {
      var payload = _ref12.payload;
      return Object.assign(Object.assign({}, state), {
        favourites: Object.assign(Object.assign({}, state.favourites), _defineProperty({}, payload.movie.id, payload.movie))
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["removeMovieFromFavouritesSuccess"], function (state, _ref13) {
      var payload = _ref13.payload;
      var favourites = Object.assign({}, state.favourites);
      delete favourites[payload.movieId];
      return Object.assign(Object.assign({}, state), {
        favourites: Object.assign({}, favourites)
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["addPersonalNoteToFavouriteSuccess"], function (state, _ref14) {
      var payload = _ref14.payload;
      var favourites = Object.assign({}, state.favourites);
      var favourite = favourites[payload.movieId];
      return Object.assign(Object.assign({}, state), {
        favourites: Object.assign(Object.assign({}, favourites), _defineProperty({}, payload.movieId, Object.assign(Object.assign({}, favourite), {
          personalNote: payload.personalNote
        })))
      });
    }));

    function favouritesReducer(state, action) {
      return _favouritesReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/favourites/favourites.state.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/favourites/favourites.state.ts ***!
    \******************************************************/

  /*! exports provided: initialState */

  /***/
  function srcAppStoreFavouritesFavouritesStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var initialState = {
      favourites: {}
    };
    /***/
  },

  /***/
  "./src/app/store/movies/movies.actions.ts":
  /*!************************************************!*\
    !*** ./src/app/store/movies/movies.actions.ts ***!
    \************************************************/

  /*! exports provided: nextPage, nextPageSuccess */

  /***/
  function srcAppStoreMoviesMoviesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextPage", function () {
      return nextPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextPageSuccess", function () {
      return nextPageSuccess;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var nextPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies] Next Page');
    var nextPageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies] Next Page Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/movies/movies.effects.ts":
  /*!************************************************!*\
    !*** ./src/app/store/movies/movies.effects.ts ***!
    \************************************************/

  /*! exports provided: MovieEffects */

  /***/
  function srcAppStoreMoviesMoviesEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieEffects", function () {
      return MovieEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movies.actions */
    "./src/app/store/movies/movies.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_movies_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/movies/shared/services/movie/movie.service */
    "./src/app/movies/shared/services/movie/movie.service.ts");

    var MovieEffects = function MovieEffects(actions$, store, movieService) {
      var _this21 = this;

      _classCallCheck(this, MovieEffects);

      this.actions$ = actions$;
      this.store = store;
      this.movieService = movieService;
      this.nextPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this21.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_3__["nextPage"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this21.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(function (state) {
            return state.movies;
          }))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              action = _ref16[0],
              state = _ref16[1];

          return _this21.movieService.getPopularMovies(state.currentPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (movies) {
            return {
              type: _movies_actions__WEBPACK_IMPORTED_MODULE_3__["nextPageSuccess"].type,
              payload: {
                movies: [].concat(_toConsumableArray(state.popularMovies), _toConsumableArray(movies)),
                page: state.currentPage + 1
              }
            };
          }));
        }));
      });
    };

    MovieEffects.ɵfac = function MovieEffects_Factory(t) {
      return new (t || MovieEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_movies_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]));
    };

    MovieEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MovieEffects,
      factory: MovieEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: src_app_movies_shared_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/movies/movies.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/movies/movies.reducer.ts ***!
    \************************************************/

  /*! exports provided: moviesReducer */

  /***/
  function srcAppStoreMoviesMoviesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moviesReducer", function () {
      return moviesReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./movies.actions */
    "./src/app/store/movies/movies.actions.ts");
    /* harmony import */


    var _movies_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./movies.state */
    "./src/app/store/movies/movies.state.ts");

    var _moviesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_movies_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_1__["nextPageSuccess"], function (state, _ref17) {
      var payload = _ref17.payload;
      return Object.assign(Object.assign({}, state), {
        popularMovies: payload.movies,
        currentPage: payload.page
      });
    }));

    function moviesReducer(state, action) {
      return _moviesReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/movies/movies.state.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/movies/movies.state.ts ***!
    \**********************************************/

  /*! exports provided: initialState */

  /***/
  function srcAppStoreMoviesMoviesStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var initialState = {
      popularMovies: [],
      currentPage: 1
    };
    /***/
  },

  /***/
  "./src/app/ui/components/image/image.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/components/image/image.module.ts ***!
    \*****************************************************/

  /*! exports provided: ImageModule */

  /***/
  function srcAppUiComponentsImageImageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageModule", function () {
      return ImageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");

    var ImageModule = function ImageModule() {
      _classCallCheck(this, ImageModule);
    };

    ImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImageModule
    });
    ImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImageModule_Factory(t) {
        return new (t || ImageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageModule, {
        declarations: [_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"]],
        exports: [_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"]],
          exports: [_image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/image/image/image.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ui/components/image/image/image.component.ts ***!
    \**************************************************************/

  /*! exports provided: ImageComponent */

  /***/
  function srcAppUiComponentsImageImageImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageComponent", function () {
      return ImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");

    function ImageComponent_ng_container_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r3.aspectRatio * 100, "%")("width", ctx_r3.width)("height", ctx_r3.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx_r3.baseUrl + ctx_r3.posterSize + ctx_r3.path);
      }
    }

    function ImageComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx_r5.baseUrl + ctx_r5.posterSize + ctx_r5.path);
      }
    }

    function ImageComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageComponent_ng_container_0_div_1_Template, 2, 7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.aspectRatio !== 0)("ngIfElse", _r4);
      }
    }

    function ImageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ImageComponent = function ImageComponent() {
      _classCallCheck(this, ImageComponent);

      this.baseUrl = 'https://image.tmdb.org/t/p/';
      this.posterSize = 'w500';
      this.aspectRatio = 0;
      this.width = '100%';
      this.height = '0';
    };

    ImageComponent.ɵfac = function ImageComponent_Factory(t) {
      return new (t || ImageComponent)();
    };

    ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageComponent,
      selectors: [["app-image"]],
      inputs: {
        posterSize: "posterSize",
        path: "path",
        aspectRatio: "aspectRatio",
        width: "width",
        height: "height"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["noImg", ""], ["class", "image--wrapper", 3, "padding-top", "width", "height", 4, "ngIf", "ngIfElse"], ["autoHeight", ""], [1, "image--wrapper"], [3, "lazyLoad"], [1, "image--autoHeight", 3, "lazyLoad"], [1, "noImg"], [1, "noImg--svg"]],
      template: function ImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageComponent_ng_container_0_Template, 4, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"]],
      styles: [".image--wrapper[_ngcontent-%COMP%] {\n  height: 0;\n  padding-top: calc(3 / 2 * 100%);\n  position: relative;\n  border-radius: inherit;\n  width: inherit;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  -o-object-position: inherit;\n     object-position: inherit;\n}\n.image--wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: inherit;\n  width: inherit;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  -o-object-position: inherit;\n     object-position: inherit;\n}\n.image--autoHeight[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  -o-object-position: inherit;\n     object-position: inherit;\n}\n.noImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.noImg--svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9pbWFnZS9pbWFnZS9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXGltYWdlXFxpbWFnZVxcaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBRUEsY0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSwyQkFBQTtLQUFBLHdCQUFBO0FDRko7QURJSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxjQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7QUNOTjtBRFVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7QUNUSjtBRGFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNWRjtBRFlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnTEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xuICAmLS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMyAvIDIgKiAxMDAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuXG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdDtcbiAgICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQ7XG5cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5cbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgb2JqZWN0LWZpdDogaW5oZXJpdDtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAmLS1hdXRvSGVpZ2h0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcblxuICAgIG9iamVjdC1maXQ6IGluaGVyaXQ7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG59XG5cbi5ub0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi0tc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvYXNzZXRzLzIvdjQvZ2x5cGhpY29ucy9iYXNpYy9nbHlwaGljb25zLWJhc2ljLTM4LXBpY3R1cmUtZ3JleS1jMmViZGJiMDU3ZjJhNzYxNDE4NTkzMTY1MGY4Y2VlMjNmYTEzN2I5MzgxMmNjYjEzMmI5ZGY1MTFkZjFjZmFjLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxufVxuIiwiLmltYWdlLS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogY2FsYygzIC8gMiAqIDEwMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQ7XG59XG4uaW1hZ2UtLXdyYXBwZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQ7XG59XG4uaW1hZ2UtLWF1dG9IZWlnaHQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGluaGVyaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdDtcbn1cblxuLm5vSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ub0ltZy0tc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvYXNzZXRzLzIvdjQvZ2x5cGhpY29ucy9iYXNpYy9nbHlwaGljb25zLWJhc2ljLTM4LXBpY3R1cmUtZ3JleS1jMmViZGJiMDU3ZjJhNzYxNDE4NTkzMTY1MGY4Y2VlMjNmYTEzN2I5MzgxMmNjYjEzMmI5ZGY1MTFkZjFjZmFjLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image',
          templateUrl: './image.component.html',
          styleUrls: ['./image.component.scss']
        }]
      }], null, {
        posterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/movie-card/movie-card.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/components/movie-card/movie-card.module.ts ***!
    \***************************************************************/

  /*! exports provided: MovieCardModule */

  /***/
  function srcAppUiComponentsMovieCardMovieCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCardModule", function () {
      return MovieCardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./movie-card/movie-card.component */
    "./src/app/ui/components/movie-card/movie-card/movie-card.component.ts");
    /* harmony import */


    var _image_image_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../image/image.module */
    "./src/app/ui/components/image/image.module.ts");
    /* harmony import */


    var _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movie-rating/movie-rating.component */
    "./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");

    var MovieCardModule = function MovieCardModule() {
      _classCallCheck(this, MovieCardModule);
    };

    MovieCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MovieCardModule
    });
    MovieCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MovieCardModule_Factory(t) {
        return new (t || MovieCardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _image_image_module__WEBPACK_IMPORTED_MODULE_3__["ImageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieCardModule, {
        declarations: [_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"], _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_4__["MovieRatingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _image_image_module__WEBPACK_IMPORTED_MODULE_3__["ImageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
        exports: [_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"], _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_4__["MovieRatingComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"], _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_4__["MovieRatingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _image_image_module__WEBPACK_IMPORTED_MODULE_3__["ImageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
          exports: [_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"], _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_4__["MovieRatingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/movie-card/movie-card/movie-card.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui/components/movie-card/movie-card/movie-card.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MovieCardComponent */

  /***/
  function srcAppUiComponentsMovieCardMovieCardMovieCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function () {
      return MovieCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/favourites/favourites.actions */
    "./src/app/store/favourites/favourites.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _image_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../image/image/image.component */
    "./src/app/ui/components/image/image/image.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../movie-rating/movie-rating.component */
    "./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts");

    var _c0 = function _c0() {
      return {
        high: "movieCard--rating-high",
        normal: "movieCard--rating-normal",
        low: "movieCard--rating-low"
      };
    };

    function MovieCardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-rating", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx_r0.movie.vote_average)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function MovieCardComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardComponent_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.favourite($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MovieCardComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardComponent_ng_template_11_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.unfavourite($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/movies", a1];
    };

    var MovieCardComponent = /*#__PURE__*/function () {
      function MovieCardComponent(router, store) {
        _classCallCheck(this, MovieCardComponent);

        this.router = router;
        this.store = store;
      }

      _createClass(MovieCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.auth.loggedIn;
          }));
          this.favourite$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return state.favourites.favourites && state.favourites.favourites[_this22.movie.id] !== undefined;
          }));
        }
      }, {
        key: "favourite",
        value: function favourite($event) {
          var _this23 = this;

          $event.stopPropagation();
          $event.preventDefault();
          this.loggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (loggedIn) {
            if (loggedIn) {
              _this23.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieToFavourites"])({
                payload: {
                  movie: Object.assign(Object.assign({}, _this23.movie), {
                    personalNote: ''
                  })
                }
              }));
            } else {
              _this23.router.navigate(['/auth/signIn']);
            }
          });
        }
      }, {
        key: "unfavourite",
        value: function unfavourite($event) {
          $event.stopPropagation();
          $event.preventDefault();
          this.store.dispatch(Object(src_app_store_favourites_favourites_actions__WEBPACK_IMPORTED_MODULE_2__["removeMovieFromFavourites"])({
            payload: {
              movieId: this.movie.id
            }
          }));
        }
      }]);

      return MovieCardComponent;
    }();

    MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) {
      return new (t || MovieCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieCardComponent,
      selectors: [["app-movie-card"]],
      inputs: {
        movie: "movie"
      },
      decls: 13,
      vars: 15,
      consts: [[3, "routerLink"], [1, "movieCard"], [1, "movieCard--img", 3, "path", "aspectRatio"], [1, "movieCard--title"], [1, "gray"], ["class", "movieCard--rating bold", 4, "ngIf"], ["class", "movieCard--addToFavourites", 3, "click", 4, "ngIf", "ngIfElse"], ["alreadyFavourited", ""], [1, "movieCard--rating", "bold"], [3, "rating", "styles"], [1, "movieCard--addToFavourites", 3, "click"], [1, "material-icons"]],
      template: function MovieCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieCardComponent_div_8_Template, 2, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieCardComponent_button_9_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieCardComponent_ng_template_11_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.movie.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.movie.poster_path)("aspectRatio", 3 / 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.original_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 8, ctx.movie.release_date, "y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.vote_count > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx.favourite$))("ngIfElse", _r2);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _image_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _movie_rating_movie_rating_component__WEBPACK_IMPORTED_MODULE_7__["MovieRatingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".movieCard[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n}\n.movieCard--img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.movieCard--rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: flex;\n  justify-content: center;\n  font-size: 14px;\n  border-bottom-right-radius: 5px;\n}\n.movieCard--rating-high[_ngcontent-%COMP%] {\n  color: green;\n}\n.movieCard--rating-normal[_ngcontent-%COMP%] {\n  color: orange;\n}\n.movieCard--rating-low[_ngcontent-%COMP%] {\n  color: red;\n}\n.movieCard--addToFavourites[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 0;\n  border-bottom-left-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n.movieCard--addToFavourites[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f5c518;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9tb3ZpZS1jYXJkL21vdmllLWNhcmQvQzpcXFVzZXJzXFxtcGF0clxcT25lRHJpdmVcXERlc2t0b3BcXG1pcm9zbGF2LXBhdHJhc2hrb3YtbWFzdGVyLUFzc2lnbm1lbnQgMTJcXEFzc2lnbm1lbnQgMTIvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxtb3ZpZS1jYXJkXFxtb3ZpZS1jYXJkXFxtb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL21vdmllLWNhcmQvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL21vdmllLWNhcmQvbW92aWUtY2FyZC9DOlxcVXNlcnNcXG1wYXRyXFxPbmVEcml2ZVxcRGVza3RvcFxcbWlyb3NsYXYtcGF0cmFzaGtvdi1tYXN0ZXItQXNzaWdubWVudCAxMlxcQXNzaWdubWVudCAxMi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLG9DQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFFQSwrQkFBQTtBQ1BKO0FEU0k7RUFDRSxZQUFBO0FDUE47QURTSTtFQUNFLGFBQUE7QUNQTjtBRFNJO0VBQ0UsVUFBQTtBQ1BOO0FEV0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FDYko7QURlSTtFQUNFLGNFN0NZO0FEZ0NsQiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvbW92aWUtY2FyZC9tb3ZpZS1jYXJkL21vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcblxuLm1vdmllQ2FyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYtLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmLS1yYXRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjcpO1xuXG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAmLWhpZ2gge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAmLW5vcm1hbCB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgIH1cbiAgICAmLWxvdyB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuXG4gICYtLWFkZFRvRmF2b3VyaXRlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG4gIH1cbn1cbiIsIi5tb3ZpZUNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb3ZpZUNhcmQtLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vdmllQ2FyZC0tcmF0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubW92aWVDYXJkLS1yYXRpbmctaGlnaCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tb3ZpZUNhcmQtLXJhdGluZy1ub3JtYWwge1xuICBjb2xvcjogb3JhbmdlO1xufVxuLm1vdmllQ2FyZC0tcmF0aW5nLWxvdyB7XG4gIGNvbG9yOiByZWQ7XG59XG4ubW92aWVDYXJkLS1hZGRUb0Zhdm91cml0ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW92aWVDYXJkLS1hZGRUb0Zhdm91cml0ZXMgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICNmNWM1MTg7XG59IiwiJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG5cbiRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuXG4vLyBCcmVha3BvaW50c1xuJHNtOiA0ODBweDtcbiRtZDogNzY4cHg7XG4kbGc6IDEwMjRweDtcbiR4bDogMTI4MHB4O1xuJHh4bDogMTQ0MHB4O1xuXG4kZm9udC1wcmltYXJ5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogd2hpdGU7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ1LCAxOTcsIDI0KTtcbiRjb2xvci1kYW5nZXI6IHJnYigyNTUsIDQyLCA0Mik7XG5cbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogcmdiKDIwOSwgMTY5LCAyMik7XG5cbiRncmF5OiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG4kbGlnaHQtZ3JheTogcmdiKDE4OSwgMTg5LCAxODkpO1xuJGRhcmstZ3JheTogcmdiKDE4LCAxOCwgMTgpO1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-card',
          templateUrl: './movie-card.component.html',
          styleUrls: ['./movie-card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, {
        movie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/ui/components/movie-card/movie-rating/movie-rating.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MovieRatingComponent */

  /***/
  function srcAppUiComponentsMovieCardMovieRatingMovieRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieRatingComponent", function () {
      return MovieRatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../pipes/rating-percent/rating-percent.pipe */
    "./src/app/ui/pipes/rating-percent/rating-percent.pipe.ts");

    var MovieRatingComponent = /*#__PURE__*/function () {
      function MovieRatingComponent() {
        _classCallCheck(this, MovieRatingComponent);

        this.suffix = '%';
      }

      _createClass(MovieRatingComponent, [{
        key: "className",
        get: function get() {
          if (this.styles) {
            if (this.rating >= 7) {
              return this.styles.high;
            } else if (this.rating >= 4) {
              return this.styles.normal;
            } else {
              return this.styles.low;
            }
          }
        }
      }]);

      return MovieRatingComponent;
    }();

    MovieRatingComponent.ɵfac = function MovieRatingComponent_Factory(t) {
      return new (t || MovieRatingComponent)();
    };

    MovieRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieRatingComponent,
      selectors: [["app-movie-rating"]],
      hostVars: 1,
      hostBindings: function MovieRatingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("className", ctx.className);
        }
      },
      inputs: {
        rating: "rating",
        styles: "styles",
        suffix: "suffix"
      },
      decls: 3,
      vars: 4,
      template: function MovieRatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ratingPercent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.rating), "", ctx.suffix, "");
        }
      },
      pipes: [_pipes_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_1__["RatingPercentPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvbW92aWUtY2FyZC9tb3ZpZS1yYXRpbmcvbW92aWUtcmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-rating',
          templateUrl: './movie-rating.component.html',
          styleUrls: ['./movie-rating.component.scss']
        }]
      }], null, {
        rating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        suffix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['className']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/read-more/read-more.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui/components/read-more/read-more.module.ts ***!
    \*************************************************************/

  /*! exports provided: ReadMoreModule */

  /***/
  function srcAppUiComponentsReadMoreReadMoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadMoreModule", function () {
      return ReadMoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./read-more/read-more.component */
    "./src/app/ui/components/read-more/read-more/read-more.component.ts");
    /* harmony import */


    var ngx_linky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-linky */
    "./node_modules/ngx-linky/__ivy_ngcc__/fesm2015/ngx-linky.js");

    var ReadMoreModule = function ReadMoreModule() {
      _classCallCheck(this, ReadMoreModule);
    };

    ReadMoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReadMoreModule
    });
    ReadMoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReadMoreModule_Factory(t) {
        return new (t || ReadMoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_linky__WEBPACK_IMPORTED_MODULE_3__["LinkyModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReadMoreModule, {
        declarations: [_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__["ReadMoreComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_linky__WEBPACK_IMPORTED_MODULE_3__["LinkyModule"]],
        exports: [_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__["ReadMoreComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadMoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__["ReadMoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_linky__WEBPACK_IMPORTED_MODULE_3__["LinkyModule"]],
          exports: [_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_2__["ReadMoreComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/read-more/read-more/read-more.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ui/components/read-more/read-more/read-more.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ReadMoreComponent */

  /***/
  function srcAppUiComponentsReadMoreReadMoreReadMoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadMoreComponent", function () {
      return ReadMoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReadMoreComponent_div_2_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadMoreComponent_div_2_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.showMore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReadMoreComponent_div_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadMoreComponent_div_2_ng_template_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.showLess();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReadMoreComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReadMoreComponent_div_2_a_1_Template, 2, 0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReadMoreComponent_div_2_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.show)("ngIfElse", _r2);
      }
    }

    var ReadMoreComponent = /*#__PURE__*/function () {
      function ReadMoreComponent() {
        _classCallCheck(this, ReadMoreComponent);

        this.readMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
      }

      _createClass(ReadMoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showLess();
        }
      }, {
        key: "showMore",
        value: function showMore() {
          this.readMore.emit();
          this.showedContent = this.content;
          this.show = true;
        }
      }, {
        key: "showLess",
        value: function showLess() {
          if (this.content.length > this.length && this.length >= 0) {
            this.showedContent = this.content.slice(0, this.length - 4) + ' ...';
          } else {
            this.showedContent = this.content;
          }

          this.show = false;
        }
      }]);

      return ReadMoreComponent;
    }();

    ReadMoreComponent.ɵfac = function ReadMoreComponent_Factory(t) {
      return new (t || ReadMoreComponent)();
    };

    ReadMoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReadMoreComponent,
      selectors: [["app-read-more"]],
      inputs: {
        content: "content",
        length: "length"
      },
      outputs: {
        readMore: "readMore"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "readMore"], [1, "readMore--content", 3, "innerHTML"], ["class", "readMore--link", 4, "ngIf"], [1, "readMore--link"], [3, "click", 4, "ngIf", "ngIfElse"], ["showLessBtn", ""], [3, "click"]],
      template: function ReadMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReadMoreComponent_div_2_Template, 4, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.showedContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.length > ctx.length && ctx.length >= 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".readMore--content[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.readMore--link[_ngcontent-%COMP%] {\n  color: #f5c518;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xccmVhZC1tb3JlXFxyZWFkLW1vcmVcXHJlYWQtbW9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlL3JlYWQtbW9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlL0M6XFxVc2Vyc1xcbXBhdHJcXE9uZURyaXZlXFxEZXNrdG9wXFxtaXJvc2xhdi1wYXRyYXNoa292LW1hc3Rlci1Bc3NpZ25tZW50IDEyXFxBc3NpZ25tZW50IDEyL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxjRU1jO0VGSmQsZUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlL3JlYWQtbW9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4ucmVhZE1vcmUge1xuICAmLS1jb250ZW50IHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cblxuICAmLS1saW5rIHtcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLnJlYWRNb3JlLS1jb250ZW50IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnJlYWRNb3JlLS1saW5rIHtcbiAgY29sb3I6ICNmNWM1MTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIkaGVhZGVyLWhlaWdodDogNTBweDtcblxuJGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cbi8vIEJyZWFrcG9pbnRzXG4kc206IDQ4MHB4O1xuJG1kOiA3NjhweDtcbiRsZzogMTAyNHB4O1xuJHhsOiAxMjgwcHg7XG4keHhsOiAxNDQwcHg7XG5cbiRmb250LXByaW1hcnk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiB3aGl0ZTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDUsIDE5NywgMjQpO1xuJGNvbG9yLWRhbmdlcjogcmdiKDI1NSwgNDIsIDQyKTtcblxuJGJhY2tncm91bmQtc2Vjb25kYXJ5OiByZ2IoMjA5LCAxNjksIDIyKTtcblxuJGdyYXk6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiRsaWdodC1ncmF5OiByZ2IoMTg5LCAxODksIDE4OSk7XG4kZGFyay1ncmF5OiByZ2IoMTgsIDE4LCAxOCk7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadMoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-read-more',
          templateUrl: './read-more.component.html',
          styleUrls: ['./read-more.component.scss']
        }]
      }], null, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readMore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/directives/click-outside/click-outside.directive.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ui/directives/click-outside/click-outside.directive.ts ***!
    \************************************************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppUiDirectivesClickOutsideClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickOutsideDirective = /*#__PURE__*/function () {
      function ClickOutsideDirective(elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this.elementRef = elementRef;
        this.appClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(target) {
          var clickedInside = this.elementRef.nativeElement.contains(target);

          if (!clickedInside) {
            this.appClickOutside.emit();
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "appClickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        appClickOutside: "appClickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appClickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        appClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/directives/directives.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui/directives/directives.module.ts ***!
    \****************************************************/

  /*! exports provided: DirectivesModule */

  /***/
  function srcAppUiDirectivesDirectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
      return DirectivesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./click-outside/click-outside.directive */
    "./src/app/ui/directives/click-outside/click-outside.directive.ts");

    var DirectivesModule = function DirectivesModule() {
      _classCallCheck(this, DirectivesModule);
    };

    DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DirectivesModule
    });
    DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DirectivesModule_Factory(t) {
        return new (t || DirectivesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, {
        declarations: [_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/duration/duration.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui/pipes/duration/duration.pipe.ts ***!
    \****************************************************/

  /*! exports provided: DurationPipe */

  /***/
  function srcAppUiPipesDurationDurationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DurationPipe", function () {
      return DurationPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DurationPipe = /*#__PURE__*/function () {
      function DurationPipe() {
        _classCallCheck(this, DurationPipe);
      }

      _createClass(DurationPipe, [{
        key: "transform",
        value: function transform(value) {
          var hours = Math.floor(value / 60);
          var minutes = value - hours * 60;
          return "".concat(hours, "h ").concat(minutes, "m");
        }
      }]);

      return DurationPipe;
    }();

    DurationPipe.ɵfac = function DurationPipe_Factory(t) {
      return new (t || DurationPipe)();
    };

    DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "duration",
      type: DurationPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'duration'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/genres/genres.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/ui/pipes/genres/genres.pipe.ts ***!
    \************************************************/

  /*! exports provided: GenresPipe */

  /***/
  function srcAppUiPipesGenresGenresPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenresPipe", function () {
      return GenresPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GenresPipe = /*#__PURE__*/function () {
      function GenresPipe() {
        _classCallCheck(this, GenresPipe);
      }

      _createClass(GenresPipe, [{
        key: "transform",
        value: function transform(value) {
          return value.map(function (genre) {
            return genre.name;
          }).join(', ');
        }
      }]);

      return GenresPipe;
    }();

    GenresPipe.ɵfac = function GenresPipe_Factory(t) {
      return new (t || GenresPipe)();
    };

    GenresPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "genres",
      type: GenresPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenresPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'genres'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/markdown/markdown.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui/pipes/markdown/markdown.pipe.ts ***!
    \****************************************************/

  /*! exports provided: MarkdownPipe */

  /***/
  function srcAppUiPipesMarkdownMarkdownPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function () {
      return MarkdownPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! markdown-it */
    "./node_modules/markdown-it/index.js");
    /* harmony import */


    var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);

    var MarkdownPipe = /*#__PURE__*/function () {
      function MarkdownPipe() {
        _classCallCheck(this, MarkdownPipe);
      }

      _createClass(MarkdownPipe, [{
        key: "transform",
        value: function transform(value) {
          var html = new markdown_it__WEBPACK_IMPORTED_MODULE_1__({
            linkify: true
          }).render(value);

          if (html.startsWith('<p>')) {
            return html.slice(3, -5);
          }

          return html;
        }
      }]);

      return MarkdownPipe;
    }();

    MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) {
      return new (t || MarkdownPipe)();
    };

    MarkdownPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "markdown",
      type: MarkdownPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'markdown'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/pipes.module.ts":
  /*!******************************************!*\
    !*** ./src/app/ui/pipes/pipes.module.ts ***!
    \******************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppUiPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rating-percent/rating-percent.pipe */
    "./src/app/ui/pipes/rating-percent/rating-percent.pipe.ts");
    /* harmony import */


    var _duration_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./duration/duration.pipe */
    "./src/app/ui/pipes/duration/duration.pipe.ts");
    /* harmony import */


    var _markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./markdown/markdown.pipe */
    "./src/app/ui/pipes/markdown/markdown.pipe.ts");
    /* harmony import */


    var _genres_genres_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./genres/genres.pipe */
    "./src/app/ui/pipes/genres/genres.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_2__["RatingPercentPipe"], _duration_duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"], _markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_4__["MarkdownPipe"], _genres_genres_pipe__WEBPACK_IMPORTED_MODULE_5__["GenresPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_2__["RatingPercentPipe"], _duration_duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"], _markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_4__["MarkdownPipe"], _genres_genres_pipe__WEBPACK_IMPORTED_MODULE_5__["GenresPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_2__["RatingPercentPipe"], _duration_duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"], _markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_4__["MarkdownPipe"], _genres_genres_pipe__WEBPACK_IMPORTED_MODULE_5__["GenresPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_rating_percent_rating_percent_pipe__WEBPACK_IMPORTED_MODULE_2__["RatingPercentPipe"], _duration_duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"], _markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_4__["MarkdownPipe"], _genres_genres_pipe__WEBPACK_IMPORTED_MODULE_5__["GenresPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/rating-percent/rating-percent.pipe.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui/pipes/rating-percent/rating-percent.pipe.ts ***!
    \****************************************************************/

  /*! exports provided: RatingPercentPipe */

  /***/
  function srcAppUiPipesRatingPercentRatingPercentPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingPercentPipe", function () {
      return RatingPercentPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RatingPercentPipe = /*#__PURE__*/function () {
      function RatingPercentPipe() {
        _classCallCheck(this, RatingPercentPipe);
      }

      _createClass(RatingPercentPipe, [{
        key: "transform",
        value: function transform(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
          return Math.round((value - min) / (max - min) * 100);
        }
      }]);

      return RatingPercentPipe;
    }();

    RatingPercentPipe.ɵfac = function RatingPercentPipe_Factory(t) {
      return new (t || RatingPercentPipe)();
    };

    RatingPercentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ratingPercent",
      type: RatingPercentPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingPercentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ratingPercent'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/services/request/request.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/ui/services/request/request.service.ts ***!
    \********************************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppUiServicesRequestRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RequestService = /*#__PURE__*/function () {
      function RequestService(http) {
        _classCallCheck(this, RequestService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json; charset=utf-8'
        });
      }

      _createClass(RequestService, [{
        key: "get",
        value: function get(path) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http.get(path, {
            params: query
          });
        }
      }, {
        key: "post",
        value: function post(path, body) {
          var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.http.post(path, body, {
            params: query,
            headers: this.headers
          });
        }
      }, {
        key: "put",
        value: function put(path, body) {
          var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.http.put(path, body, {
            params: query,
            headers: this.headers
          });
        }
      }, {
        key: "patch",
        value: function patch(path, body) {
          var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.http.patch(path, body, {
            params: query,
            headers: this.headers
          });
        }
      }, {
        key: "delete",
        value: function _delete(path) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http["delete"](path, {
            params: query,
            headers: this.headers
          });
        }
      }]);

      return RequestService;
    }();

    RequestService.ɵfac = function RequestService_Factory(t) {
      return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestService,
      factory: RequestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\mpatr\OneDrive\Desktop\miroslav-patrashkov-master-Assignment 12\Assignment 12\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map