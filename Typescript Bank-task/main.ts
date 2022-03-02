"use strict";
export {}


// const select = {
//     sel: function() {
//         let option = 'Enter 1 to create an account :Enter 2 to show your balance :Enter 3 to display account details :Enter 4 to withdraw :Enter 5 to deposit';
//         var newOption = option.split(":").join('\n');
//         console.log(newOption);
//         const ps = require("prompt-sync");
//         const prompt = ps();
//         let name1 = prompt("Enter : ");
//         let name2 = parseInt(name1);
        
//     }
//   }

//   select.sel();




class CreateAccount {
    
    Account() {
        let option = 'Enter 1 to create an Saving account :Enter 2 to create an Current account ';
        var newOption = option.split(":").join('\n');
        console.log(newOption);
        const ps = require("prompt-sync");
        const prompt = ps();
        let name1 = prompt("Enter : ");
        let name2 = parseInt(name1);
        if(name2 == 1)
        {
          this.SavingAccount();
        }else if(name2 == 2)
        {
          this.CurrentAccount();
        }
    }

    SavingAccount() {
        let location, state, country, emailId, ammountNum;
        const ps = require("prompt-sync");
        const prompt = ps();
        let customerName = prompt("Enter your name: ");
        let age = prompt("Enter your age: ");
        if(age <=68 ){
          location = prompt("Enter your place: ");
          state = prompt("Enter your state: ");
          country = prompt("Enter your country: ");
          emailId = prompt("Enter your email-id: ");
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let result =  re.test(emailId);
          if(result==false)
          {
               emailId =  prompt("please enter valid email-id: ");
          }
        }else{
            console.log("You are not eligible for account opening");
            let opt = new ShowOptions();
            opt.options();
            
        }
       
        console.log("Your account numner is: Sav11111 ");
        let accountNumber = prompt("Please enter your account number for initial deposit: ");
        if(accountNumber == "Sav11111")
        {
            let amountStr = prompt("Please enter the amount: ")
            ammountNum = parseInt(amountStr);
            if(ammountNum >= 500)
            {
                console.log("Amount deposit succesusfully");
                let fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                if(fed == "yes")
                {
                    let option = ` Name - ${customerName}: Age - ${age}: Location - ${location}: State - ${state}: country - ${country}: AccountNumber - ${accountNumber}: Balance - ${ammountNum}`;
                    var newOption = option.split(":").join('\n');
                    console.log(newOption);
                }if(fed == "no")
                {
                    let opt = new ShowOptions();
                    opt.options();
                }
            }else{
                console.log("Minimum deposit for saving account 500 ");
                if(ammountNum >= 500)
            {
                console.log("Amount deposit succesusfully");
                let fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                if(fed == "yes")
                {
                    let option = ` Name - ${customerName}: Age - ${age}: Location - ${location}: State - ${state}: country - ${country}: AccountNumber - ${accountNumber}: Balance - ${ammountNum}`;
                    var newOption = option.split(":").join('\n');
                    console.log(newOption);
                    let opt = new ShowOptions();
                    opt.options();
                }if(fed == "no")
                {
                    let opt = new ShowOptions();
                    opt.options();
                }
            }
            }         
        }
    }

    CurrentAccount(){
        let location, state, country, emailId, ammountNum;
        const ps = require("prompt-sync");
        const prompt = ps();
        let customerName = prompt("Enter your name: ");
        let age = prompt("Enter your age: ");
        if(age <=68 ){
          location = prompt("Enter your place: ");
          state = prompt("Enter your state: ");
          country = prompt("Enter your country: ");
          emailId = prompt("Enter your email-id: ");
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let result =  re.test(emailId);
          if(result==false)
          {
               emailId =  prompt("please enter valid email-id: ");
          }
        }else{
            console.log("You are not eligible for account opening");
        }
       
        console.log("Your account numner is: Sav11111 ");
        let accountNumber = prompt("Please enter your account number for initial deposit: ");
        if(accountNumber == "Sav11111")
        {
            let amountStr = prompt("Please enter the amount: ")
            ammountNum = parseInt(amountStr);
            if(ammountNum >= 1000)
            {
                console.log("Amount deposit succesusfully");
                let fed = prompt("Type yes to see your account detail or Type no to go back to main menu : ");
                if(fed == "yes")
                {
                    let option = ` Name - ${customerName}: Age - ${age}: Location - ${location}: State - ${state}: country - ${country}: AccountNumber - ${accountNumber}: Balance - ${ammountNum}`;
                    var newOption = option.split(":").join('\n');
                    console.log(newOption);
                }
            }        
        }
    }
}

interface CustomerData {
    customerName: string;
    age: number;
    location: string;
    state: string;
    country: string;
    emailId: string;
    accountNumber: string;
    balance: number;
}


 function CustomerDetail(display?: CustomerData){
    let option = `Name - ${display.customerName}: Age - ${display.age}: Location - ${display.location}: state - ${display.state}: Country - ${display.country}: EmailId - ${display.emailId}: AccountNumber - ${display.accountNumber}: Balance - ${display.balance}`;

    var newOption = option.split(":").join('\n');
    console.log(newOption);             
}

