const student = {};

const proxyStudent = new Proxy(student, {
  set(target, property, value) {
    if (property === "age" && typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    target[property] = value;
    return true;
  }
});

proxyStudent.age = 20;   // ✅ Works
proxyStudent.age = "hi"; // ❌ Throws error
