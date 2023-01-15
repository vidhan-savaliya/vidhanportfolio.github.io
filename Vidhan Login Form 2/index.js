document.querySelector(".icai_login_right_login_btn").addEventListener("click", function () {

    var firstName = document.getElementById("accountname").value;
    var lastName = document.getElementById("password").value;

    if (firstName == "WRO0726834@icai.nic" && lastName == "301750") {
        window.open("res.html");
    }

    else {
        window.open("https://eservices.icai.org/per/g21/pub/1666/SelfServices/templates/Login%20Folder21052019122446/Login%20Folder/ICAI%20Phase%20II%20Login%20Page521052019122546.html");
    }
})