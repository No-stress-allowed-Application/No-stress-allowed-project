initContent = () => {
  $('#login').hide()
  $('#register').hide()
}
beforeLogin = () => {
  $('header').hide()
  $('#login').show()
  $('#video').hide()
  $('#cards').hide()

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/media/pexels',
    
  })
  .done((response)=>{
    console.log('ini res')
    console.log(response.data.photos[0])
    $('#isi-cards').append(`
      <div class="row">
                <div class="col-md">
                  <div class="card">
                    <img src="${response.data.photos[0].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <div class="like-dislike">
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></a>
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-down"></i></a>
                      </div>
                      <br>
                      <h5 class="card-title">${response.data.photos[0].photographer}</h5>
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <div class="card">
                    <img src="${response.data.photos[1].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <div class="like-dislike">
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></a>
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-down"></i></a>
                      </div>
                      <br>
                      <h5 class="card-title">${response.data.photos[1].photographer}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <div class="card">
                    <img src="${response.data.photos[1].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <div class="like-dislike">
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></a>
                        <a href="#" class="btn btn-light"><i onclick="myFunction(this)" class="fa fa-thumbs-down"></i></a>
                      </div>
                      <br>
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>`
    )

  })
  .fail((err)=>{
    console.log('ini err')
    console.log(err)
  })
 
}

afterLogin = () => {
  $('header').show()
  $('#register').hide()
  $('#login').hide()   

  
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
  initContent()

  if(localStorage.getItem('access_token')){
      afterLogin()
  }else{
      beforeLogin()
  }  

  $('button, a.btn, a.register-link, a.login-link').click( () => {       
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

  
})