function CreateAccountBtn()
{
    if(verifyRegisterData())
    {
        CreateAccountStepTwo();
    }
}

function CreateAccountStepTwo()
{
    let login = document.getElementById('login');
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');
    let repass = document.getElementById('repass');

    login.classList.add('ui-input_hidden');
    mail.classList.add('ui-input_hidden');
    pass.classList.add('ui-input_hidden');
    repass.classList.add('ui-input_hidden');

    let confirmMail = document.getElementById('mail-code');
    let promo = document.getElementById('promo-code');
    confirmMail.classList.remove('ui-input_hidden');
    promo.classList.remove('ui-input_hidden');
    promo.classList.remove('ui-input_hidden');

    //showRegMessage("На ваш E-Mail был отправлен код подтверждения", 'info')

}

/**
 * Вывод сообщения пользователю при регистрации
 * @param text Текст сообщения
 * @param type Внешний вид, доступно warning, message
 */
function showRegMessage(text, type = 'warning')
{
    let messageString = document.getElementById('register-form__message');
    messageString.innerHTML += text + '<br>';
}

function clearRegMessage()
{
    let messageString = document.getElementById('register-form__message');
    messageString.innerHTML = '';

}

function getUIField(element)
{
    return element.getElementsByClassName('ui-input__field')[0];
}

function getUIHeader(element)
{
    return element.getElementsByClassName('ui-input__text')[0];
}

function wrongInputHighlight(element)
{
    getUIField(element).classList.add('ui-input_error'); //ui-input__text_error
    getUIHeader(element).classList.add('ui-input__text_error'); //ui-input_error
}

function clearWrongHighlight(element)
{
    getUIField(element).classList.remove('ui-input_error'); //ui-input__text_error
    getUIHeader(element).classList.remove('ui-input__text_error'); //ui-input_error
}

/**
 * Проверяет корректность заполнения полей
 */
function verifyRegisterData()
{
    clearRegMessage();
    document.querySelectorAll('.ui-input').forEach(el => clearWrongHighlight(el));

    let result = true;
    let login = document.getElementById('login');
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');
    let repass = document.getElementById('repass');

    let loginRegex =  /^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/;
    let loginField = getUIField(login);
    if(loginField.value.length < 4 || loginField.value.length > 15)
    {
        showRegMessage('Логин должен быть от 4 до 15 символов!');
        wrongInputHighlight(login);
        result = false;
    }
    else if(loginRegex.test(loginField.value) === false)
    {
        showRegMessage('Логин должен состоять из латинских букв и цифр!');
        wrongInputHighlight(login);
    }
    let mailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let mailField = getUIField(mail);
    if(mailRegex.test(mailField.value) === false)
    {
        showRegMessage('Введите корректный E-Mail адрес!');
        wrongInputHighlight(mail);
        result = false;
    }

    //let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]$/;
    let passField = getUIField(pass);
    if(passField.value.length < 5 || passField.value.length > 25)
    {
        showRegMessage('Пароль должен быть от 5 до 25 символов!');
        wrongInputHighlight(pass);
        wrongInputHighlight(repass);
        result = false;
    }
    /*else if(passwordRegex.test(passField.value) === false)
    {
        showRegMessage('Пароль должен состоять из латинских букв и цифр!');
        wrongInputHighlight(pass);

    }*/
    if(passField.value !== getUIField(repass).value)
    {
        showRegMessage('Пароли не совпадают!');
        wrongInputHighlight(repass);
        result = false;
    }
    return result;
}
