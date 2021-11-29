
var enter1 = document.getElementById('btnEnter1');
var backspace1 = document.getElementById('btnDelete1');

var enter2 = document.getElementById('btnEnter2');
var backspace2 = document.getElementById('btnDelete2');

var tbody = document.getElementById('table_body');
var accountNum = 1234567890123456;//Initialize account
var pinNum = 1234;//Initialize pin
var balance=2000;//Initialize balance


enter1.addEventListener('click',checkAccount);
enter2.addEventListener('click',checkpwd);

function send_account(data){//If press button, display it to input
  account.value = account.value + data;
}

function delete_account(){//delete input data
  account.value = account.value.substring(0, account.value.length-1);
}

function send_pwd(data){//If press button, display it to input
  password.value = password.value + data;
}
function delete_pwd(){//delete input data
  password.value = password.value.substring(0, password.value.length-1);
}

function checkAccount(){//check if correct account
  var account = document.getElementById('account').value;
  if(account!=accountNum){ //if wrong account
    alert("That account number does not exist!");//alert message.
    return false;
  }
  else{//If success
    alert("success!");//alert message.
    document.getElementById("container1").style.display="none";
    document.getElementById("container2").style.display="block";
    return true;
  }
}

var check = 5;
function checkpwd(){//Check pin Number.
  var password = document.getElementById('password').value;
  if(password != pinNum){//If wrong pin Number
    alert("Incorrect Pin. You have "+check+" attempts left.");//Notice remain chance
    check--;
    if(check == 0){//If chance gone
      alert("Login failed!");
      document.getElementById("container2").style.display="none";//back to account enter display
      returnCard();//function to initialize display to account display.
    }
  }
  else{//If correct.
    document.getElementById("container2").style.display="none";
    document.getElementById("container3").style.display="block";
    //below code is initialize account info.
    var row = tbody.insertRow( tbody.rows.length ); // 하단에 추가
    var date__ = row.insertCell(0);
    var out__ = row.insertCell(1);
    var in__ = row.insertCell(2);
    var running = row.insertCell(3);
    //1.calculate current time
    const current_time = new Date();
    // 2. caculate UTC time
    const utc = current_time.getTime() + (current_time.getTimezoneOffset() * 60 * 1000);
   // 3. UTC to KST (UTC + 9hours)
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + (KR_TIME_DIFF));

    date__.innerHTML = kr_curr;
    out__.innerHTML = "0";
    in__.innerHTML = "0";
    running.innerHTML = balance;
  }
}


var to_info = document.getElementById('info');
var to_withdraw = document.getElementById('withdraw');
var to_deposit = document.getElementById('deposit');
var to_transfer = document.getElementById('transfer');

var back = document.querySelectorAll('.backBtn');

//addEventListener for '.backBtn' which has many class.
for(var i = 0; i<back.length; i++){
  var item = back.item(i);
  item.addEventListener('click',to_mainmenu);
}

to_info.addEventListener('click',info_function);
to_withdraw.addEventListener('click',withdraw_function);
to_deposit.addEventListener('click',deposit_function);
to_transfer.addEventListener('click',transfer_function);

function to_mainmenu(){//Visualize only container 3(mainmenu).
  document.getElementById("container3").style.display="block";
  document.getElementById("info_container").style.display="none";
  document.getElementById("withdraw_container").style.display="none";
  document.getElementById("deposit_container").style.display="none";
  document.getElementById("transfer_container").style.display="none";
}



function info_function(){
  document.getElementById("container3").style.display="none";
  document.getElementById("info_container").style.display="block";
  document.getElementById("balance").innerHTML = balance;
}
////////////////////withdraw function///////////////////////////

function withdraw_function(){
  document.getElementById("container3").style.display="none";
  document.getElementById("withdraw_container").style.display="grid";
}

var withdraw = 0;
var enterForWithdraw = document.getElementById('enterForWithdraw');
var backForWithdraw = document.getElementById('backForWithdraw');

