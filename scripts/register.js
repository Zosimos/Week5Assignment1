//create constructer
function User(fname,lname,age,gender,phone,payment,color){
    //list of attributes
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

function register(){
    let inputfirstName = $("#txtFirstName").val();
    let inputlastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    let newUser = new User(inputfirstName, inputlastName, inputAge, inputGender, inputPhone, inputPayment, inputColor);

    console.log(newUser);
}

//javascript
//document.getElementById("txtAge").style.display="none";//hides the element
//jquery
//$("#txtAge").hide();//hides the element
//$("#txtAge").val();  //document.getElementById("txtAge").value;