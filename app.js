
document.getElementById('myForm').addEventListener('submit', check);

function check(event) {
    var name = document.getElementById('inputName');
    var password = document.getElementById('inputPassword');

    if (name.value.toLowerCase() == 'admin' && password.value == 'admin123') {
        window.location.href = 'addQuiz.html';
        console.log(event);
    } else {
        alert('Please enter the correct details');
    }

    event.preventDefault();
}


