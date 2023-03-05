console.log("====================base====================");
class base_C {
    base_c_method() {
        console.log("base_c_method");
    }
}

class base_D {
    c: base_C;

    constructor(c: base_C) {
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

function dec_d(target: any) {
    console.log("Class Decorator");
}

@dec_d
class Class {

}

console.log("====================method====================");
function dec_d2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

class Method {
    @dec_d2
    m() {
        console.log("in the method")
    }
}

