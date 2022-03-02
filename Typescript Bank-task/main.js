"use strict";
exports.__esModule = true;

var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
    }
    CreateAccount.prototype.Account = function () {
        var option = 'Enter 1 to create an Saving account :Enter 2 to create an Current account ';
        var newOption = option.split(":").join('\n');
        console.log(newOption);
        var ps = require("prompt-sync");
        var prompt = ps();
        var name1 = prompt("Enter : ");
        var name2 = parseInt(name1);
        if (name2 == 1) {
            this.SavingAccount();
        }
        else if (name2 == 2) {
            this.CurrentAccount();
        }
    };
    CreateAccount.prototype.SavingAccount = function () {
        var location, state, country, emailId, ammountNum;
        var ps = require("prompt-sync");
        var prompt = ps();
        var customerName = prompt("Enter your name: ");
        var age = prompt("Enter your age: ");
        if (age <= 68) {
            location = prompt("Enter your place: ");
            state = prompt("Enter your state: ");
            country = prompt("Enter your country: ");
            emailId = prompt("Enter your email-id: ");
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var result = re.test(emailId);
            if (result == false) {
                emailId = prompt("please enter valid email-id: ");
            }
        }
        else {
            console.log("You are not eligible for account opening");
            var opt_1 = new ShowOptions();
            opt_1.options();
        }
        console.log("Your account numner is: Sav11111 ");
        var accountNumber = prompt("Please enter your account number for initial deposit: ");
        if (accountNumber == "Sav11111") {
            var amountStr = prompt("Please enter the amount: ");
            ammountNum = parseInt(amountStr);
            if (ammountNum >= 500) {
                console.log("Amount deposit succesusfully");
                var fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                if (fed == "yes") {
                    var option = " Name - ".concat(customerName, ": Age - ").concat(age, ": Location - ").concat(location, ": State - ").concat(state, ": country - ").concat(country, ": AccountNumber - ").concat(accountNumber, ": Balance - ").concat(ammountNum);
                    var newOption = option.split(":").join('\n');
                    console.log(newOption);
                }
                if (fed == "no") {
                    var opt_2 = new ShowOptions();
                    opt_2.options();
                }
            }
            else {
                console.log("Minimum deposit for saving account 500 ");
                if (ammountNum >= 500) {
                    console.log("Amount deposit succesusfully");
                    var fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                    if (fed == "yes") {
                        var option = " Name - ".concat(customerName, ": Age - ").concat(age, ": Location - ").concat(location, ": State - ").concat(state, ": country - ").concat(country, ": AccountNumber - ").concat(accountNumber, ": Balance - ").concat(ammountNum);
                        var newOption = option.split(":").join('\n');
                        console.log(newOption);
                        var opt_3 = new ShowOptions();
                        opt_3.options();
                    }
                    if (fed == "no") {
                        var opt_4 = new ShowOptions();
                        opt_4.options();
                    }
                }
            }
        }
    };
    CreateAccount.prototype.CurrentAccount = function () {
        var location, state, country, emailId, ammountNum;
        var ps = require("prompt-sync");
        var prompt = ps();
        var customerName = prompt("Enter your name: ");
        var age = prompt("Enter your age: ");
        if (age <= 68) {
            location = prompt("Enter your place: ");
            state = prompt("Enter your state: ");
            country = prompt("Enter your country: ");
            emailId = prompt("Enter your email-id: ");
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var result = re.test(emailId);
            if (result == false) {
                emailId = prompt("please enter valid email-id: ");
            }
        }
        else {
            console.log("You are not eligible for account opening");
        }
        console.log("Your account numner is: Sav11111 ");
        var accountNumber = prompt("Please enter your account number for initial deposit: ");
        if (accountNumber == "Sav11111") {
            var amountStr = prompt("Please enter the amount: ");
            ammountNum = parseInt(amountStr);
            if (ammountNum >= 1000) {
                console.log("Amount deposit succesusfully");
                var fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                if (fed == "yes") {
                    var option = " Name - ".concat(customerName, ": Age - ").concat(age, ": Location - ").concat(location, ": State - ").concat(state, ": country - ").concat(country, ": AccountNumber - ").concat(accountNumber, ": Balance - ").concat(ammountNum);
                    var newOption = option.split(":").join('\n');
                    console.log(newOption);
                }
            }
        }
    };
    return CreateAccount;
}());
function CustomerDetail(display) {
    var option = "Name - ".concat(display.customerName, ": Age - ").concat(display.age, ": Location - ").concat(display.location, ": state - ").concat(display.state, ": Country - ").concat(display.country, ": EmailId - ").concat(display.emailId, ": AccountNumber - ").concat(display.accountNumber, ": Balance - ").concat(display.balance);
    var newOption = option.split(":").join('\n');
    console.log(newOption);
}
var RaghuData = {
    customerName: 'Raghu',
    age: 24,
    location: 'Banglore',
    state: 'Karnataka',
    country: 'India',
    emailId: 'raghu@gmail.com',
    accountNumber: 'Sav11111',
    balance: 1000
};
var RahulData = {
    customerName: 'Rahul',
    age: 24,
    location: 'Mysore',
    state: 'Karnataka',
    country: 'India',
    emailId: 'rahul@gmail.com',
    accountNumber: 'Sav22222',
    balance: 1000
};
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.Raghudata = function () {
        var customerData = {
            customerName: 'Raghu',
            age: 24,
            location: 'Banglore',
            state: 'Karnataka',
            country: 'India',
            emailId: 'raghu@gmail.com',
            accountNumber: 'Sav11111',
            balance: 1000
        };
        CustomerDetail(customerData);
    };
    Data.prototype.RahulData = function () {
        var customerData = {
            customerName: 'Rahul',
            age: 24,
            location: 'Mysore',
            state: 'Karnataka',
            country: 'India',
            emailId: 'rahul@gmail.com',
            accountNumber: 'Sav22222',
            balance: 1000
        };
        CustomerDetail(customerData);
    };
    return Data;
}());
var Rec = /** @class */ (function () {
    function Rec() {
    }
    Rec.prototype.choose = function (num) {
        if (num == 1) {
            var acc = new CreateAccount();
            acc.Account();
            var opt_5 = new ShowOptions();
            opt_5.options();
        }
        else if (num == 3) {
            var ps = require("prompt-sync");
            var prompt_1 = ps();
            var accountNumber = prompt_1("Enter Account Number : ");
            // let name2 = parseInt(name1);
            var data = new Data();
            if (accountNumber = "Saav11111") {
                data.Raghudata();
                var opt_6 = new ShowOptions();
                opt_6.options();
            }
            else if (accountNumber = "Saav22222") {
                data.RahulData();
                var opt_7 = new ShowOptions();
                opt_7.options();
            }
        }
        else if (num == 2) {
            var ps = require("prompt-sync");
            var prompt_2 = ps();
            var customerName = prompt_2("Enter your name to check the Balance : ");
            if (customerName == "Raghu") {
                // let data = new Data();
                // console.log(RaghuData.balance);
                // data.Raghudata();
                console.log("Balance : ".concat(RaghuData.balance));
                var opt_8 = new ShowOptions();
                opt_8.options();
            }
            else if (customerName == "Rahul") {
                console.log("Balance : ".concat(RahulData.balance));
                var opt_9 = new ShowOptions();
                opt_9.options();
            }
        }
        else if (num == 4) {
            var ps = require("prompt-sync");
            var prompt_3 = ps();
            var accountNum = prompt_3("Enter your account number to withdraw the money : ");
            if (accountNum == "Sav11111") {
                var amount = prompt_3("Enter the amount : ");
                amount = parseInt(amount);
                if (amount > RaghuData.balance) {
                    console.log("you cannot withdraw the amount due to insufficient balance");
                }
                else {
                    var remainingBalance = RaghuData.balance - amount;
                    console.log("withdraw succesusfull !");
                    console.log("Remaining Balance : ".concat(remainingBalance));
                    var opt_10 = new ShowOptions();
                    opt_10.options();
                }
            }
            else {
                console.log("your account number is not valid !");
                var opt_11 = new ShowOptions();
                opt_11.options();
            }
        }
        else if (num == 5) {
            var ps = require("prompt-sync");
            var prompt_4 = ps();
            var accountNum = prompt_4("Enter your account number to Deposit the money : ");
            if (accountNum == "Sav11111") {
                var amount = prompt_4("Enter the amount : ");
                amount = parseInt(amount);
                var balance = RaghuData.balance;
                var totalBalance = balance + amount;
                console.log("Deposit succesusfull !");
                console.log("Remaining Balance : ".concat(totalBalance));
                var opt_12 = new ShowOptions();
                opt_12.options();
            }
            else {
                console.log("your account number is not valid !");
                var opt_13 = new ShowOptions();
                opt_13.options();
            }
        }
        else if (num == 6) {
            process.exit(0);
        }
    };
    return Rec;
}());
var Ram = /** @class */ (function () {
    function Ram() {
    }
    return Ram;
}());

var name2;
var ShowOptions = /** @class */ (function () {
    function ShowOptions() {
    }
    ShowOptions.prototype.options = function () {
        var option = 'Enter 1 to create an account :Enter 2 to show your balance :Enter 3 to display account details :Enter 4 to withdraw :Enter 5 to deposit :Enter 6 to Exit';
        var newOption = option.split(":").join('\n');
        console.log(newOption);
        var ps = require("prompt-sync");
        var prompt = ps();
        var name1 = prompt("Enter : ");
        name2 = parseInt(name1);
        var rec = new Rec();
        rec.choose(name2);
    };
    return ShowOptions;
}());
var opt = new ShowOptions();
opt.options();
