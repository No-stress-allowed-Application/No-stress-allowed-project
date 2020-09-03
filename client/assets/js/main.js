
// initContent = () => {
//     $('#login').hide()
//     $('#register').hide()
//     $('#video').hide()
//     $('#search').hide()
//     $('#cards').hide()
// }
beforeLogin = () => {
    $('header').hide()
    $('#login').show()
    $('#video').hide()
    $('#search').hide()
    $('#cards').hide()
}
afterLogin = () => {
    $('header').show()
    $('#register').hide()
    $('#login').hide() 
    $('#video').show()
    $('#search').show()
    $('#cards').show()  
}
// register = e => {
//     e.preventDefault()
//     const username = $('#username-register').val()
//     const email = $('#email-register').val()
//     const password = $('#password-register').val()
//     $.ajax({
//         method: 'POST',
//         url: 'http://localhost:3000/users/register',
//         data: {
//             username,
//             email,
//             password
//         }
//     })
//     .done(res => {
//         $('#username-register').val('')
//         $('#email-register').val('')
//         $('#password-register').val('')
//         beforeLogin()
//         $('.msg').append(`<div class="alert alert-success" role="alert">Account created successfully!</div>`)
//     })
//     .fail(err => {
//         for(const el of err.responseJSON.errors){
//             $('.msg').append(`<div class="alert alert-danger" role="alert">${el}</div>`)
//         }
//     })
// }
// login = e => {
//     e.preventDefault()
//     const email = $('#email-login').val()
//     const password = $('#password-login').val()
//     $.ajax({
//         method: 'POST',
//         url: 'http://localhost:3000/users/login',
//         data: {
//             email,
//             password
//         }
//     })
//     .done(res => {
//         $('#email-login').val('')
//         $('#password-login').val('')
//         localStorage.setItem('access_token', res.access_token)
//         afterLogin()
//         $('.msg').append(`<div class="alert alert-success" role="alert">Login success!</div>`)
//     })
//     .fail(err => {
//         for(const el of err.responseJSON.errors){
//             $('.msg').append(`<div class="alert alert-danger" role="alert">${el}</div>`)
//         }
//     })
// }
logout = () => {
    $('.msg').empty()
    beforeLogin()
    localStorage.clear()
    $('.msg').append(`<div class="alert alert-success" role="alert">You've logged out!</div>`)
}
$(document).ready(() => {
    // initContent()

    // if(localStorage.getItem('access_token')){
    //     afterLogin()
    // }else{
    //     beforeLogin()
    // }  

    // $('button, a.btn, a.register-link, a.login-link').click( () => {       
    //     $('.msg').empty()
    // })

    // $('a.register-link').click(() => {
    //     $('#register').show()
    //     $('#login').hide()        
    // })

    // $('a.login-link').click(() => {
    //     $('#register').hide()
    //     $('#login').show()        
    // })

    $('#register-form').submit(register)
    $('#login-form').submit(login)
    $('#logout').click(logout)

    
})

