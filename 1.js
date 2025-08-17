// //QUESTION 1
// Create a secure bank account module
// AC:
// - The bank balance should not be accesible outside
// - provide way for checking the bank balance
// - provide way for crediting amount
// - provide way for debiting amount
// Hint: use Closure + constructor function | recall counter example

function createBankAccount(initialBalance = 0) {
	let balance = initialBalance;
	return {
		getBalance: function() {
			return balance;
		},
		credit: function(amount) {
			if (amount > 0) {
				balance += amount;
				return true;
			}
			return false;
		},
		debit: function(amount) {
			if (amount > 0 && amount <= balance) {
				balance -= amount;
				return true;
			}
			return false;
		}
	};
}

const acc = createBankAccount(2000);
acc.credit(100);
// acc.debit(200);
console.log(acc.getBalance())



// //QUESTION 2
// Develop an script that provides you the latest weather at the moment in Chennai.
// AC:
// - running the app should show me the latest weather in Chennai
// - Feel free to display as good as you can in console (try out console stuff)
// - Should use callback functions for handling the async response.

// Use Free API for fetching weather details: https://open-meteo.com/en/docs

// //QUESTION 3
// Develop a scirpt that fetches and provides latest weather from your favorite 3 cities and display it in the console.
// AC:
// - Fetch current weather for 3 cities in parallel and display them together.

// HINT: Promise.all()


// //QUESTION 4
// Fetch and display your github proflie in a beautiful manner in console upon running the script.

// AC:
// - Fetch and display user github profile details using async/await.

// API Details : https://api.github.com/users/{username}


// //QUESTION 5
// Build an ID generator:
// AC:
// Each time you call next(), it should give you unique userID. 
// examples of user ID : U001, U002, etc.

// Hint: generator functions
