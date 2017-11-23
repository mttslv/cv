webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page = (function () {
    function Page(page, title, icon) {
        this.page = page;
        this.title = title;
        this.icon = icon;
    }
    return Page;
}());
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = new Page(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], "Home", "home");
        this.tab2Root = new Page(__WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */], "About", "information-circle");
        this.tab3Root = new Page(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */], "Contact", "contacts");
        this.tabslist = [this.tab1Root, this.tab2Root, this.tab3Root];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top" tabsHighlight="true" >\n  <ion-tab\n    *ngFor="let item of tabslist"\n      [root]="item.page"\n      [tabTitle]="item.title"\n      [tabIcon]="item.icon" >\n    </ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OrbitControls__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TransformControls__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import './DragControls';

var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ngOnInit = function () {
        this.container = this.elementRef.nativeElement;
        this.init();
    };
    AboutPage.prototype.init = function () {
        var screen = {
            width: 400,
            height: 400
        }, view = {
            angle: 45,
            aspect: screen.width / screen.height,
            near: 0.1,
            far: 1000
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["A" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["w" /* PerspectiveCamera */](view.angle, view.aspect, view.near, view.far);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["K" /* WebGLRenderer */]();
        this.scene.add(this.camera);
        this.scene.add(new __WEBPACK_IMPORTED_MODULE_2_three__["a" /* AxisHelper */](20));
        this.camera.position.set(10, 10, 10);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_2_three__["J" /* Vector3 */](0, 0, 0));
        this.renderer.setSize(screen.width, screen.height);
        this.container.appendChild(this.renderer.domElement);
        var geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* BoxGeometry */](5, 5, 5), material = new __WEBPACK_IMPORTED_MODULE_2_three__["r" /* MeshBasicMaterial */]({ color: 0xFFFFFF, wireframe: false });
        this.cube = new __WEBPACK_IMPORTED_MODULE_2_three__["q" /* Mesh */](geometry, material);
        this.cube.position.set(-5, -45, -45);
        this.scene.add(this.cube);
        this.objects = [];
        for (var i = 0; i < 5; i++) {
            var object = new __WEBPACK_IMPORTED_MODULE_2_three__["q" /* Mesh */](geometry, material);
            object.position.x = Math.random() * (1 + 100) + (-100);
            object.position.y = Math.random() * (1 + 100) + (-100);
            object.position.z = Math.random() * (1 + 100) + (-100);
            // object.position.set(-30,-30,-30);
            this.objects.push(object);
            this.scene.add(object);
        }
        //controllo camera con mouse
        this.controls = new __WEBPACK_IMPORTED_MODULE_2_three__["OrbitControls"](this.camera, this.renderer.domElement);
        var controls = this.controls;
        //this.controls.addEventListener( 'change', this.render ); // remove when using animation loop
        // enable animation loop when using damping or autorotation
        //controls.enableDamping = true;
        //controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;
        this.dragControls = new __WEBPACK_IMPORTED_MODULE_2_three__["TransformControls"](this.camera, this.renderer.domElement);
        var dragControls1 = new __WEBPACK_IMPORTED_MODULE_2_three__["TransformControls"](this.camera, this.renderer.domElement);
        this.dragControls.attach(this.objects[0]);
        dragControls1.attach(this.objects[1]);
        this.scene.add(this.dragControls);
        this.scene.add(dragControls1);
        this.render();
    };
    AboutPage.prototype.render = function () {
        var self = this;
        //this.controls.update();
        //   this.dragControls.update();
        (function render() {
            requestAnimationFrame(render);
            // // find intersections
            // 	this.raycaster.setFromCamera( this.mouse, this.camera );
            // 	var intersects = this.raycaster.intersectObjects( this.scene.children );
            // 	if ( intersects.length > 0 ) {
            // 		if ( this.INTERSECTED != intersects[ 0 ].object ) {
            // 			if ( this.INTERSECTED ) this.INTERSECTED.material.emissive.setHex( this.INTERSECTED.currentHex );
            // 			this.INTERSECTED = intersects[ 0 ].object;
            // 			this.INTERSECTED.currentHex = this.INTERSECTED.material.emissive.getHex();
            // 			this.INTERSECTED.material.emissive.setHex( 0xff0000 );
            // 		}
            // 	} else {
            // 		if ( this.INTERSECTED ) this.INTERSECTED.material.emissive.setHex( this.INTERSECTED.currentHex );
            // 		this.INTERSECTED = null;
            // 	}
            self.renderer.render(self.scene, self.camera);
            self.animate();
        }());
    };
    AboutPage.prototype.animate = function () {
        // this.cube.rotateX(0.1);
        // this.cube.rotateY(0.1);
        // this.cube.position.addScalar(0.2);
    };
    return AboutPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AboutPage.prototype, "elementRef", void 0);
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #container></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_language_language__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.languages = [
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("js", 3, '<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("java", 4, '<svg viewBox="0 0 128 128"><path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path></svg>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("php", 4, '<svg viewBox="0 0 128 128"><path id="a" d="M64.026 96.076c33.676 0 60.976-14.361 60.976-32.076s-27.3-32.075-60.976-32.075-60.975 14.36-60.975 32.075 27.3 32.076 60.975 32.076"></path><path id="c" d="M2.998 31.924h122.004v64.1h-122.004z"></path><path id="e" d="M2.998 31.924h122.004v64.1h-122.004z"></path><path fill="#6181B6" d="M64.026 93.694c32.36 0 58.594-13.295 58.594-29.694s-26.233-29.694-58.594-29.694-58.593 13.295-58.593 29.694 26.233 29.694 58.593 29.694z"></path><path fill="#fff" d="M75.896 73.598l2.906-14.958c.656-3.377.11-5.896-1.62-7.486-1.677-1.54-4.523-2.288-8.703-2.288h-5.033l1.44-7.412c.055-.279-.02-.568-.2-.788-.181-.219-.45-.347-.735-.347h-6.947c-.456 0-.848.323-.936.771l-3.086 15.881c-.28-1.787-.973-3.323-2.079-4.591-2.038-2.332-5.261-3.515-9.58-3.515h-13.467c-.456 0-.848.322-.935.771l-6.247 32.144c-.055.278.02.568.2.787.181.22.451.347.735.347h7.002c.456 0 .849-.323.936-.771l1.511-7.775h5.213c2.735 0 5.032-.296 6.827-.881 1.834-.596 3.522-1.607 5.011-3.001 1.202-1.104 2.196-2.341 2.96-3.676l-1.248 6.424c-.054.278.02.567.2.787s.451.347.735.347h6.947c.456 0 .848-.323.936-.771l3.429-17.645h4.767c2.031 0 2.626.404 2.787.578.147.159.452.718.11 2.48l-2.764 14.223c-.055.278.019.567.2.787.181.22.45.347.735.347h7.058c.455.001.848-.322.935-.769zm-32.208-12.36c-.437 2.242-1.259 3.842-2.444 4.755-1.205.927-3.132 1.397-5.727 1.397h-3.104l2.244-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.802 2.199.407 4.238zM105.604 52.38c-2.038-2.332-5.261-3.515-9.581-3.515h-13.464c-.456 0-.849.322-.936.771l-6.248 32.144c-.054.278.02.568.201.787.181.22.45.347.734.347h7.003c.455 0 .848-.323.935-.771l1.512-7.775h5.212c2.735 0 5.033-.296 6.827-.881 1.835-.596 3.522-1.607 5.011-3.001 1.241-1.141 2.264-2.421 3.037-3.806.772-1.383 1.328-2.927 1.65-4.588.797-4.094.16-7.363-1.893-9.712zm-7.262 8.858c-.437 2.242-1.259 3.842-2.444 4.755-1.204.927-3.131 1.397-5.727 1.397h-3.104l2.245-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.801 2.199.406 4.238z"></path><path fill="#000004" d="M38.67 54.89c2.66 0 4.434.491 5.32 1.474.885.982 1.097 2.668.633 5.057-.484 2.488-1.416 4.264-2.798 5.328-1.382 1.063-3.485 1.595-6.308 1.595h-4.26l2.614-13.453h4.799v-.001zm-17.061 27.072h7.002l1.661-8.546h5.998c2.646 0 4.823-.277 6.532-.834 1.709-.556 3.263-1.488 4.661-2.797 1.173-1.078 2.122-2.268 2.85-3.569.727-1.3 1.242-2.734 1.547-4.305.741-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.862-3.189h-13.466l-6.247 32.144zM57.003 41.271h6.947l-1.661 8.546h6.189c3.894 0 6.58.68 8.059 2.037 1.479 1.359 1.921 3.561 1.33 6.603l-2.906 14.959h-7.058l2.763-14.223c.314-1.618.199-2.722-.347-3.311-.546-.587-1.708-.882-3.485-.882h-5.553l-3.578 18.416h-6.947l6.247-32.145zM93.324 54.89c2.66 0 4.434.491 5.319 1.474.887.982 1.097 2.668.634 5.057-.484 2.488-1.417 4.264-2.799 5.328-1.382 1.063-3.484 1.595-6.308 1.595h-4.259l2.614-13.453h4.799v-.001zm-17.06 27.072h7.002l1.661-8.546h5.997c2.646 0 4.823-.277 6.532-.834 1.71-.556 3.264-1.488 4.661-2.797 1.174-1.078 2.123-2.268 2.851-3.569.726-1.3 1.242-2.734 1.547-4.305.74-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.863-3.189h-13.465l-6.247 32.144z"></path></svg>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("phyton", 4, '<svg viewBox="0 0 128 128"><path fill="#646464" d="M52.458 61.139c0-4.071-1.161-6.161-3.483-6.275-.924-.045-1.826.103-2.703.443-.701.251-1.172.499-1.42.75v9.718c1.485.932 2.804 1.364 3.954 1.297 2.433-.162 3.652-2.137 3.652-5.933zm2.863.169c0 2.068-.484 3.785-1.46 5.15-1.087 1.546-2.594 2.34-4.521 2.385-1.453.047-2.949-.409-4.488-1.363v8.833l-2.491-.889v-19.606c.409-.5.935-.931 1.572-1.296 1.482-.864 3.284-1.308 5.404-1.33l.036.035c1.938-.024 3.431.771 4.479 2.385.979 1.48 1.469 3.377 1.469 5.696z"></path><path fill="#646464" d="M70.544 67.104c0 2.773-.278 4.694-.834 5.763-.559 1.068-1.622 1.921-3.191 2.557-1.272.501-2.649.773-4.126.819l-.412-1.569c1.501-.204 2.559-.409 3.172-.613 1.207-.408 2.036-1.035 2.491-1.875.365-.684.545-1.988.545-3.921v-.648c-1.703.773-3.488 1.158-5.354 1.158-1.227 0-2.309-.385-3.24-1.158-1.046-.842-1.57-1.911-1.57-3.205v-10.367l2.491-.853v10.435c0 1.114.359 1.973 1.079 2.574.72.603 1.651.892 2.793.87 1.142-.024 2.365-.467 3.665-1.33v-12.173h2.491v13.536z"></path><path fill="#646464" d="M80.267 68.706c-.297.024-.569.035-.82.035-1.409 0-2.507-.334-3.292-1.008-.783-.674-1.175-1.603-1.175-2.788v-9.811h-1.706v-1.566h1.706v-4.161l2.488-.886v5.047h2.798v1.566h-2.798v9.743c0 .935.25 1.597.752 1.982.43.32 1.115.502 2.046.549v1.298z"></path><path fill="#646464" d="M95.347 68.502h-2.49v-9.614c0-.978-.229-1.82-.684-2.524-.526-.795-1.256-1.193-2.194-1.193-1.142 0-2.57.603-4.284 1.808v11.524h-2.491v-22.98l2.491-.785v10.467c1.591-1.158 3.33-1.738 5.218-1.738 1.319 0 2.387.444 3.205 1.33.82.886 1.229 1.989 1.229 3.308v10.397z"></path><path fill="#646464" d="M108.586 60.747c0-1.565-.297-2.856-.888-3.879-.704-1.245-1.796-1.902-3.273-1.97-2.731.157-4.094 2.114-4.094 5.864 0 1.72.284 3.155.856 4.308.73 1.47 1.826 2.193 3.287 2.169 2.741-.02 4.112-2.184 4.112-6.492zm2.728.016c0 2.227-.57 4.079-1.707 5.56-1.25 1.656-2.978 2.487-5.183 2.487-2.186 0-3.889-.831-5.118-2.487-1.114-1.48-1.671-3.333-1.671-5.56 0-2.093.603-3.853 1.808-5.287 1.272-1.521 2.945-2.283 5.014-2.283 2.068 0 3.752.763 5.049 2.283 1.205 1.434 1.808 3.194 1.808 5.287z"></path><path fill="#646464" d="M125.593 68.502h-2.491v-10.159c0-1.114-.335-1.984-1.006-2.61-.67-.625-1.564-.928-2.679-.903-1.183.022-2.308.41-3.376 1.159v12.514h-2.491v-12.822c1.433-1.044 2.752-1.726 3.957-2.044 1.136-.297 2.139-.444 3.003-.444.591 0 1.147.058 1.67.172.979.226 1.774.646 2.387 1.261.684.682 1.025 1.5 1.025 2.456v11.42z"></path><path fill="url(#a)" d="M17.761 45.612c-1.282.007-2.505.116-3.583.307-3.172.561-3.748 1.734-3.748 3.896v2.857h7.496v.952h-10.309000000000001c-2.179 0-4.086 1.31-4.683 3.8-.688 2.856-.719 4.639 0 7.619.533 2.219 1.805 3.801 3.984 3.801h2.577v-3.424c0-2.475 2.141-4.657 4.683-4.657h7.488c2.084 0 3.748-1.717 3.748-3.809v-7.139c0-2.031-1.714-3.558-3.748-3.896-1.288-.214-2.624-.312-3.905-.307zm-4.054 2.299c.774 0 1.407.643 1.407 1.433 0 .787-.632 1.425-1.407 1.425-.777 0-1.406-.638-1.406-1.425-.001-.79.629-1.433 1.406-1.433z"></path><path fill="url(#b)" d="M26.349 53.625v3.329c0 2.58-2.188 4.752-4.683 4.752h-7.488c-2.051 0-3.748 1.756-3.748 3.81v7.139c0 2.03 1.767 3.227 3.748 3.809 2.373.698 4.648.824 7.488 0 1.887-.546 3.748-1.646 3.748-3.809v-2.857h-7.488v-.952h11.236c2.179 0 2.991-1.52 3.749-3.801.782-2.348.749-4.606 0-7.619-.539-2.168-1.567-3.8-3.749-3.8h-2.813zm-4.212 18.077c.777 0 1.407.636 1.407 1.424 0 .79-.629 1.432-1.407 1.432-.774 0-1.406-.642-1.406-1.432 0-.788.632-1.424 1.406-1.424z"></path><path opacity=".444" fill="url(#c)" enable-background="new" d="M28.057 81.315c0 1.075-4.498 1.948-10.045 1.948-5.548 0-10.046-.873-10.046-1.948 0-1.076 4.498-1.948 10.046-1.948 5.548 0 10.045.872 10.045 1.948z"></path></svg>')
        ];
        this.framework = [
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("angular", 3, '<svg viewBox="0 0 128 128"><path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path></svg>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("bootstrap", 4, '<svg viewBox="0 0 128 128"><path fill="#5B4282" d="M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM57.09 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671 122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778 120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494 125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777 2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951 56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895 48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127 6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127 14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43 57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098-2.569.653-5.717 1.181-9.444 1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"></path></svg>'),
            new __WEBPACK_IMPORTED_MODULE_2__models_language_language__["a" /* Language */]("node", 4, '<svg viewBox="0 0 128 128"><path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"></path></svg>')
        ];
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      \n      <ion-col col-12 col-sm-12 col-md-6>\n        \n        <ion-card>\n          <ion-card-header>\n           About Me\n          </ion-card-header>\n          <ion-card-content>\n               \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 col-md-6 >\n\n          <!-- effect=\'flip\' -->\n        <ion-slides pager >  \n            \n          <ion-slide>\n              <ion-card>\n                <ion-card-header>\n                  Language\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-grid>\n                    <ion-row >\n                      <ion-col col-12>\n                        <radar-chart [data]="languages"></radar-chart>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-card>\n            </ion-slide>\n\n            <ion-slide >\n              <ion-card >\n                <ion-card-header>\n                  Framework\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-grid >\n                    <ion-row > \n                      <ion-col col-12>\n                        <radar-chart [data]="framework"></radar-chart>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-card>\n            </ion-slide>\n          \n          </ion-slides>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_radar_chart_radar_chart__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_item_svg_components_item_svg__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__components_radar_chart_radar_chart__["a" /* RadarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_components_item_svg_components_item_svg__["a" /* ComponentsItemSvgComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__components_radar_chart_radar_chart__["a" /* RadarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_components_item_svg_components_item_svg__["a" /* ComponentsItemSvgComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\app\app.html"*/'<ion-header>\n<ion-toolbar>\n  <ion-title>Toolbar</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-nav [root]="rootPage"></ion-nav>        \n</ion-content>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(106);
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe


__WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"] = function ( object, domElement ) {

	this.object = object;

	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: __WEBPACK_IMPORTED_MODULE_0_three__["o" /* MOUSE */].LEFT, ZOOM: __WEBPACK_IMPORTED_MODULE_0_three__["o" /* MOUSE */].MIDDLE, PAN: __WEBPACK_IMPORTED_MODULE_0_three__["o" /* MOUSE */].RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy( scope.target );
		scope.position0.copy( scope.object.position );
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		// so camera.up is the orbit axis
		var quat = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]().setFromUnitVectors( object.up, new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var lastQuaternion = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();

		return function update() {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location
			scope.target.add( panOffset );

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

			}

			scale = 1;
			panOffset.set( 0, 0, 0 );

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		window.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new __WEBPACK_IMPORTED_MODULE_0_three__["B" /* Spherical */]();
	var sphericalDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["B" /* Spherical */]();

	var scale = 1;
	var panOffset = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
	var zoomChanged = false;

	var rotateStart = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var rotateEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var rotateDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();

	var panStart = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var panEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var panDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();

	var dollyStart = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var dollyEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();
	var dollyDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function () {

		var v = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function () {

		var v = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		return function panUp( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		return function pan( deltaX, deltaY ) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["w" /* PerspectiveCamera */] ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["v" /* OrthographicCamera */] ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyIn( dollyScale ) {

		if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["w" /* PerspectiveCamera */] ) {

			scale /= dollyScale;

		} else if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["v" /* OrthographicCamera */] ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyOut( dollyScale ) {

		if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["w" /* PerspectiveCamera */] ) {

			scale *= dollyScale;

		} else if ( scope.object instanceof __WEBPACK_IMPORTED_MODULE_0_three__["v" /* OrthographicCamera */] ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		//console.log( 'handleMouseDownPan' );

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set( event.clientX, event.clientY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyIn( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyOut( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( event ) {

		// console.log( 'handleMouseUp' );

	}

	function handleMouseWheel( event ) {

		// console.log( 'handleMouseWheel' );

		if ( event.deltaY < 0 ) {

			dollyOut( getZoomScale() );

		} else if ( event.deltaY > 0 ) {

			dollyIn( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		//console.log( 'handleKeyDown' );

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				scope.update();
				break;

		}

	}

	function handleTouchStartRotate( event ) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchStartDolly( event ) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyStart.set( 0, distance );

	}

	function handleTouchStartPan( event ) {

		//console.log( 'handleTouchStartPan' );

		panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchMoveRotate( event ) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleTouchMoveDolly( event ) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyEnd.set( 0, distance );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyOut( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyIn( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleTouchMovePan( event ) {

		//console.log( 'handleTouchMovePan' );

		panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleTouchEnd( event ) {

		//console.log( 'handleTouchEnd' );

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( event.button ) {

			case scope.mouseButtons.ORBIT:

				if ( scope.enableRotate === false ) return;

				handleMouseDownRotate( event );

				state = STATE.ROTATE;

				break;

			case scope.mouseButtons.ZOOM:

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

				break;

			case scope.mouseButtons.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseDownPan( event );

				state = STATE.PAN;

				break;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( state ) {

			case STATE.ROTATE:

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

				break;

			case STATE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

				break;

			case STATE.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

				break;

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

		event.preventDefault();
		event.stopPropagation();

		handleMouseWheel( event );

		scope.dispatchEvent( startEvent ); // not sure why these are here...
		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;

				handleTouchStartRotate( event );

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:	// two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;

				handleTouchStartDolly( event );

				state = STATE.TOUCH_DOLLY;

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;

				handleTouchStartPan( event );

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;
				if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

				handleTouchMoveRotate( event );

				break;

			case 2: // two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;
				if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

				handleTouchMoveDolly( event );

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;
				if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

				handleTouchMovePan( event );

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	window.addEventListener( 'keydown', onKeyDown, false );

	// force an update at start

	this.update();

};

__WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["i" /* EventDispatcher */].prototype );
__WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"];

Object.defineProperties( __WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"].prototype, {

	center: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
			return this.target;

		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			return ! this.enableZoom;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			this.enableZoom = ! value;

		}

	},

	noRotate: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			return ! this.enableRotate;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			this.enableRotate = ! value;

		}

	},

	noPan: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			return ! this.enablePan;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			this.enablePan = ! value;

		}

	},

	noKeys: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			return ! this.enableKeys;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			this.enableKeys = ! value;

		}

	},

	staticMoving: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			return ! this.enableDamping;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			this.enableDamping = ! value;

		}

	},

	dynamicDampingFactor: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			return this.dampingFactor;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			this.dampingFactor = value;

		}

	}

} );


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(106);
/**
 * @author arodic / https://github.com/arodic
 */


( function () {

	'use strict';
	var GizmoMaterial = function ( parameters ) {

		__WEBPACK_IMPORTED_MODULE_0_three__["r" /* MeshBasicMaterial */].call( this );

		this.depthTest = false;
		this.depthWrite = false;
		this.side = __WEBPACK_IMPORTED_MODULE_0_three__["k" /* FrontSide */];
		this.transparent = true;

		this.setValues( parameters );

		this.oldColor = this.color.clone();
		this.oldOpacity = this.opacity;

		this.highlight = function( highlighted ) {

			if ( highlighted ) {

				this.color.setRGB( 1, 1, 0 );
				this.opacity = 1;

			} else {

				this.color.copy( this.oldColor );
				this.opacity = this.oldOpacity;

			}

		};

	};

	GizmoMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["r" /* MeshBasicMaterial */].prototype );
	GizmoMaterial.prototype.constructor = GizmoMaterial;


	var GizmoLineMaterial = function ( parameters ) {

		__WEBPACK_IMPORTED_MODULE_0_three__["n" /* LineBasicMaterial */].call( this );

		this.depthTest = false;
		this.depthWrite = false;
		this.transparent = true;
		this.linewidth = 1;

		this.setValues( parameters );

		this.oldColor = this.color.clone();
		this.oldOpacity = this.opacity;

		this.highlight = function( highlighted ) {

			if ( highlighted ) {

				this.color.setRGB( 1, 1, 0 );
				this.opacity = 1;

			} else {

				this.color.copy( this.oldColor );
				this.opacity = this.oldOpacity;

			}

		};

	};

	GizmoLineMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["n" /* LineBasicMaterial */].prototype );
	GizmoLineMaterial.prototype.constructor = GizmoLineMaterial;


	var pickerMaterial = new GizmoMaterial( { visible: false, transparent: false } );


	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"] = function () {

		this.init = function () {

			__WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */].call( this );

			this.handles = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */]();
			this.pickers = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */]();
			this.planes = new __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */]();

			this.add( this.handles );
			this.add( this.pickers );
			this.add( this.planes );

			//// PLANES

			var planeGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 50, 50, 2, 2 );
			var planeMaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["r" /* MeshBasicMaterial */]( { visible: false, side: __WEBPACK_IMPORTED_MODULE_0_three__["g" /* DoubleSide */] } );

			var planes = {
				"XY":   new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( planeGeometry, planeMaterial ),
				"YZ":   new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( planeGeometry, planeMaterial ),
				"XZ":   new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( planeGeometry, planeMaterial ),
				"XYZE": new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( planeGeometry, planeMaterial )
			};

			this.activePlane = planes[ "XYZE" ];

			planes[ "YZ" ].rotation.set( 0, Math.PI / 2, 0 );
			planes[ "XZ" ].rotation.set( - Math.PI / 2, 0, 0 );

			for ( var i in planes ) {

				planes[ i ].name = i;
				this.planes.add( planes[ i ] );
				this.planes[ i ] = planes[ i ];

			}

			//// HANDLES AND PICKERS

			var setupGizmos = function( gizmoMap, parent ) {

				for ( var name in gizmoMap ) {

					for ( i = gizmoMap[ name ].length; i --; ) {

						var object = gizmoMap[ name ][ i ][ 0 ];
						var position = gizmoMap[ name ][ i ][ 1 ];
						var rotation = gizmoMap[ name ][ i ][ 2 ];

						object.name = name;

						if ( position ) object.position.set( position[ 0 ], position[ 1 ], position[ 2 ] );
						if ( rotation ) object.rotation.set( rotation[ 0 ], rotation[ 1 ], rotation[ 2 ] );

						parent.add( object );

					}

				}

			};

			setupGizmos( this.handleGizmos, this.handles );
			setupGizmos( this.pickerGizmos, this.pickers );

			// reset Transformations

			this.traverse( function ( child ) {

				if ( child instanceof __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */] ) {

					child.updateMatrix();

					var tempGeometry = child.geometry.clone();
					tempGeometry.applyMatrix( child.matrix );
					child.geometry = tempGeometry;

					child.position.set( 0, 0, 0 );
					child.rotation.set( 0, 0, 0 );
					child.scale.set( 1, 1, 1 );

				}

			} );

		};

		this.highlight = function ( axis ) {

			this.traverse( function( child ) {

				if ( child.material && child.material.highlight ) {

					if ( child.name === axis ) {

						child.material.highlight( true );

					} else {

						child.material.highlight( false );

					}

				}

			} );

		};

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */].prototype );
	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"];

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype.update = function ( rotation, eye ) {

		var vec1 = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 0, 0 );
		var vec2 = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 1, 0 );
		var lookAtMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();

		this.traverse( function( child ) {

			if ( child.name.search( "E" ) !== - 1 ) {

				child.quaternion.setFromRotationMatrix( lookAtMatrix.lookAt( eye, vec1, vec2 ) );

			} else if ( child.name.search( "X" ) !== - 1 || child.name.search( "Y" ) !== - 1 || child.name.search( "Z" ) !== - 1 ) {

				child.quaternion.setFromEuler( rotation );

			}

		} );

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoTranslate"] = function () {

		__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].call( this );

		var arrowGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]();
		var mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* CylinderGeometry */]( 0, 0.05, 0.2, 12, 1, false ) );
		mesh.position.y = 0.5;
		mesh.updateMatrix();

		arrowGeometry.merge( mesh.geometry, mesh.matrix );

		var lineXGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineXGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  1, 0, 0 ], 3 ) );

		var lineYGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineYGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  0, 1, 0 ], 3 ) );

		var lineZGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineZGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  0, 0, 1 ], 3 ) );

		this.handleGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0xff0000 } ) ), [ 0.5, 0, 0 ], [ 0, 0, - Math.PI / 2 ] ],
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineXGeometry, new GizmoLineMaterial( { color: 0xff0000 } ) ) ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0x00ff00 } ) ), [ 0, 0.5, 0 ] ],
				[	new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineYGeometry, new GizmoLineMaterial( { color: 0x00ff00 } ) ) ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0x0000ff } ) ), [ 0, 0, 0.5 ], [ Math.PI / 2, 0, 0 ] ],
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineZGeometry, new GizmoLineMaterial( { color: 0x0000ff } ) ) ]
			],

			XYZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* OctahedronGeometry */]( 0.1, 0 ), new GizmoMaterial( { color: 0xffffff, opacity: 0.25 } ) ), [ 0, 0, 0 ], [ 0, 0, 0 ] ]
			],

			XY: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.29, 0.29 ), new GizmoMaterial( { color: 0xffff00, opacity: 0.25 } ) ), [ 0.15, 0.15, 0 ] ]
			],

			YZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.29, 0.29 ), new GizmoMaterial( { color: 0x00ffff, opacity: 0.25 } ) ), [ 0, 0.15, 0.15 ], [ 0, Math.PI / 2, 0 ] ]
			],

			XZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.29, 0.29 ), new GizmoMaterial( { color: 0xff00ff, opacity: 0.25 } ) ), [ 0.15, 0, 0.15 ], [ - Math.PI / 2, 0, 0 ] ]
			]

		};

		this.pickerGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0.6, 0, 0 ], [ 0, 0, - Math.PI / 2 ] ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0, 0.6, 0 ] ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0, 0, 0.6 ], [ Math.PI / 2, 0, 0 ] ]
			],

			XYZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["t" /* OctahedronGeometry */]( 0.2, 0 ), pickerMaterial ) ]
			],

			XY: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.4, 0.4 ), pickerMaterial ), [ 0.2, 0.2, 0 ] ]
			],

			YZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.4, 0.4 ), pickerMaterial ), [ 0, 0.2, 0.2 ], [ 0, Math.PI / 2, 0 ] ]
			],

			XZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["x" /* PlaneBufferGeometry */]( 0.4, 0.4 ), pickerMaterial ), [ 0.2, 0, 0.2 ], [ - Math.PI / 2, 0, 0 ] ]
			]

		};

		this.setActivePlane = function ( axis, eye ) {

			var tempMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
			eye.applyMatrix4( tempMatrix.getInverse( tempMatrix.extractRotation( this.planes[ "XY" ].matrixWorld ) ) );

			if ( axis === "X" ) {

				this.activePlane = this.planes[ "XY" ];

				if ( Math.abs( eye.y ) > Math.abs( eye.z ) ) this.activePlane = this.planes[ "XZ" ];

			}

			if ( axis === "Y" ) {

				this.activePlane = this.planes[ "XY" ];

				if ( Math.abs( eye.x ) > Math.abs( eye.z ) ) this.activePlane = this.planes[ "YZ" ];

			}

			if ( axis === "Z" ) {

				this.activePlane = this.planes[ "XZ" ];

				if ( Math.abs( eye.x ) > Math.abs( eye.y ) ) this.activePlane = this.planes[ "YZ" ];

			}

			if ( axis === "XYZ" ) this.activePlane = this.planes[ "XYZE" ];

			if ( axis === "XY" ) this.activePlane = this.planes[ "XY" ];

			if ( axis === "YZ" ) this.activePlane = this.planes[ "YZ" ];

			if ( axis === "XZ" ) this.activePlane = this.planes[ "XZ" ];

		};

		this.init();

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoTranslate"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype );
	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoTranslate"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoTranslate"];

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoRotate"] = function () {

		__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].call( this );

		var CircleGeometry = function ( radius, facing, arc ) {

			var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
			var vertices = [];
			arc = arc ? arc : 1;

			for ( var i = 0; i <= 64 * arc; ++ i ) {

				if ( facing === 'x' ) vertices.push( 0, Math.cos( i / 32 * Math.PI ) * radius, Math.sin( i / 32 * Math.PI ) * radius );
				if ( facing === 'y' ) vertices.push( Math.cos( i / 32 * Math.PI ) * radius, 0, Math.sin( i / 32 * Math.PI ) * radius );
				if ( facing === 'z' ) vertices.push( Math.sin( i / 32 * Math.PI ) * radius, Math.cos( i / 32 * Math.PI ) * radius, 0 );

			}

			geometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( vertices, 3 ) );
			return geometry;

		};

		this.handleGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( new CircleGeometry( 1, 'x', 0.5 ), new GizmoLineMaterial( { color: 0xff0000 } ) ) ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( new CircleGeometry( 1, 'y', 0.5 ), new GizmoLineMaterial( { color: 0x00ff00 } ) ) ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( new CircleGeometry( 1, 'z', 0.5 ), new GizmoLineMaterial( { color: 0x0000ff } ) ) ]
			],

			E: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( new CircleGeometry( 1.25, 'z', 1 ), new GizmoLineMaterial( { color: 0xcccc00 } ) ) ]
			],

			XYZE: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( new CircleGeometry( 1, 'z', 1 ), new GizmoLineMaterial( { color: 0x787878 } ) ) ]
			]

		};

		this.pickerGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* TorusBufferGeometry */]( 1, 0.12, 4, 12, Math.PI ), pickerMaterial ), [ 0, 0, 0 ], [ 0, - Math.PI / 2, - Math.PI / 2 ] ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* TorusBufferGeometry */]( 1, 0.12, 4, 12, Math.PI ), pickerMaterial ), [ 0, 0, 0 ], [ Math.PI / 2, 0, 0 ] ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* TorusBufferGeometry */]( 1, 0.12, 4, 12, Math.PI ), pickerMaterial ), [ 0, 0, 0 ], [ 0, 0, - Math.PI / 2 ] ]
			],

			E: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["C" /* TorusBufferGeometry */]( 1.25, 0.12, 2, 24 ), pickerMaterial ) ]
			],

			XYZE: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]() ]// TODO
			]

		};

		this.setActivePlane = function ( axis ) {

			if ( axis === "E" ) this.activePlane = this.planes[ "XYZE" ];

			if ( axis === "X" ) this.activePlane = this.planes[ "YZ" ];

			if ( axis === "Y" ) this.activePlane = this.planes[ "XZ" ];

			if ( axis === "Z" ) this.activePlane = this.planes[ "XY" ];

		};

		this.update = function ( rotation, eye2 ) {

			__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype.update.apply( this, arguments );

			var tempMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
			var worldRotation = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Euler */]( 0, 0, 1 );
			var tempQuaternion = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
			var unitX = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 1, 0, 0 );
			var unitY = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 1, 0 );
			var unitZ = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 0, 1 );
			var quaternionX = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
			var quaternionY = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
			var quaternionZ = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
			var eye = eye2.clone();

			worldRotation.copy( this.planes[ "XY" ].rotation );
			tempQuaternion.setFromEuler( worldRotation );

			tempMatrix.makeRotationFromQuaternion( tempQuaternion ).getInverse( tempMatrix );
			eye.applyMatrix4( tempMatrix );

			this.traverse( function( child ) {

				tempQuaternion.setFromEuler( worldRotation );

				if ( child.name === "X" ) {

					quaternionX.setFromAxisAngle( unitX, Math.atan2( - eye.y, eye.z ) );
					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
					child.quaternion.copy( tempQuaternion );

				}

				if ( child.name === "Y" ) {

					quaternionY.setFromAxisAngle( unitY, Math.atan2( eye.x, eye.z ) );
					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
					child.quaternion.copy( tempQuaternion );

				}

				if ( child.name === "Z" ) {

					quaternionZ.setFromAxisAngle( unitZ, Math.atan2( eye.y, eye.x ) );
					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );
					child.quaternion.copy( tempQuaternion );

				}

			} );

		};

		this.init();

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoRotate"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype );
	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoRotate"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoRotate"];

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoScale"] = function () {

		__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].call( this );

		var arrowGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Geometry */]();
		var mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* BoxGeometry */]( 0.125, 0.125, 0.125 ) );
		mesh.position.y = 0.5;
		mesh.updateMatrix();

		arrowGeometry.merge( mesh.geometry, mesh.matrix );

		var lineXGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineXGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  1, 0, 0 ], 3 ) );

		var lineYGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineYGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  0, 1, 0 ], 3 ) );

		var lineZGeometry = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* BufferGeometry */]();
		lineZGeometry.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Float32BufferAttribute */]( [ 0, 0, 0,  0, 0, 1 ], 3 ) );

		this.handleGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0xff0000 } ) ), [ 0.5, 0, 0 ], [ 0, 0, - Math.PI / 2 ] ],
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineXGeometry, new GizmoLineMaterial( { color: 0xff0000 } ) ) ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0x00ff00 } ) ), [ 0, 0.5, 0 ] ],
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineYGeometry, new GizmoLineMaterial( { color: 0x00ff00 } ) ) ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( arrowGeometry, new GizmoMaterial( { color: 0x0000ff } ) ), [ 0, 0, 0.5 ], [ Math.PI / 2, 0, 0 ] ],
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Line */]( lineZGeometry, new GizmoLineMaterial( { color: 0x0000ff } ) ) ]
			],

			XYZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* BoxBufferGeometry */]( 0.125, 0.125, 0.125 ), new GizmoMaterial( { color: 0xffffff, opacity: 0.25 } ) ) ]
			]

		};

		this.pickerGizmos = {

			X: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0.6, 0, 0 ], [ 0, 0, - Math.PI / 2 ] ]
			],

			Y: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0, 0.6, 0 ] ]
			],

			Z: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* CylinderBufferGeometry */]( 0.2, 0, 1, 4, 1, false ), pickerMaterial ), [ 0, 0, 0.6 ], [ Math.PI / 2, 0, 0 ] ]
			],

			XYZ: [
				[ new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Mesh */]( new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* BoxBufferGeometry */]( 0.4, 0.4, 0.4 ), pickerMaterial ) ]
			]

		};

		this.setActivePlane = function ( axis, eye ) {

			var tempMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
			eye.applyMatrix4( tempMatrix.getInverse( tempMatrix.extractRotation( this.planes[ "XY" ].matrixWorld ) ) );

			if ( axis === "X" ) {

				this.activePlane = this.planes[ "XY" ];
				if ( Math.abs( eye.y ) > Math.abs( eye.z ) ) this.activePlane = this.planes[ "XZ" ];

			}

			if ( axis === "Y" ) {

				this.activePlane = this.planes[ "XY" ];
				if ( Math.abs( eye.x ) > Math.abs( eye.z ) ) this.activePlane = this.planes[ "YZ" ];

			}

			if ( axis === "Z" ) {

				this.activePlane = this.planes[ "XZ" ];
				if ( Math.abs( eye.x ) > Math.abs( eye.y ) ) this.activePlane = this.planes[ "YZ" ];

			}

			if ( axis === "XYZ" ) this.activePlane = this.planes[ "XYZE" ];

		};

		this.init();

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoScale"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmo"].prototype );
	__WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoScale"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoScale"];

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformControls"] = function ( camera, domElement ) {

		// TODO: Make non-uniform scale and rotate play nice in hierarchies
		// TODO: ADD RXYZ contol

		__WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */].call( this );

		domElement = ( domElement !== undefined ) ? domElement : document;

		this.object = undefined;
		this.visible = false;
		this.translationSnap = null;
		this.rotationSnap = null;
		this.space = "world";
		this.size = 1;
		this.axis = null;

		var scope = this;

		var _mode = "translate";
		var _dragging = false;
		var _gizmo = {

			"translate": new __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoTranslate"](),
			"rotate": new __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoRotate"](),
			"scale": new __WEBPACK_IMPORTED_MODULE_0_three__["TransformGizmoScale"]()
		};

		for ( var type in _gizmo ) {

			var gizmoObj = _gizmo[ type ];

			gizmoObj.visible = ( type === _mode );
			this.add( gizmoObj );

		}

		var changeEvent = { type: "change" };
		var mouseDownEvent = { type: "mouseDown" };
		var mouseUpEvent = { type: "mouseUp", mode: _mode };
		var objectChangeEvent = { type: "objectChange" };

		var ray = new __WEBPACK_IMPORTED_MODULE_0_three__["z" /* Raycaster */]();
		var pointerVector = new __WEBPACK_IMPORTED_MODULE_0_three__["I" /* Vector2 */]();

		var point = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var offset = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		var rotation = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var offsetRotation = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var scale = 1;

		var lookAtMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
		var eye = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		var tempMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
		var tempVector = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var tempQuaternion = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
		var unitX = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 1, 0, 0 );
		var unitY = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 1, 0 );
		var unitZ = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]( 0, 0, 1 );

		var quaternionXYZ = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
		var quaternionX = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
		var quaternionY = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
		var quaternionZ = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();
		var quaternionE = new __WEBPACK_IMPORTED_MODULE_0_three__["y" /* Quaternion */]();

		var oldPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var oldScale = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var oldRotationMatrix = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();

		var parentRotationMatrix  = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
		var parentScale = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();

		var worldPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var worldRotation = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Euler */]();
		var worldRotationMatrix  = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Matrix4 */]();
		var camPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["J" /* Vector3 */]();
		var camRotation = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Euler */]();

		domElement.addEventListener( "mousedown", onPointerDown, false );
		domElement.addEventListener( "touchstart", onPointerDown, false );

		domElement.addEventListener( "mousemove", onPointerHover, false );
		domElement.addEventListener( "touchmove", onPointerHover, false );

		domElement.addEventListener( "mousemove", onPointerMove, false );
		domElement.addEventListener( "touchmove", onPointerMove, false );

		domElement.addEventListener( "mouseup", onPointerUp, false );
		domElement.addEventListener( "mouseout", onPointerUp, false );
		domElement.addEventListener( "touchend", onPointerUp, false );
		domElement.addEventListener( "touchcancel", onPointerUp, false );
		domElement.addEventListener( "touchleave", onPointerUp, false );

		this.dispose = function () {

			domElement.removeEventListener( "mousedown", onPointerDown );
			domElement.removeEventListener( "touchstart", onPointerDown );

			domElement.removeEventListener( "mousemove", onPointerHover );
			domElement.removeEventListener( "touchmove", onPointerHover );

			domElement.removeEventListener( "mousemove", onPointerMove );
			domElement.removeEventListener( "touchmove", onPointerMove );

			domElement.removeEventListener( "mouseup", onPointerUp );
			domElement.removeEventListener( "mouseout", onPointerUp );
			domElement.removeEventListener( "touchend", onPointerUp );
			domElement.removeEventListener( "touchcancel", onPointerUp );
			domElement.removeEventListener( "touchleave", onPointerUp );

		};

		this.attach = function ( object ) {

			this.object = object;
			this.visible = true;
			this.update();

		};

		this.detach = function () {

			this.object = undefined;
			this.visible = false;
			this.axis = null;

		};

		this.getMode = function () {

			return _mode;

		};

		this.setMode = function ( mode ) {

			_mode = mode ? mode : _mode;

			if ( _mode === "scale" ) scope.space = "local";

			for ( var type in _gizmo ) _gizmo[ type ].visible = ( type === _mode );

			this.update();
			scope.dispatchEvent( changeEvent );

		};

		this.setTranslationSnap = function ( translationSnap ) {

			scope.translationSnap = translationSnap;

		};

		this.setRotationSnap = function ( rotationSnap ) {

			scope.rotationSnap = rotationSnap;

		};

		this.setSize = function ( size ) {

			scope.size = size;
			this.update();
			scope.dispatchEvent( changeEvent );

		};

		this.setSpace = function ( space ) {

			scope.space = space;
			this.update();
			scope.dispatchEvent( changeEvent );

		};

		this.update = function () {

			if ( scope.object === undefined ) return;

			scope.object.updateMatrixWorld();
			worldPosition.setFromMatrixPosition( scope.object.matrixWorld );
			worldRotation.setFromRotationMatrix( tempMatrix.extractRotation( scope.object.matrixWorld ) );

			camera.updateMatrixWorld();
			camPosition.setFromMatrixPosition( camera.matrixWorld );
			camRotation.setFromRotationMatrix( tempMatrix.extractRotation( camera.matrixWorld ) );

			scale = worldPosition.distanceTo( camPosition ) / 6 * scope.size;
			this.position.copy( worldPosition );
			this.scale.set( scale, scale, scale );

			if ( camera instanceof __WEBPACK_IMPORTED_MODULE_0_three__["w" /* PerspectiveCamera */] ) {

				eye.copy( camPosition ).sub( worldPosition ).normalize();

			} else if ( camera instanceof __WEBPACK_IMPORTED_MODULE_0_three__["v" /* OrthographicCamera */] ) {

				eye.copy( camPosition ).normalize();

			}

			if ( scope.space === "local" ) {

				_gizmo[ _mode ].update( worldRotation, eye );

			} else if ( scope.space === "world" ) {

				_gizmo[ _mode ].update( new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Euler */](), eye );

			}

			_gizmo[ _mode ].highlight( scope.axis );

		};

		function onPointerHover( event ) {

			if ( scope.object === undefined || _dragging === true || ( event.button !== undefined && event.button !== 0 ) ) return;

			var pointer = event.changedTouches ? event.changedTouches[ 0 ] : event;

			var intersect = intersectObjects( pointer, _gizmo[ _mode ].pickers.children );

			var axis = null;

			if ( intersect ) {

				axis = intersect.object.name;

				event.preventDefault();

			}

			if ( scope.axis !== axis ) {

				scope.axis = axis;
				scope.update();
				scope.dispatchEvent( changeEvent );

			}

		}

		function onPointerDown( event ) {

			if ( scope.object === undefined || _dragging === true || ( event.button !== undefined && event.button !== 0 ) ) return;

			var pointer = event.changedTouches ? event.changedTouches[ 0 ] : event;

			if ( pointer.button === 0 || pointer.button === undefined ) {

				var intersect = intersectObjects( pointer, _gizmo[ _mode ].pickers.children );

				if ( intersect ) {

					event.preventDefault();
					event.stopPropagation();

					scope.dispatchEvent( mouseDownEvent );

					scope.axis = intersect.object.name;

					scope.update();

					eye.copy( camPosition ).sub( worldPosition ).normalize();

					_gizmo[ _mode ].setActivePlane( scope.axis, eye );

					var planeIntersect = intersectObjects( pointer, [ _gizmo[ _mode ].activePlane ] );

					if ( planeIntersect ) {

						oldPosition.copy( scope.object.position );
						oldScale.copy( scope.object.scale );

						oldRotationMatrix.extractRotation( scope.object.matrix );
						worldRotationMatrix.extractRotation( scope.object.matrixWorld );

						parentRotationMatrix.extractRotation( scope.object.parent.matrixWorld );
						parentScale.setFromMatrixScale( tempMatrix.getInverse( scope.object.parent.matrixWorld ) );

						offset.copy( planeIntersect.point );

					}

				}

			}

			_dragging = true;

		}

		function onPointerMove( event ) {

			if ( scope.object === undefined || scope.axis === null || _dragging === false || ( event.button !== undefined && event.button !== 0 ) ) return;

			var pointer = event.changedTouches ? event.changedTouches[ 0 ] : event;

			var planeIntersect = intersectObjects( pointer, [ _gizmo[ _mode ].activePlane ] );

			if ( planeIntersect === false ) return;

			event.preventDefault();
			event.stopPropagation();

			point.copy( planeIntersect.point );

			if ( _mode === "translate" ) {

				point.sub( offset );
				point.multiply( parentScale );

				if ( scope.space === "local" ) {

					point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

					if ( scope.axis.search( "X" ) === - 1 ) point.x = 0;
					if ( scope.axis.search( "Y" ) === - 1 ) point.y = 0;
					if ( scope.axis.search( "Z" ) === - 1 ) point.z = 0;

					point.applyMatrix4( oldRotationMatrix );

					scope.object.position.copy( oldPosition );
					scope.object.position.add( point );

				}

				if ( scope.space === "world" || scope.axis.search( "XYZ" ) !== - 1 ) {

					if ( scope.axis.search( "X" ) === - 1 ) point.x = 0;
					if ( scope.axis.search( "Y" ) === - 1 ) point.y = 0;
					if ( scope.axis.search( "Z" ) === - 1 ) point.z = 0;

					point.applyMatrix4( tempMatrix.getInverse( parentRotationMatrix ) );

					scope.object.position.copy( oldPosition );
					scope.object.position.add( point );

				}

				if ( scope.translationSnap !== null ) {

					if ( scope.space === "local" ) {

						scope.object.position.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

					}

					if ( scope.axis.search( "X" ) !== - 1 ) scope.object.position.x = Math.round( scope.object.position.x / scope.translationSnap ) * scope.translationSnap;
					if ( scope.axis.search( "Y" ) !== - 1 ) scope.object.position.y = Math.round( scope.object.position.y / scope.translationSnap ) * scope.translationSnap;
					if ( scope.axis.search( "Z" ) !== - 1 ) scope.object.position.z = Math.round( scope.object.position.z / scope.translationSnap ) * scope.translationSnap;

					if ( scope.space === "local" ) {

						scope.object.position.applyMatrix4( worldRotationMatrix );

					}

				}

			} else if ( _mode === "scale" ) {

				point.sub( offset );
				point.multiply( parentScale );

				if ( scope.space === "local" ) {

					if ( scope.axis === "XYZ" ) {

						scale = 1 + ( ( point.y ) / Math.max( oldScale.x, oldScale.y, oldScale.z ) );

						scope.object.scale.x = oldScale.x * scale;
						scope.object.scale.y = oldScale.y * scale;
						scope.object.scale.z = oldScale.z * scale;

					} else {

						point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

						if ( scope.axis === "X" ) scope.object.scale.x = oldScale.x * ( 1 + point.x / oldScale.x );
						if ( scope.axis === "Y" ) scope.object.scale.y = oldScale.y * ( 1 + point.y / oldScale.y );
						if ( scope.axis === "Z" ) scope.object.scale.z = oldScale.z * ( 1 + point.z / oldScale.z );

					}

				}

			} else if ( _mode === "rotate" ) {

				point.sub( worldPosition );
				point.multiply( parentScale );
				tempVector.copy( offset ).sub( worldPosition );
				tempVector.multiply( parentScale );

				if ( scope.axis === "E" ) {

					point.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );
					tempVector.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );

					rotation.set( Math.atan2( point.z, point.y ), Math.atan2( point.x, point.z ), Math.atan2( point.y, point.x ) );
					offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ), Math.atan2( tempVector.x, tempVector.z ), Math.atan2( tempVector.y, tempVector.x ) );

					tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

					quaternionE.setFromAxisAngle( eye, rotation.z - offsetRotation.z );
					quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionE );
					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

					scope.object.quaternion.copy( tempQuaternion );

				} else if ( scope.axis === "XYZE" ) {

					quaternionE.setFromEuler( point.clone().cross( tempVector ).normalize() ); // rotation axis

					tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );
					quaternionX.setFromAxisAngle( quaternionE, - point.clone().angleTo( tempVector ) );
					quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

					scope.object.quaternion.copy( tempQuaternion );

				} else if ( scope.space === "local" ) {

					point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

					tempVector.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

					rotation.set( Math.atan2( point.z, point.y ), Math.atan2( point.x, point.z ), Math.atan2( point.y, point.x ) );
					offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ), Math.atan2( tempVector.x, tempVector.z ), Math.atan2( tempVector.y, tempVector.x ) );

					quaternionXYZ.setFromRotationMatrix( oldRotationMatrix );

					if ( scope.rotationSnap !== null ) {

						quaternionX.setFromAxisAngle( unitX, Math.round( ( rotation.x - offsetRotation.x ) / scope.rotationSnap ) * scope.rotationSnap );
						quaternionY.setFromAxisAngle( unitY, Math.round( ( rotation.y - offsetRotation.y ) / scope.rotationSnap ) * scope.rotationSnap );
						quaternionZ.setFromAxisAngle( unitZ, Math.round( ( rotation.z - offsetRotation.z ) / scope.rotationSnap ) * scope.rotationSnap );

					} else {

						quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
						quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
						quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );

					}

					if ( scope.axis === "X" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionX );
					if ( scope.axis === "Y" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionY );
					if ( scope.axis === "Z" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionZ );

					scope.object.quaternion.copy( quaternionXYZ );

				} else if ( scope.space === "world" ) {

					rotation.set( Math.atan2( point.z, point.y ), Math.atan2( point.x, point.z ), Math.atan2( point.y, point.x ) );
					offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ), Math.atan2( tempVector.x, tempVector.z ), Math.atan2( tempVector.y, tempVector.x ) );

					tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

					if ( scope.rotationSnap !== null ) {

						quaternionX.setFromAxisAngle( unitX, Math.round( ( rotation.x - offsetRotation.x ) / scope.rotationSnap ) * scope.rotationSnap );
						quaternionY.setFromAxisAngle( unitY, Math.round( ( rotation.y - offsetRotation.y ) / scope.rotationSnap ) * scope.rotationSnap );
						quaternionZ.setFromAxisAngle( unitZ, Math.round( ( rotation.z - offsetRotation.z ) / scope.rotationSnap ) * scope.rotationSnap );

					} else {

						quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
						quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
						quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );

					}

					quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

					if ( scope.axis === "X" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
					if ( scope.axis === "Y" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
					if ( scope.axis === "Z" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );

					tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

					scope.object.quaternion.copy( tempQuaternion );

				}

			}

			scope.update();
			scope.dispatchEvent( changeEvent );
			scope.dispatchEvent( objectChangeEvent );

		}

		function onPointerUp( event ) {

			event.preventDefault(); // Prevent MouseEvent on mobile

			if ( event.button !== undefined && event.button !== 0 ) return;

			if ( _dragging && ( scope.axis !== null ) ) {

				mouseUpEvent.mode = _mode;
				scope.dispatchEvent( mouseUpEvent );

			}

			_dragging = false;

			if ( 'TouchEvent' in window && event instanceof TouchEvent ) {

				// Force "rollover"

				scope.axis = null;
				scope.update();
				scope.dispatchEvent( changeEvent );

			} else {

				onPointerHover( event );

			}

		}

		function intersectObjects( pointer, objects ) {

			var rect = domElement.getBoundingClientRect();
			var x = ( pointer.clientX - rect.left ) / rect.width;
			var y = ( pointer.clientY - rect.top ) / rect.height;

			pointerVector.set( ( x * 2 ) - 1, - ( y * 2 ) + 1 );
			ray.setFromCamera( pointerVector, camera );

			var intersections = ray.intersectObjects( objects, true );
			return intersections[ 0 ] ? intersections[ 0 ] : false;

		}

	};

	__WEBPACK_IMPORTED_MODULE_0_three__["TransformControls"].prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0_three__["s" /* Object3D */].prototype );
	__WEBPACK_IMPORTED_MODULE_0_three__["TransformControls"].prototype.constructor = __WEBPACK_IMPORTED_MODULE_0_three__["TransformControls"];

}() );


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = (function () {
    function Language(name, value, svg) {
        this.name = name,
            this.value = value,
            this.svg = svg;
    }
    return Language;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es.js": 240,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./uk": 314,
	"./uk.js": 314,
	"./ur": 315,
	"./ur.js": 315,
	"./uz": 316,
	"./uz-latn": 317,
	"./uz-latn.js": 317,
	"./uz.js": 316,
	"./vi": 318,
	"./vi.js": 318,
	"./x-pseudo": 319,
	"./x-pseudo.js": 319,
	"./yo": 320,
	"./yo.js": 320,
	"./zh-cn": 321,
	"./zh-cn.js": 321,
	"./zh-hk": 322,
	"./zh-hk.js": 322,
	"./zh-tw": 323,
	"./zh-tw.js": 323
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 428;

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadarChartComponent = (function () {
    function RadarChartComponent() {
        //   @ViewChild('svgContainer') dataContainer: ElementRef;
        //   loadData(data) {
        //    this.dataContainer.nativeElement.innerHTML = data;
        //  }   
        this.labels = [];
        this.labelsData = [];
        this.labelsSvg = [];
        // Radar
        this.radarChartLabels = this.labels;
        this.radarChartData = [
            { data: this.labelsData }
        ];
        this.radarChartType = 'radar';
        this.options = {
            legend: { display: false },
            responsive: true,
            scale: {
                ticks: {
                    beginAtZero: true,
                    stepValue: 2,
                    max: 10,
                }
            }
        };
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,0,255,0.3)',
                borderColor: 'rgba(0,0,255,0.8)',
                pointBackgroundColor: 'rgba(0,0,255,0.4)',
                pointBorderColor: 'rgba(0,0,255,0.8)',
                pointBorderWidth: 4,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,255,1)'
            }
        ];
    }
    RadarChartComponent.prototype.ngOnInit = function () {
        for (var item = 0; item < this.data.length; item++) {
            this.labels.push(this.data[item].name);
            this.labelsData.push(this.data[item].value);
            this.labelsSvg.push(this.data[item].svg);
        }
        console.log(this.labelsSvg);
        //this.loadData(this.labelsSvg)  
    };
    // events
    RadarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    RadarChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return RadarChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RadarChartComponent.prototype, "data", void 0);
RadarChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'radar-chart',template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\components\radar-chart\radar-chart.html"*/'<!-- Generated template for the RadarChartComponent component -->\n\n<div style="display: block">\n  <canvas baseChart \n          [datasets]="radarChartData"\n          [labels]="radarChartLabels"\n          [chartType]="radarChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)"\n          [options]="options"\n          [colors]="chartColors">\n          </canvas>\n</div>\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-3 *ngFor="let item of labelsSvg">\n      <components-item-svg [itemSvg]="item"></components-item-svg>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n\n\n  \n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\components\radar-chart\radar-chart.html"*/
    }),
    __metadata("design:paramtypes", [])
], RadarChartComponent);

//# sourceMappingURL=radar-chart.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsItemSvgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsItemSvgComponent = (function () {
    function ComponentsItemSvgComponent() {
        console.log('Hello ComponentsItemSvgComponent Component');
        this.text = 'Hello World';
    }
    ComponentsItemSvgComponent.prototype.loadData = function (data) {
        this.dataContainer.nativeElement.innerHTML = data;
    };
    ComponentsItemSvgComponent.prototype.ngOnInit = function () {
        this.loadData(this.itemSvg);
    };
    return ComponentsItemSvgComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ComponentsItemSvgComponent.prototype, "itemSvg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svgContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ComponentsItemSvgComponent.prototype, "dataContainer", void 0);
ComponentsItemSvgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'components-item-svg',template:/*ion-inline-start:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\components\components-item-svg\components-item-svg.html"*/'<!-- Generated template for the ComponentsItemSvgComponent component -->\n<div #svgContainer></div>\n'/*ion-inline-end:"C:\Users\ehy rey\Desktop\SilviCorp\ionic\new-ionic3-angular4\src\components\components-item-svg\components-item-svg.html"*/
    }),
    __metadata("design:paramtypes", [])
], ComponentsItemSvgComponent);

//# sourceMappingURL=components-item-svg.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map