
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
function onSignIn (googleUser) {
    const profile = googleUser.getBasicProfile()
    const id_token = googleUser.getAuthResponse().id_token
    $.ajax({
      url: `${baseUrl}/users/logingoogle`,
      method: 'POST',
      data: {
        id_token: id_token
      }
    })
      .done(function (response) {
        console.log(response)
        localStorage.setItem('token', response.token)
        console.log('User successfully signed in')
        currentPage()
      })
      .fail(err => {
        console.log(err)
      })
}

logout = () => {
    $('.msg').empty()
    beforeLogin()
    localStorage.clear()
    $('.msg').append(`<div class="alert alert-success" role="alert">You've logged out!</div>`)
}
$(document).ready(() => {
    // initContent()

    $('#register-form').submit(register)
    $('#login-form').submit(login)
    $('#logout').click(logout)
    // $(document).ready(function() {
      $.ajaxSetup({ cache: true });
      $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
          appId: '{2717854461762906}',
          version: 'v2.7'
        });
        $('#loginbutton').removeAttr('disabled');
        FB.getLoginStatus(updateStatusCallback);
      });
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

    
    // });
    
    // video
    $.ajax({
      method:'GET',
      url:'http://localhost:3004/sport',
      
    })
    .done((response)=>{
      let random = Math.floor(Math.random()* response.length)
      console.log(response[0].embed)
      $('#video-insert').append(
        response[0].embed
      )
      $('#video-title').append(
        `<h5 class="card-title">${response[0].title}</h5>`
      )
    })
    .fail((err)=>{
      console.log(err)
    })
})

