function validateEmail() {
    var emailInput = document.getElementById('email').value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput)){
        document.getElementById('errorMessage').innerHTML = 'valid email required';
    }else {
        window.location.href = 'success.html?email=' + encodeURIComponent(emailInput);
    }
}