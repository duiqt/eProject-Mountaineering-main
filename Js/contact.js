function readData() {
    var a = [];
    // name
    let name = document.getElementById("name").value;
    let checkname = /^[a-zA-Z- ]{3,50}$/;
    if (!checkname.test(name)) {
        alert("The name must be between 3 and 50 characters ( not including spaces).")
        return false;
    }
    // email
    let mail = document.getElementById("email").value;
    let checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,3})$/;
    if (!checkmail.test(mail)) {
        alert("You entered the wrong Mail format !");
        return false;
    }

    a.push("Succesfully submitted");
    alert(a.join("\n"));
    
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