let RaghuData = {
    customerName: 'Raghu',
    age: 24,
    location: 'Banglore',
    state: 'Karnataka',
    country: 'India',
    emailId: 'raghu@gmail.com',
    accountNumber: 'Sav11111',
    balance: 1000
 }

 let RahulData = {
    customerName: 'Rahul',
    age: 24,
    location: 'Mysore',
    state: 'Karnataka',
    country: 'India',
    emailId: 'rahul@gmail.com',
    accountNumber: 'Sav22222',
    balance: 1000
 }

class Data{
    
    Raghudata(){
      let customerData = {
          customerName: 'Raghu',
          age: 24,
          location: 'Banglore',
          state: 'Karnataka',
          country: 'India',
          emailId: 'raghu@gmail.com',
          accountNumber: 'Sav11111',
          balance: 1000
       }
         CustomerDetail(customerData);
    }
    
    RahulData(){
        let customerData = {
            customerName: 'Rahul',
            age: 24,
            location: 'Mysore',
            state: 'Karnataka',
            country: 'India',
            emailId: 'rahul@gmail.com',
            accountNumber: 'Sav22222',
            balance: 1000
         }
           CustomerDetail(customerData);
    }
}


class Rec {

     choose(num: number){
        if(num == 1)
        {
            let acc = new CreateAccount();
            acc.Account();
            let opt = new ShowOptions();
                opt.options();
        }else if(num == 3){
            const ps = require("prompt-sync");
            const prompt = ps();
            let accountNumber = prompt("Enter Account Number : ");
           // let name2 = parseInt(name1);
            let data = new Data();
            if(accountNumber = "Saav11111")
            {
                data.Raghudata();
                let opt = new ShowOptions();
                opt.options();
            }else if(accountNumber = "Saav22222"){
                data.RahulData();
                let opt = new ShowOptions();
                opt.options();
            }
            
        }else if( num == 2){
            const ps = require("prompt-sync");
            const prompt = ps();
            let customerName = prompt("Enter your name to check the Balance : ");
            if(customerName == "Raghu")
            {
               // let data = new Data();
               // console.log(RaghuData.balance);
               // data.Raghudata();
               console.log(`Balance : ${RaghuData.balance}`);
                let opt = new ShowOptions();
                opt.options();
                
            }else if( customerName == "Rahul")
            {
                console.log(`Balance : ${RahulData.balance}`);
                let opt = new ShowOptions();
                opt.options();

            }
        }else if( num == 4){
            const ps = require("prompt-sync");
            const prompt = ps();
            let accountNum = prompt("Enter your account number to withdraw the money : ");
            if( accountNum == "Sav11111")
            {
                let amount = prompt("Enter the amount : ");
                 amount = parseInt(amount);
                 
                if(amount > RaghuData.balance )
                {
                    console.log("you cannot withdraw the amount due to insufficient balance");
                }else{
                    let remainingBalance = RaghuData.balance - amount ;
                    console.log("withdraw succesusfull !");
                    console.log(`Remaining Balance : ${remainingBalance}`);
                    let opt = new ShowOptions();
                    opt.options();
                }
            }else{
                console.log("your account number is not valid !");
                let opt = new ShowOptions();
                opt.options();
            }

        }else if( num == 5){
            const ps = require("prompt-sync");
            const prompt = ps();
            let accountNum = prompt("Enter your account number to Deposit the money : ");
            if( accountNum == "Sav11111")
            {
                let amount = prompt("Enter the amount : ");
                 amount = parseInt(amount);
                let balance = RaghuData.balance; 
                let totalBalance =  balance + amount;
                console.log("Deposit succesusfull !");
                console.log(`Remaining Balance : ${totalBalance}`);
                let opt = new ShowOptions();
                opt.options();
                

            }else{
                console.log("your account number is not valid !");
                let opt = new ShowOptions();
                opt.options();
            }
        }else if( num == 6){
            process.exit(0);
        }
    }

}

class Ram{

}

// let rec = new Rec();
// rec.choose(name2);

// input:number;
    // constructor(input: number){
    //     this.input = input;
    // }

    let name2;
class ShowOptions {
    options(){
     let option = 'Enter 1 to create an account :Enter 2 to show your balance :Enter 3 to display account details :Enter 4 to withdraw :Enter 5 to deposit :Enter 6 to Exit';
     var newOption = option.split(":").join('\n');
     console.log(newOption);
     const ps = require("prompt-sync");
     const prompt = ps();
     let name1 = prompt("Enter : ");
     name2 = parseInt(name1);
     let rec = new Rec();
     rec.choose(name2);
    }
    
}
let opt = new ShowOptions();
opt.options();




