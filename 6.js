function get_balance(){
    let balance = 0 ;
    function check_balance(){
        return balance ; 
    } 
    function deposit(amount){
        balance +=amount 

    }
    function credit(amount){
        if(amount > 0 && amount <= balance){
            balance -= amount;
        }
    }
    return {
        check_balance,
        deposit,
        credit
    };

}
const my_account = get_balance();
my_account.deposit(5000);
console.log(my_account.check_balance()); 
my_account.credit(2000);
console.log(my_account.check_balance()); 