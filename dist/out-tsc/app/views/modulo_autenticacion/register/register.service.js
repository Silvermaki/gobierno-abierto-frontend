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
Object.defineProperty(exports, "__esModule", { value: true });
//Native Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var RegisterService = /** @class */ (function () {
    //RegisterService constructor: Http reference
    function RegisterService(http) {
        this.http = http;
    }
    //Port where the backend server is  running
    //private baseUrl: string = "http://xteambackend-env.us-west-1.elasticbeanstalk.com";
    //register function calls register endpoint
    /*register(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/register",bodyString, options).map(this.extractData).catch(this.handleError);
    }
  
    //email_exists function calls email_exists endpoint
    email_exists(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/email_exists",bodyString, options).map(this.extractData).catch(this.handleError);
    }
  
    //username_exists function calls username_exists endpoint
    username_exists(payload: any):Observable<any>{
      let bodyString = JSON.stringify(payload);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+"/username_exists",bodyString, options).map(this.extractData).catch(this.handleError);
    }*/
    //Extract data as Json object
    RegisterService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    //Handle and print error
    RegisterService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map