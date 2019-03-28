// Factory implementations

function userCreator(name, score) {
  // 1) make empty object with __proto__ linked to userFunctions methods
  const newUser = Object.create(userFunctions);
  // 2) constructor emulation
  newUser.name = name;
  newUser.score = score;
  // 3) return object
  return newUser;
}

const userFunctions = {
  sayName: function() {
    console.log("My name is " + this.name);
  },
  increment: function() {
    this.score += 1;
  }
}

// Sub classing

function paidUserCreator(name, score, accountBalance) {
  // 1) make instance of parent function
  const newPaidUser = userCreator(name, score);
  // 2) add PaidUser methods
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  // 3) extend constructor
  newPaidUser.accountBalance = accountBalance;
  // 4) return object
  return newPaidUser;
}

const paidUserFunctions = {
  getAccountBalance: function() {
    console.log('Account balance: ' + this.accountBalance);
  }
}

// link paidUserFunctions to userFunctions

Object.setPrototypeOf(paidUserFunctions, userFunctions);


const user1 = userCreator('George', 1);
user1.sayName();

const user2 = paidUserCreator('Bob', 2, 500);
user2.sayName();
user2.getAccountBalance();