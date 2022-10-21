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
    let result = document.getElementById('first_name').value;
    if (result == '') {
        alert('Вы не заполнили поле "Введите ваше имя"');
        document.form.name.focus();
        return false;
    }


    let result2 = document.getElementById('number').value;
    if (result2 == '') {
        alert('Вы не заполнили поле "Введите ваш номер"');
    }

    let resalt3 = /^[A-Za-z]+$/;
    if (resalt3.test(document.getElementById("number").value)) {
        alert('Вы вставили буквы в поле "Введите ваш номер"');
    }

    let result4 = document.getElementById('email').value;
    if (result4 == '') {
        alert('Вы не заполнили поле "Введите ваш email"');
    }

    let resalt5 = /^[A-Za-z0-9]+$/;
    if (resalt5.test(document.getElementById("email").value)) {
        alert('Вы не вставили @ в поле "Введите ваш email"');
    }

    let result6 = document.getElementById('password').value;
    if (result6 == '') {
        alert('Вы не заполнили поле "Введите ваш пароль"');
    }

    let result7 = document.getElementById('password').value;
    if (result7.length <= 6) {
        alert('Слишком маленький пароль, введите минимум 7 символов');
    }

    if (document.getElementById('password').value == document.getElementById('password2').value) {
    }
    else {
        alert('Пароли не совпадают');
    }

    let result8 = document.getElementById('password2').value;
    if (result8 == '') {
        alert('Вы не заполнили поле "Повторите пароль"');
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






//document.querySelector(".form_number").addEventListener("keyup", function () {
//    this.value = this.value.replace(/[^\d]/g, "");
//});


function selectChange() {

    let color = document.getElementById("color").value;

    if (color == "white") {
        document.body.style.backgroundColor = "White";
    }
    else if (color == "dark") {
        document.body.style.backgroundColor = "Black";
    }
    else if (color == "blue") {
        document.body.style.backgroundColor = "Blue";
    }
    else if (color == "grey") {
        document.body.style.backgroundColor = "Grey";
    }
}

document.getElementById('select').addEventListener('click', selectChange)


