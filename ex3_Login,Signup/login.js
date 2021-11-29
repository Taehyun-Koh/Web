$(document).ready(function(){


let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");

    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}

//check password in specific condition.
var passwdCheck = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{6,16}$/);
//check First, last name in specific condition.
var nameCheck = RegExp(/[a-zA-Z]/);

$('#toreg').click(function(){
  $('.warning_').show();
});

$('#tologin').click(function(){
  $('.warning_').hide();
  $('#success').hide();
});

//check first name condition.
$("#firstname").on("change keyup paste", function() {
    var currentFirstname = $(this).val();
    if(!/[A-Z]/.test(currentFirstname[0])) {
      $('#fn_warn').text("Should start with capital letter!");
      $('#firstname').css('border-color','red');
    }
    if(!nameCheck.test($('#firstname').val())) {
      $('#fn_warn').text("First name cannot contain numbers!");
      $('#firstname').css('border-color','red');
    }
    if(/[A-Z]/.test(currentFirstname[0]) && nameCheck.test($('#firstname').val())) {
      $('#fn_warn').hide();
      $('#firstname').css('border-color','white');
      $('#fncheck').show();
    }
    if(currentFirstname==0){
    $('#fncheck').hide();
    $('#fn_warn').show();
    }
});
//check last name condition.
$("#lastname").on("change keyup paste", function() {
    var currentLastname = $(this).val();
    if(!/[A-Z]/.test(currentLastname[0])){
      $('#ln_warn').text("Should start with capital letter!");
      $('#lastname').css('border-color','red');
    }
      if(!nameCheck.test($('#lastname').val())){
        $('#ln_warn').text("Last name cannot contain numbers!");
        $('#lastname').css('border-color','red');
    }
    if(/[A-Z]/.test(currentLastname[0]) && nameCheck.test($('#lastname').val())) {
      $('#ln_warn').hide();
      $('#lastname').css('border-color','white');
      $('#lncheck').show();
    }
    if(currentLastname==0){
    $('#lncheck').hide();
    $('#ln_warn').show();
    }
});

//check email condition.
$("#email_sign").on("change keyup paste", function() {
    var currentEmail = $(this).val();
    if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(currentEmail)){
    $('#email_warn').text("Your email address is invalid!");
    $('#email_sign').css('border-color','red');
    }
    if(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(currentEmail)){
    $('#email_sign').css('border-color','white');
    $('#email_warn').hide();
    $('#emailcheck_sign').show();
    }
    if(currentEmail==0){
    $('#emailcheck_sign').hide();
    $('#email_warn').show();
    }
});

//check if check box is selected or not.
$("#male").click(function(){
        var chk = $(this).is(":checked");
        if(chk){
            $('#gender_warn').hide();
            $('#gendercheck').show();
        }
        if(!chk){
            $('#gender_warn').show();
            $('#gendercheck').hide();
        }
});
$("#female").click(function(){
        var chk = $(this).is(":checked");
        if(chk){
            $('#gender_warn').hide();
            $('#gendercheck').show();
        }
        if(!chk){
            $('#gender_warn').show();
            $('#gendercheck').hide();
        }
});

//check password condition.
$("#pw_sign").on("change keyup paste", function() {
    if(!passwdCheck.test($('#pw_sign').val())){
    $('#pw_warn').text("Requirment:at least 6 characters,one capital letter, one lowercase letter, at least one digit, and one special character");
    $('#pw_sign').css('border-color','red');
    }
    if(passwdCheck.test($('#pw_sign').val())){
    $('#pw_sign').css('border-color','white');
    $('#pw_warn').hide();
    $('#pwdcheck_sign').show();
    }
    if($(this).val()==0){
    $('#pwdcheck_sign').hide();
    $('#pw_warn').show();
    }

});

//check password is same with password.
$("#repw").on("change keyup paste", function() {
    if($('#pw_sign').val() != $('#repw').val()){
    $('#repw_warn').text("Password does not match!");
    $('#repw').css('border-color','red');
    }
    if($('#pw_sign').val() == $('#repw').val()){
    $('#repw').css('border-color','white');
    $('#repw_warn').hide();
    $('#repwdcheck').show();
    }
    if($(this).val()==0){
    $('#repwdcheck').hide();
    $('#repw_warn').show();
    }
});

//signup button
$('#signbtn').click(function(){
  $('.sign').hide();
  $('#success').show();
})

//check login-email condition
$("#email_login").on("change keyup paste", function() {
    var currentEmail2 = $(this).val();
    if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(currentEmail2)){
    $('#email_login').css('border-color','red');
    $('#email_login_warn').show();
    }
    if(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(currentEmail2)){
    $('#email_login').css('border-color','white');
    $('#email_login_warn').hide();
    $('#emailcheck').show();
    }
    if(currentEmail2==0){
    $('#emailcheck').hide();
    $('#email_login_warn').show();
    }
});
//check login-password condition
$("#pwd_login").on("change keyup paste", function() {
    if(!passwdCheck.test($('#pwd_login').val())){
    $('#pwd_login').css('border-color','red');
    $('#pwd_login_warn').show();
    }
    if(passwdCheck.test($('#pwd_login').val())){
    $('#pwd_login').css('border-color','white');
    $('#pwd_login_warn').hide();
    $('#pwdcheck').show();
    }
    if($(this).val()==0){
    $('#pwdcheck').hide();
    $('#pwd_login_warn').show();
    }

});

//check data which is determined in signup page.
$('#loginbtn').click(function(){
  const email_confirm = document.getElementById('email_sign').value;
  const pwd_confirm = document.getElementById('pw_sign').value;
  console.log(email_confirm);
  console.log(pwd_confirm);
  const input_email = document.getElementById('email_login').value;
  const input_pwd = document.getElementById('pwd_login').value;
  console.log(input_email);
  console.log(input_pwd);
  if((input_email==email_confirm) && (input_pwd==pwd_confirm)){
    $('.tab-header').hide();
    $('.login').hide();
    $('#success_final').show();
  }
  else{
    $('#checking').text("Credential do not match!").css("color","red");
  }

})

})
