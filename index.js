let form = document.querySelector(".form");
let username = document.querySelector("#input-Username");
let password = document.querySelector("#input-Password");
let spanUsername = document.querySelector("#username");
let spanPassword = document.querySelector("#password");
let seePassword = document.querySelector("#see-password");
let row = document.querySelector(".row");
let row2 = document.querySelector(".row-2");



// userPatter => up
// این یک رجکس است و با ان مشخص می کنیم که جه کارکتر هایی در اینپوت قرار بگیره
let up = /^[a-zA-Z][\w._]{5,23}$/;
let ep = 0;
let eu = false;


form.addEventListener("submit", e => {
    if (!(eu && ep === 5)) {
        e.preventDefault();

        if (!eu) {
            row.classList.add("is-invalid");
            row.querySelector("#icon-xmark").style.display = "block";
        }

        if (ep !== 5 ) {
            row2.querySelector("#icon-xmark-2").style.display = "block";
            row2.classList.add("is-invalid");
        }
    }
});


username.addEventListener("keyup", e => {
    if (e.target.value) {
        spanUsername.textContent = e.target.value.toLowerCase();
        if (up.test(e.target.value)) {
            eu = true;
            row.classList.add("is-valid");
            row.classList.remove("is-invalid");
            row.querySelector("#icon-check").style.display = "block";
            row.querySelector("#icon-xmark").style.display = "none";
        } else {
            eu = false;
            row.classList.add("is-invalid");
            row.classList.remove("is-valid");
            row.querySelector("#icon-check").style.display = "none";
            row.querySelector("#icon-xmark").style.display = "block";
        }
    } else {
        spanUsername.innerHTML = '<i>Please write something</i>';
   }
});


password.addEventListener("keyup", e => {
    if (e.target.value) {
        spanPassword.textContent = '*'.repeat(e.target.value.length);
        seePassword.textContent = e.target.value;

        ep = 0;
        ep+= /[A-Z]/.test(e.target.value) ? 1 : 0;
        ep+= /[a-z]/.test(e.target.value) ? 1 : 0;
        ep+= /[0-9]/.test(e.target.value) ? 1 : 0;
        ep+= /[\w]/.test(e.target.value) ? 1 : 0;
        ep += e.target.value.length >= 6 ? 1 : 0;

        if (ep === 5) {
            row2.classList.add("is-valid");
            row2.classList.remove("is-invalid");
            row2.querySelector("#icon-check-2").style.display = "block";
            row2.querySelector("#icon-xmark-2").style.display = "none";
        } else {
            row2.classList.add("is-invalid");
            row2.classList.remove("is-valid");
            row2.querySelector("#icon-check-2").style.display = "none";
            row2.querySelector("#icon-xmark-2").style.display = "block";
        }
    } else {
        spanPassword.innerHTML = '<i>Please select a password</i>';
        seePassword.innerHTML = '<i>Please select a password</i>';
    }
});