function wd_plus(data){//plus money for withdraw
  withdraw = withdraw+data;
  if(withdraw > balance){//more than balance is not allowed
    alert("$"+balance+"is the limit to withdraw from the ATM");
    withdraw = withdraw-data;
  }
  withdraw_ammount.value = withdraw;
}
function wd_minus(data){//subtrct money for withdraw
  withdraw = withdraw-data;
  if(withdraw<0){
    alert("Withdraw money cannot be negative number.");
    withdraw = withdraw+data;
  }
  withdraw_ammount.value = withdraw;
}
function wd_reset(data){//reset withdraw money
  withdraw = data;
  withdraw_ammount.value = withdraw;
}

function to_withdraw_check(){
  document.getElementById("withdraw_container").style.display="none";
  document.getElementById("withdraw_check").style.display="block";
  document.getElementById("withdraw_money").innerHTML = withdraw;
}

function to_withdraw_confirm(){
  document.getElementById("withdraw_check").style.display="none";
  document.getElementById("withdraw_confirm").style.display="block";
  balance = balance - withdraw;

  var row = tbody.insertRow( tbody.rows.length );
  var date__ = row.insertCell(0);
  var out__ = row.insertCell(1);
  var in__ = row.insertCell(2);
  var running = row.insertCell(3);

  //1.calculate current time
  const current_time = new Date();
  // 2. caculate UTC time
  const utc = current_time.getTime() + (current_time.getTimezoneOffset() * 60 * 1000);
 // 3. UTC to KST (UTC + 9hours)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + (KR_TIME_DIFF));

  date__.innerHTML = kr_curr;
  out__.innerHTML = withdraw;
  in__.innerHTML = "0";
  running.innerHTML = balance;
  withdraw_ammount.value = null;
}

function check_to_withdraw(){
  document.getElementById("withdraw_check").style.display="none";
  document.getElementById("withdraw_container").style.display="grid";
}
function withdraw_to_menu(){
  document.getElementById("container3").style.display="block";
  document.getElementById("info_container").style.display="none";
  document.getElementById("withdraw_container").style.display="none";
  document.getElementById("deposit_container").style.display="none";
  document.getElementById("transfer_container").style.display="none";
  document.getElementById("withdraw_confirm").style.display="none";
}
function confirm_to_withdraw(){
  document.getElementById("withdraw_container").style.display="grid";
  document.getElementById("withdraw_confirm").style.display="none";
}
///////////////////////////////////////////////////////////////

////////////////////////////////deposit function////////////////////

var deposit = 0;
function deposit_function(){
  document.getElementById("container3").style.display="none";
  document.getElementById("deposit_container").style.display="block";
}

function send_deposit(data){//display data to deposit input
  deposit_input.value = deposit_input.value + data;
}

function delete_deposit(){// delete data from deposit input
  deposit_input.value = deposit_input.value.substring(0, deposit_input.value.length-1);
}

function deposit_to_check(){//switch display to check display.
  document.getElementById("deposit_money").innerHTML = deposit_input.value;
  document.getElementById("deposit_container").style.display="none";
  document.getElementById("deposit_check").style.display="block";
}
function check_to_deposit(){//switch display to deposit calculatior.
  document.getElementById("deposit_container").style.display="block";
  document.getElementById("deposit_check").style.display="none";
}
function to_deposit_check2(){//switch display to check2 display.
  document.getElementById("deposit_check2").style.display="block";
  document.getElementById("deposit_check").style.display="none";

}
function to_deposit_confirm(){
  document.getElementById("deposit_check2").style.display="none";
  document.getElementById("deposit_confirm").style.display="block";

  //below code is adding history to information
  deposit = parseFloat(deposit_input.value);
  balance = balance + deposit;
  var row = tbody.insertRow( tbody.rows.length );
  var date__ = row.insertCell(0);
  var out__ = row.insertCell(1);
  var in__ = row.insertCell(2);
  var running = row.insertCell(3);
  //1.calculate current time
  const current_time = new Date();
  // 2. caculate UTC time
  const utc = current_time.getTime() + (current_time.getTimezoneOffset() * 60 * 1000);
 // 3. UTC to KST (UTC + 9hours)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + (KR_TIME_DIFF));

  date__.innerHTML = kr_curr;
  out__.innerHTML = "0";
  in__.innerHTML = deposit;
  running.innerHTML = balance;
  deposit_input.value = null;

}

