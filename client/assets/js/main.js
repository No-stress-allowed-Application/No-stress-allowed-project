initContent = () => {
  $('#login').hide()
  $('#register').hide()
}
beforeLogin = () => {
  $('#video').hide()
  $('#card-image').hide()
  $('header').hide()
  $('#login').show()
}
afterLogin = () => {
  $('header').show()
  $('#register').hide()
  $('#login').hide() 
  $('#video').hide()
  $('#card-image').hide()  
}
register = e => {
  e.preventDefault()
  const username = $('#username-register').val()
  const email = $('#email-register').val()
  const password = $('#password-register').val()
  $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/register',
      data: {
          username,
          email,
          password
      }
  })
  .done(res => {
      $('#username-register').val('')
      $('#email-register').val('')
      $('#password-register').val('')
      beforeLogin()
      $('.msg').append(`<div class="alert alert-success" role="alert">Account created successfully!</div>`)
  })
  .fail(err => {
      for(const el of err.responseJSON.errors){
          $('.msg').append(`<div class="alert alert-danger" role="alert">${el}</div>`)
      }
  })
}
login = e => {
  e.preventDefault()
  const email = $('#email-login').val()
  const password = $('#password-login').val()
  $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/login',
      data: {
          email,
          password
      }
  })
  .done(res => {
      $('#email-login').val('')
      $('#password-login').val('')
      localStorage.setItem('access_token', res.access_token)
      afterLogin()
      $('.msg').append(`<div class="alert alert-success" role="alert">Login success!</div>`)
  })
  .fail(err => {
      for(const el of err.responseJSON.errors){
          $('.msg').append(`<div class="alert alert-danger" role="alert">${el}</div>`)
      }
  })
}
function onSignIn (googleUser) {
  const profile = googleUser.getBasicProfile()
  const id_token = googleUser.getAuthResponse().id_token
  $.ajax({
    url: `http://localhost:3000/users/logingoogle`,
    method: 'POST',
    data: {
      id_token: id_token
    }
  })
    .done(function (response) {
      localStorage.setItem('access_token', res.access_token)
      afterLogin()
      console.log(response);
      $('.msg').append(`<div class="alert alert-success" role="alert">Login success!</div>`)
    })
    .fail(err => {
      console.log(err)
    })
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
logout = () => {
  $('.msg').empty()
  signOut()
  beforeLogin()
  localStorage.clear()
  $('.msg').append(`<div class="alert alert-success" role="alert">You've logged out!</div>`)
}
$(document).ready(() => {
  initContent()

  if(localStorage.getItem('access_token')){
      afterLogin()
  }else{
      beforeLogin()
  }  

  $('button, a.btn, a.register-link, a.login-link', '#nav-video', '#nav-image').click( () => {       
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

  $('#register-form').submit(register)
  $('#login-form').submit(login)
  $('#logout').click(logout)
  $('.g-signin2').click(onSignIn)

  $('#logo').click(e => {
    $.ajax({
      url: `http://localhost:3000/sport`,
      method: 'GET'
    })
      .done(function (response) {
        console.log(response);
      })
      .fail(err => {
        console.log(err)
      })
  })
  $('#nav-video').click(e=> {
    $('#video').show()
    $('#card-image').hide()
    $('header').show()
  })
  $('#nav-image').click(e=> {
    $('#video').hide()
    $('#card-image').show()
    $('header').show()
  })
  
})