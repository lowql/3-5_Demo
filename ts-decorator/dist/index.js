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
console.log("====================base====================");
class base_C {
    base_c_method() {
        console.log("base_c_method");
    }
}
class base_D {
    constructor(c) {
        this.c = c;
    }
    base_c_method() {
        this.c.base_c_method();
        console.log("Z");
    }
}
const d = new base_D(new base_C());
d.base_c_method();
console.log("====================class====================");
function dec_d(target) {
    console.log("Class Decorator");
}
let Class = class Class {
};
Class = __decorate([
    dec_d
], Class);
console.log("====================method====================");
function dec_d2(target, propertyKey, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class Method {
    m() {
        console.log("in the method");
    }
}
__decorate([
    dec_d2,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Method.prototype, "m", null);
