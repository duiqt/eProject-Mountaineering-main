function sendData(){
    var b=[];

    let send = document.getElementById("email2").value;
    let checkmail2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,3})$/;
    if (!checkmail2.test(send)){
        alert("You entered the wrong Mail format !");
        return ;
    }
    b.push("Sign Up Success");
    alert(b.join("\n"));


}
