System.register(["@angular/core", "./auth.config", "angular2-jwt"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, auth_config_1, angular2_jwt_1, AuthService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_config_1_1) {
                auth_config_1 = auth_config_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }
        ],
        execute: function () {
            AuthService = class AuthService {
                constructor() {
                    this.lock = new Auth0Lock(auth_config_1.myConfig.clientID, auth_config_1.myConfig.domain, {});
                    this.lock.on("authenticated", (authResult) => {
                        console.log("Authenticated");
                        console.log(authResult);
                        localStorage.setItem('id_token', authResult.idToken);
                    });
                }
                login() {
                    // Call the show method to display the widget.
                    this.lock.show();
                }
                authenticated() {
                    // Check if there's an unexpired JWT
                    // This searches for an item in localStorage with key == 'id_token'
                    return angular2_jwt_1.tokenNotExpired();
                }
                logout() {
                    // Remove token from localStorage
                    localStorage.removeItem('id_token');
                }
            };
            AuthService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    };
});

//# sourceMappingURL=auth.service.js.map
