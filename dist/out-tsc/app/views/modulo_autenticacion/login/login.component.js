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
//Native imports
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
//Third party libraries imports
var sweetalert2_1 = require("sweetalert2");
//Providers imports
var login_service_1 = require("./login.service");
var LoginComponent = /** @class */ (function () {
    //LoginComponent Constructor, FormBuilder reference, LoginService reference, and Router reference
    function LoginComponent(form_builder, service, router) {
        this.service = service;
        this.router = router;
        //submitLogin is false when the component loads
        this.submitLogin = false;
        this.loader = false;
        //We set the validators and initial values of the fields contained within the login_form
        this.login_form = form_builder.group({
            'username_email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100)])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(25)])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //login(): Sends the information submitted into the login_form to the respective backend's endpoint using the LoginService reference.
    LoginComponent.prototype.login = function () {
        /*//Verifies if login_form is valid
        if(this.login_form.valid){
          //Activate loader spinner animation
          this.loader = true;
          //Prepare the load to send to the endpoint as an object
          var load = {
            email:this.login_form.controls['username_email'].value.toLowerCase(),
            password:this.login_form.controls['password'].value
          };
          //Declare a variable to store the endpoint's response
          var response;
          //Send load to login service function
          this.service.login(load).subscribe(
            //Store response
            data => response = data[0],
            //Alert server error if server is not responding
            err => {this.loader = false;this.internalServerError();},
            ()=> {
              //After storing the response
              if(response.user_id > -1){
                //Login User
                //For testing purposes we are storing the session on sessionStorage without a session hash
                sessionStorage.setItem("userId", response.user_id);
                sessionStorage.setItem("userName", response.user_name);
                sessionStorage.setItem("userEmail", response.user_email);
                sessionStorage.setItem("userScope", response.user_scope);
                sessionStorage.setItem("session", "true");
                //Go to App
                this.router.navigateByUrl('/dashboard/home');
              }else if(response.user_id == -1){
                //Clear Session
                sessionStorage.clear();
                sessionStorage.setItem("session", "false");
                sessionStorage.setItem("scope", "none");
                //Alert Login error
                this.loginError();
              }else{
                //Clear Session
                sessionStorage.clear();
                sessionStorage.setItem("session", "false");
                sessionStorage.setItem("scope", "none");
                //Alert Server error
                this.internalServerError();
              }
              //Disable loader spinner animation
              this.loader = false;
            }
            );
    
        }else{
          //Sets submitLogin as TRUE if login_form is not valid
          this.submitLogin = true;
        }*/
        this.router.navigateByUrl('/plataforma/estadisticas');
    };
    LoginComponent.prototype.loginPublic = function () {
        this.router.navigateByUrl('/plataforma/estadisticas');
    };
    //loginError(): Alerts the user if their password or username is incorrect
    LoginComponent.prototype.loginError = function () {
        sweetalert2_1.default({
            title: "Incorrect Username/Email or Password",
            text: "The provided combination of username/email and password does not exist, please try again.",
            type: "error",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    //internalServerError(): Alerts the user if there is any error when trying to communicate with the backend server
    LoginComponent.prototype.internalServerError = function () {
        sweetalert2_1.default({
            title: "Internal Server Error",
            text: "Internal Server Error. Be sure you started the backend server before running the frontend. If it still doesn't work, contact Makoto.",
            type: "warning",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'login.template.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map