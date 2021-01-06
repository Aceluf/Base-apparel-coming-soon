const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const validationText = document.querySelector('.validation-text');
const input = document.querySelector('.form-control');



function ValidateEmail(email) 
{
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailformat.test(email);

}

function onInput() {
    icon.classList.add('hidden');
    validationText.classList.add('hidden')
}



btn.addEventListener('click', function (event) {
    event.preventDefault();
    let email = input.value;
    if (ValidateEmail(email)) {
        icon.classList.add('hidden');
        validationText.classList.add('hidden')
    } else {
        icon.classList.remove('hidden');
        validationText.classList.remove('hidden');
    }
});

input.addEventListener('keyup', onInput);