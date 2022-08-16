const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'Admin') {
        if (password.value == 'Admin') {
            alert('Login Successful!')
        }
        else {
            alert('Please check your ID and Password')
            errStack ++;
        }
    }
    else {
        alert('The account does not exist.')
    }

    if (errStack >= 5) {
        alert('Error logging in 5 times, try to find the password.')
    }
})