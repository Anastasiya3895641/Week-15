function calcDivis() {
    let first_number = document.getElementById('first_number').value;
    let second_number = document.getElementById('second_number').value;

    let html = +first_number / +second_number;

    document.getElementById('result').innerHTML = html;
}

document.getElementById('click_me').addEventListener('click', calcDivis)

function check() {

    let result = document.getElementById('second_number').value;
    if (result == 0) {
        alert('На "0" делить нельзя, напишите другое число')
    }

}
document.getElementById('click_me').addEventListener('click', check)



function checkRegistration() {
    let first_name = document.getElementById('first_name').value;
    let number = document.getElementById('number').value;
    let tel = /^[A-Za-z]+$/;
    let email = document.getElementById('email').value;
    let email2 = /^[A-Za-z0-9]+$/;
    let password = document.getElementById('password').value;
    let min7 = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    errorMessage.innerHTML = "";

    if (first_name == '') {
        errorMessage.innerHTML =
            `Вы не заполнили поле - Введите ваше имя<br>`;
        return false;
    }

    if (number == '') {
        errorMessage.innerHTML =
            `Вы не заполнили поле - Введите ваш номер<br>`;
        return false;
    }

    if (tel.test(document.getElementById("number").value)) {
        errorMessage.innerHTML =
            `Вы вставили буквы в поле - Введите ваш номер<br>`;
        return false;
    }

    if (email == '') {
        errorMessage.innerHTML =
            `Вы не заполнили поле - Введите ваш email<br>`;
        return false;
    }

    if (email2.test(document.getElementById("email").value)) {
        errorMessage.innerHTML =
            `Вы не вставили @ в поле - Введите ваш email<br>`;
        return false;
    }

    if (password == '') {
        errorMessage.innerHTML =
            `Вы не заполнили поле - Введите ваш пароль<br>`;
        return false;
    }

    if (min7.length <= 6) {
        errorMessage.innerHTML =
            `Слишком маленький пароль, введите минимум 7 символов<br>`;
        return false;
    }


    if (password2 == '') {
        errorMessage.innerHTML =
            `Вы не заполнили поле - Повторите пароль<br>`;
        return false;
    }

    if (document.getElementById('password').value == document.getElementById('password2').value) {
    }
    else {
        alert('Пароли не совпадают');
        return false;
    }


    if (document.getElementById('form').value == "") {
    }
    else {
        getMessage()
    }
}

function getMessage() {
    let first_name = document.getElementById('first_name').value;
    alert(`Привет, ${first_name}!`);
}

document.getElementById('click_registr').addEventListener('click', checkRegistration)



function selectChange() {

    let color = document.getElementById("color").value;

    if (color == "white") {
        document.body.style.backgroundColor = "White";
        document.body.style.color = "Black";
    }
    else if (color == "dark") {
        document.body.style.backgroundColor = "Black";
        document.body.style.color = "White";
    }
    else if (color == "blue") {
        document.body.style.backgroundColor = "Blue";
        document.body.style.color = "White";
    }
    else if (color == "grey") {
        document.body.style.backgroundColor = "Grey";
        document.body.style.color = "White";
    }
}

document.getElementById('select').addEventListener('click', selectChange)




//document.querySelector(".form_number").addEventListener("keyup", function () {
//    this.value = this.value.replace(/[^\d]/g, "");
//});

