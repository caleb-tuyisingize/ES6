const student = {};

const proxyStudent = new Proxy(student, {
    get(target, propert){
       return `the Propert you are gettint is ${propert} 
        and the Value is ${target[propert]}`;
    },
  set(target, property, value) {
    if (property === "age" && typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    target[property] = value;
    return true;
  }
});

proxyStudent.age = 20;
proxyStudent.name = "Maria";
console.log(proxyStudent.name)

// proxyStudent.age = "hi"; // ❌ Throws error
