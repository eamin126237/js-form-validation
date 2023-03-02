let namee = document.querySelector("#name input");
let email = document.querySelector("#email input");
let phone = document.querySelector("#phone input");
let form = document.getElementById("demo");

let alert_icon_name = document.getElementById("name_i");
let alert_icon_email = document.getElementById("email_i");
let alert_icon_phone = document.getElementById("phone_i");
let p_name = document.getElementById("p_name");
let p_email = document.getElementById("p_email");
let p_phone = document.getElementById("p_phone");
let required_name = document.getElementById("required_name");
let required_email = document.getElementById("required_email");
let required_phone = document.getElementById("required_phone");

let count_name = 0;

/**
 * Name
 */

namee.onblur = () => {
    if (namee.value == "") {
        alert_icon_name.style.display = "block";
        required_name.innerHTML = `Name Required`;
    } else {
        alert_icon_name.style.display = "none";
    }
    count_name++;
};

namee.onkeyup = () => {
    alert_icon_name.style.display = "none";
    p_name.style.display = "none";
    required_name.innerHTML = "";
};

namee.onfocus = () => {
    if (namee.value == "" && count_name > 0) {
        p_name.style.display = "block";
    } else {
        p_name.style.display = "none";
    }

    p_email.style.display = "none";
    p_phone.style.display = "none";
};

/**
 * Email
 */

let count_email = 0;

email.onblur = () => {
    if (email.value == "") {
        alert_icon_email.style.display = "block";
        required_email.innerHTML = `Email Required`;
    } else {
        alert_icon_email.style.display = "none";
    }
    count_email++;
};

email.onkeyup = () => {
    alert_icon_email.style.display = "none";
    p_email.style.display = "none";
    required_email.innerHTML = "";
};

email.onfocus = () => {
    if (email.value == "" && count_email > 0) {
        p_email.style.display = "block";
    } else {
        p_email.style.display = "none";
    }

    p_name.style.display = "none";
    p_phone.style.display = "none";
};

/**
 * phone
 */

let count_phone = 0;

phone.onblur = () => {
    if (phone.value == "") {
        alert_icon_phone.style.display = "block";
        required_phone.innerHTML = `Phone Required`;
    } else {
        alert_icon_phone.style.display = "none";
    }
    count_phone++;
};

phone.onkeyup = () => {
    alert_icon_phone.style.display = "none";
    p_phone.style.display = "none";
    required_phone.innerHTML = "";
};

phone.onfocus = () => {
    if (phone.value == "" && count_phone > 0) {
        p_phone.style.display = "block";
    } else {
        p_phone.style.display = "none";
    }

    p_name.style.display = "none";
    p_email.style.display = "none";
};

/**
 * validation msg
 */

let msg = document.querySelector(".msg");

form.onsubmit = (event) => {
    event.preventDefault();

    if (namee.value == "" || email.value == "" || phone.value == "") {
        msg.innerHTML = alert_msg_all("danger", "All field are required");
    } else if (emailValid(email.value) == false) {
        msg.innerHTML = alert_msg_all("warning", "Invalid Email");
    } else if (phoneValid(phone.value) == false) {
        msg.innerHTML = alert_msg_all("warning", "Invalid Phone");
    } else {
        msg.innerHTML = alert_msg_all("success", "Successfully Done");
    }

    if (namee.value == "") {
        required_name.innerHTML = `Name Required`;
        required_name.style.color = "red";
    }
    if (email.value == "") {
        required_email.innerHTML = `Email Required`;
        required_email.style.color = "red";
    }
    if (phone.value == "") {
        required_phone.innerHTML = `Phone Required`;
        required_phone.style.color = "red";
    }
};
