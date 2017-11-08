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
var register_service_1 = require("./register.service");
var RegisterComponent = /** @class */ (function () {
    //LoginComponent Constructor, FormBuilder reference, Router reference, RegisterService reference
    function RegisterComponent(form_builder, router, service) {
        this.router = router;
        this.service = service;
        //matchingPasswords is a custom validator that verifies if the password input matches the verify password input
        this.matchingPasswords = function (passwordKey, confirmPasswordKey) {
            return function (group) {
                var password = group.controls[passwordKey];
                var confirmPassword = group.controls[confirmPasswordKey];
                //verify if passwords match
                if (password.value !== confirmPassword.value) {
                    return {
                        mismatchedPasswords: true
                    };
                }
            };
        };
        this.usernameExists = false;
        this.emailExists = false;
        this.submitRegister = false;
        this.loader = false;
        //We set the validators and initial values of the fields contained within the register_form
        this.register_form = form_builder.group({
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(100), forms_1.Validators.email])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(25), forms_1.Validators.minLength(8)])],
            'confirm_password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(25), forms_1.Validators.minLength(8)])]
        }, { validator: this.matchingPasswords('password', 'confirm_password') }); //We add our custom validator
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        /*//if register_form is valid
        if(this.register_form.valid){
            //set loader animation to true
            this.loader = true;
            //set load to send to the backend server
            var payload = {	email:this.register_form.controls['email'].value.toLowerCase(),
                            username:this.register_form.controls['email'].value.toLowerCase(),
                            password:this.register_form.controls['password'].value,
                            scope:this.register_form.controls['email'].value};
            //declare variable to store the endpoints response
            var response;
            //send load to register service function
            this.service.register(payload).subscribe(
                //store response
                data => response = data[0].xteam_register,
                err => {this.internalServerError();this.loader = false;},
                ()=> {
                    //after storing the response verify it's reply value
                    if(response == 0){//registration was successful
                        this.registerSuccess();
                    }else if(response == 1){//username already exists
                        this.usernameExists = true;
                        this.usernameAlreadyExists();
                    }else if(response == 2){//email already exists
                        this.emailExists = true;
                        this.emailAlreadyExists();
                    }else{
                        //unrecognized internal server error
                        this.internalServerError();
                    }
                    //set loader animation to false
                    this.loader = false;
                }
            );
        }else{
            //set submitRegister to true if register_form is not valid
            this.submitRegister = true;
        }*/
        this.registerSuccess();
    };
    //verifyEmailExsist(): Checks if the provided email already exists
    RegisterComponent.prototype.verifyEmailExists = function () {
        /*//set load to send to the backend server
        if(this.register_form.controls['email'].value){
            var payload = {	email:this.register_form.controls['email'].value.toLowerCase()};
            //declare variable to store the endpoints response
            var response;
            //send load to email_exists service function
            this.service.email_exists(payload).subscribe(
                //store response
                data => response = data[0].xteam_email_exists,
                err => console.log(err),
                ()=> {
                    //after storing the response verify it's reply value
                    if(response == 1){//email exists
                        this.emailExists = true;
                    }else if(response == 0){//email doesn't exist
                        this.emailExists = false;
                    }
                }
            );
        }*/
    };
    //verifyUsernameExsist(): Checks if the provided username already exists
    RegisterComponent.prototype.verifyUsernameExists = function () {
        /*//set load to send to the backend server
        if(this.register_form.controls['username'].value){
            var payload = {	username:this.register_form.controls['username'].value.toLowerCase()};
            //declare variable to store the endpoints response
            var response;
            //send load to username_exists
            this.service.username_exists(payload).subscribe(
                //store response
                data => response = data[0].xteam_username_exists,
                err => console.log(err),
                ()=> {
                    //after storing the response verify it's reply value
                    if(response == 1){//username exists
                        this.usernameExists = true;
                    }else if(response == 0){//username doesn't exist
                        this.usernameExists = false;
                    }
                }
            );
        }*/
    };
    //registerSuccess(): Alerts user if their registration was succesful, redirecting them to login route afterwards
    RegisterComponent.prototype.registerSuccess = function () {
        var _this = this;
        sweetalert2_1.default({
            title: "Usuario Creado Exitosamente",
            text: "Ya te puedes conectar al Sistema de Alerta Temprana",
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Conectarse',
            allowOutsideClick: false,
            type: "success"
        }).then(function () {
            _this.router.navigate(['/login']);
        });
    };
    //internalServerError(): Alerts the user if there is any error when trying to communicate with the backend server
    RegisterComponent.prototype.internalServerError = function () {
        sweetalert2_1.default({
            title: "Internal Server Error",
            text: "Internal Server Error. Be sure you started the backend server before running the frontend. If it still doesn't work, contact Makoto.",
            type: "warning",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    //usernameAlreadyExists(): Alerts the user if the username they provided already exists
    RegisterComponent.prototype.usernameAlreadyExists = function () {
        sweetalert2_1.default({
            title: "Username Already Exists",
            text: "The provided username is already in use, please try a different one.",
            type: "error",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    //emailAlreadyExists(): Alerts the user if the email they provided already exists
    RegisterComponent.prototype.emailAlreadyExists = function () {
        sweetalert2_1.default({
            title: "Email Already Exists",
            text: "The provided email is already in use, please try a different one.",
            type: "error",
            allowOutsideClick: false
        }).catch(sweetalert2_1.default.noop);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'register.template.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, register_service_1.RegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map