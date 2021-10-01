'usestrict';
// let duck = {
//     type: "redheaded",
//     canFly: true
// }

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

let duck = new Duck('Beijing', false);
alert(duck.type);
alert(duck.canFly);
