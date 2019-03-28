// Class implementation

// use class syntax sugar
class UserCreator {
  // 1) constructor (assign parameters)
  constructor(name, score) {
    this.name = name;
    this.score = score
  }
  // add methods
  sayName() {
    console.log("My name is " + this.name);
  }
  increment() {
    this.score += 1;
  }
}

// Sub classing

class PaidUserCreator extends UserCreator{
  // 1) extend sets paidUserCreator prototype to userCreator.prototype
  // paidUserCreator.prototype = Object.create(userCreator.prototype);
  // 
  // 2) constructor (assign parameters)
  constructor(name, score, accountBalance) {
    // 2.1) PaidUserCreator __proto__: UserCreator (super = UserCreator)
    // "this" will be born in UserCreator constructor function
    // then it assigns to "this" of PaidUserCreator, so "this" = super(parameters)
    // "this" = Reflect.construct(UserCreator, [params], PaidUserCreator) *
    // "this" = new UserCreator(name, score) and its __proto__ reassign to PaidUserCreator.prototype**
    super(name, score);
    // 2.2) add extra parameters
    this.accountBalance = accountBalance;
  }
  // 3) extend methods
  getAccountBalance() {
    console.log('Account balance: ' + this.accountBalance);
  }
}

const user1 = new UserCreator('George', 1);
user1.sayName();

const user2 = new PaidUserCreator('Bob', 2, 500);
user2.sayName();
user2.getAccountBalance();