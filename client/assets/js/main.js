initContent = () => {
    $('#login').hide()
    $('#register').hide()
}
beforeLogin = () => {
    $('header').hide()
    $('#login').show()
}

$(document).ready(() => {
    initContent()

    if(localStorage.getItem('access_token')){
        afterLogin()
    }else{
        beforeLogin()
    }  

    $('button, a.btn, a.register-link, a.login-link').click(e => {
        e.preventDefault()
        $('.msg').empty()
    })

    $('a.register-link').click(() => {
        $('#register').show()
        $('#login').hide()        
    })

    $('a.login-link').click(() => {
        $('#register').hide()
        $('#login').show()        
    })

    
})