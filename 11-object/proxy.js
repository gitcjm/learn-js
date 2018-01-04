let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    },

    get: function (target, name) {
        return name in target ? target[name] : ':( 嗯,这是啥呢!';
    }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
console.log(person.ag);
//person.age = 'young'; // Throws an exception
//person.age = 300; // Throws an exception
person.name = 'cjm';
console.log(person.name);