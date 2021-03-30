import Stuff from './Stuff.js';
import User from './User.js';

const stuff1 = new Stuff('toy', 2);
const stuff2 = new Stuff('plate', 5);
const stuff3 = new Stuff('phone', 3);
const stuff4 = new Stuff('notebook', 5);
const stuff5 = new Stuff('umbrella', 2);

const user1 = new User('Ivan', 'Petrov');

user1.createBox('box1', 7);
user1.createBox('box2', 10);
user1.createBox('box3', 8);

user1.addStuff('box1', stuff1);
user1.addStuff('box2', stuff2);
user1.addStuff('box2', stuff3);
user1.addStuff('box2', stuff4);
user1.addStuff('box3', stuff4);
user1.addStuff('box3', stuff5);

user1.deleteBox('box2');

console.log(user1.getAllStuff());
