/*
'''
❓ PROMPT
You are asked to write a program that simulates an ATM machine. 
The program should allow users to perform the following operations:

1. Check balance: Display the current balance of the user's account.
2. Deposit: Add money to the user's account.
3. Withdraw: Remove money from the user's account, if sufficient funds are available.

The program should have the following features:
- The program should be able to handle multiple user accounts.
- The program should store account balances persistently (i.e., in memory).
- The program should allow the user to specify the amount of money to deposit or withdraw.
- The program should validate user input and handle errors gracefully (e.g., invalid input, insufficient funds).
- The program should return appropriate messages to the user after each operation.

ATM Class Definition

- create_account(initial_balance) -> int: Creates a new account with an optional initial balance and returns the account ID.
- get_balance(account_id) -> float: Returns the balance of the account with the specified ID, or None if the account is not found.
- deposit(account_id, amount) -> str: Deposits the specified amount of money into the account with the specified ID and returns a string message describing the deposit. If the deposit is successful, the message should be in the following format: "Deposit successful: Your new balance is $<balance>.". If the deposit fails due to an error, the message should be in the following format:
"Deposit failed: Account not found."
- withdraw(account_id, amount) -> str: Withdraws the specified amount of money from the account with the specified ID and returns a string message describing the withdrawal. If the withdrawal is successful, the message should be in the following format: "Withdrawal successful: Your new balance is $<balance>.". If the withdrawal fails due to an error, the message should be in one of the following formats:
"Withdrawal failed: Account not found."
"Withdrawal failed: Insufficient funds."

Example(s)
atm = ATM()

# Create some accounts
account1 = atm.create_account()
account2 = atm.create_account(100.0)
account3 = atm.create_account(50.0)

# Deposit and withdraw money
print(atm.deposit(account1, 50.0))  # should print "Deposit successful: Your new balance is $50.00."
print(atm.withdraw(account1, 20.0))  # should print "Withdrawal successful: Your new balance is $30.00."
print(atm.withdraw(account1, 40.0))  # should print "Withdrawal failed: Insufficient funds."
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
class ATM:
    def __init__(self):
        self.accounts = {}

    def create_account(self, initial_balance=0.0) -> int:
        pass

    def get_balance(self, account_id: int) -> Optional[float]:
        pass

    def deposit(self, account_id: int, amount: float) -> str:
        pass

    def withdraw(self, account_id: int, amount: float) -> str:
        pass

 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// or create account details List?
class Account {
    constructor (val, next  = null) {
        this.val = val
        this.next = next
    }
}

const accounts = new Account({
    accountID: 1,
    balance: 400.00
}, new Account({
    accountID: 2,
    balance: 20.00
}))

class ATM {
    constructor(initialBalance, accountID, amount, accounts) {
        initialBalance = this.initialBalance
        amount = this.amount
        accountID = this.accountID
        accounts = this.accounts
    }

    createAccount (initialBalance) {
        // first check if any accounts exist in storage
        let accID;

        if(accounts) {
            this.accounts = accounts
            let curr = this.accounts;
            let latestAccountId = 1;
            
            // find what the last account in the map is by iterating through the list
            while(curr) {
                if(curr.val.accountID > latestAccountId) {
                    // adds one to the latest so it can be used as the new unique id
                    latestAccountId = curr.val.accountID+1
                }

                if (!curr.next) {
                    // when the end is reached create the new account with the new ID and add it to the list
                    const newAccount = new Account({ accountID: latestAccountId, balance: initialBalance })
                    curr.next = newAccount
                    accID = latestAccountId
                    break;
                }                
                curr = curr.next
            }

        } else { // when there are no accounts create a new one
            this.accounts = new Account({ accountID: 0, balance: initialBalance })
            accID = 0
        }

        
        // check the list again to make sure the account exists after creation
        let curr = this.accounts
        while(curr) {
            if(curr.val.accountID === accID) {
                return console.log(`Account successfully created. Your balance is $${curr.val.balance}`)
            }
            curr = curr.next
        }

        return console.log("There was an error createing your account, please try again");
        
    }

    getBalance(accID) {
        let curr = this.accounts
        while(curr) {
            if(curr.val.accountID === accID) {
                return console.log(`Your balance is $${curr.val.balance}`)
            }
            curr = curr.next
        }

        return console.log('Account not found, please try again');
    }

    deposit(accID, amount) {
        if(!amount) return console.log('Please Specify an amount to deposit');
        let curr = this.accounts
        while(curr) {
            if(curr.val.accountID === accID) {
                curr.val.balance += amount
                return console.log(`Your new balance is $${curr.val.balance}`)
            }
            curr = curr.next
        }

        return console.log('Unable to find account to deposit funds, please try again');
    }
    
    withdraw(accID, amount) {
        if(!amount) return console.log('Please Specify an amount to withdraw');
        
        let curr = this.accounts
        while(curr) {
            if(curr.val.accountID === accID) {
                let tmp = curr.val.balance - amount
                if (tmp >= 0) {
                    curr.val.balance = tmp
                    return console.log(`Successfully withdrew ${amount}. \nYour new balance is $${curr.val.balance}`)
                } else {
                    return console.log('Insufficient funds Please try again')
                }
            }
            curr = curr.next
        }

        return console.log('Unable to find account');
    }
}

const atm = new ATM()

atm.createAccount(500)
atm.getBalance(1)
atm.getBalance(2)
atm.getBalance(5)

atm.deposit(1, 37)
atm.deposit(5, 99)

atm.withdraw(1, 17)
atm.withdraw(1, 5000)
atm.withdraw(7, 5000)

atm.getBalance(1)

atm.deposit(1, 45463.12)
atm.getBalance(1)