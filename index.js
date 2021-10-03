'usestrict';
function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

let beijing = new Duck('Beijing', false);
console.log(beijing.type); // Beijing
console.log(beijing.canFly); // false

let redheaded = new Duck('Redheaded', true);
console.log(redheaded.type); // Redheaded
console.log(redheaded.canFly); // true
