'use strict';
// To create objects in class needs to use a constructor
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers() {
    console.log('There are 50 users');
  }

  register() {
    console.log(this.username + ' is now registered');
  }
}

// let bob = new User('bob', 'bob@gmail.com', '12345');
// bob.register

// User.countUsers();

class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password); // Call functions on a parent object like in 5-7 lines
    this.package = memberPackage;
  }

  getPackage() {
    console.log(this.username + ' is subscribed to ' + this.package + ' package with ' + this.email + ' email');
  }
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Standard');

mike.getPackage();
mike.register();

// Example-2
class Human {
  constructor(height) {
    this.height = height;
    this.location = {
      x: 0,
      y: 0
    };
  }
  walk(x, y) {
    this.location.x += x;
    this.location.y += y;
  }
  static sayHello() {
    return 'Hi There';
  }
}

// const ryan = new Human(150);
// ryan.walk(14, 6);
// console.log(ryan);

class Warrior extends Human {
  constructor() {
    super(); // calls super constructor from Human class, applies all properties, alows add new props
    this.strenght = 10;
  }
}

const myWarrior = new Warrior();
console.log(myWarrior);
console.log(Human.sayHello());

