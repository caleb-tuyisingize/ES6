const clone = (obj)=>{
     if (obj === null || typeof obj !== "object") return obj;
const cloned = {...Object.fromEntries(Object.entries(obj).map(([k, j])=> [k, clone(j)]))};
    return cloned;
 
}

const person = {
    name: "Caleb",
    age: 21,
    level: 2,
    school: {
        sname:"Collegio",
        location: "Huye",
        number: 23
    }

}
const newPerson = clone(person);
console.log(newPerson.name);

// Structure clone



// json.parse(json.stringfy)