function confirm_to_deposit(){
  document.getElementById("deposit_confirm").style.display="none";
  document.getElementById("deposit_container").style.display="block";
  deposit_input.value = null;
}
function deposit_to_menu(){
  document.getElementById("container3").style.display="block";
  document.getElementById("info_container").style.display="none";
  document.getElementById("withdraw_container").style.display="none";
  document.getElementById("deposit_container").style.display="none";
  document.getElementById("transfer_container").style.display="none";
  document.getElementById("deposit_confirm").style.display="none";
}
///////////////////////////////////////////////////////////////////

///////////////////////transfer function///////////////////////////
var transfer = 0;

function transfer_function(){//mainmenu to transfer function.
  document.getElementById("container3").style.display="none";
  document.getElementById("transfer_container").style.display="grid";
}


function send_transfer(data){//display data to transfer_input
  transfer_input.value = transfer_input.value + data;
  transfer = parseFloat(transfer_input.value);
  if(transfer > balance){
    alert(transfer + " exceed balance $" + balance);
    delete_transfer();
  }
}

function delete_transfer(){//delete data  from transfer_input
  transfer_input.value = transfer_input.value.substring(0, transfer_input.value.length-1);
}

function transfer_to_check(){
  var from = document.getElementById("from_account");
  var to = document.getElementById("to_account");
  document.getElementById("tf_dollar_check").innerHTML = transfer_input.value;
  //get value from select input.
  document.getElementById("from__").innerHTML = from.options[from.selectedIndex].text;
  document.getElementById("to__").innerHTML = to.options[to.selectedIndex].text;

  document.getElementById("transfer_container").style.display="none";
  document.getElementById("transfer_check").style.display="block";
}

function check_to_transfer(){
  document.getElementById("transfer_check").style.display="none";
  document.getElementById("transfer_container").style.display="grid";
}
function transfer_check_to_confirm(){
  document.getElementById("transfer_check").style.display="none";
  document.getElementById("transfer_confirm").style.display="block";
  //below code update information about account.
  transfer = parseFloat(transfer_input.value);
  balance = balance - transfer;
  var row = tbody.insertRow( tbody.rows.length );
  var date__ = row.insertCell(0);
  var out__ = row.insertCell(1);
  var in__ = row.insertCell(2);
  var running = row.insertCell(3);
  //1.calculate current time
  const current_time = new Date();
  // 2. caculate UTC time
  const utc = current_time.getTime() + (current_time.getTimezoneOffset() * 60 * 1000);
 // 3. UTC to KST (UTC + 9hours)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + (KR_TIME_DIFF));

  date__.innerHTML = kr_curr;
  out__.innerHTML = transfer;
  in__.innerHTML = "0";
  running.innerHTML = balance;
  transfer_input.value = null;
}

function transfer_to_menu(){
  document.getElementById("container3").style.display="block";
  document.getElementById("info_container").style.display="none";
  document.getElementById("withdraw_container").style.display="none";
  document.getElementById("deposit_container").style.display="none";
  document.getElementById("transfer_container").style.display="none";
  document.getElementById("transfer_confirm").style.display="none";
}
function confirm_to_transfer(){
  document.getElementById("transfer_confirm").style.display="none";
  document.getElementById("transfer_container").style.display="grid";
}
////////////////////////////////////////////////

function returnCard(){//Back to display account, but remain info about account.
  document.getElementById("container3").style.display="none";
  document.getElementById("transfer_confirm").style.display="none";
  document.getElementById("withdraw_confirm").style.display="none";
  document.getElementById("deposit_confirm").style.display="none";
  document.getElementById("container1").style.display="block";
  account.value = null;
  password.value = null;
}
