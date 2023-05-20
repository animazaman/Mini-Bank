document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('Submit button Clicked.')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'bBank' && password==='secret')
    {
        console.log('valid user.');
        // document.getElementById('btn-submit').onclick="window.location.href = 'bank.html';"
        window.location.href = "bank.html";
    }
    else{
        alert('Bure najarwale tera mu kalaaa.');
    }

})