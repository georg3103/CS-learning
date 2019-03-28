// Constructor (pseudoclassical) approach

// use constructor function
function userCreator(name, score) {
  // 1) constructor (assign parameters to function object)
  this.name = name;
  this.score = score
}

// define methods with constructor function prototype

userCreator.prototype.sayName = function() {
  console.log("My name is " + this.name);
}

userCreator.prototype.increment = function() {
  this.score += 1;
}

// Sub classing

function paidUserCreator(name, score, accountBalance) {
  // 1) use userCreator constructor and assign parameters to paidUserCreator function object
  userCreator.call(this, name, score);
  // 2) assign extra parameters to paidUserCreator function object
  this.accountBalance = accountBalance;
}

// set paidUserCreator prototype to userCreator.prototype
paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.getAccountBalance = function() {
  console.log('Account balance: ' + this.accountBalance);
}

const user1 = new userCreator('George', 1);
user1.sayName();

const user2 = new paidUserCreator('Bob', 2, 500);
user2.sayName();
user2.getAccountBalance();