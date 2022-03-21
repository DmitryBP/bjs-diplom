'use strict';


const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, response => {  
    if(!response.success){
      userForm.setLoginErrorMessage(response.error)
    }
    else{
      location.reload()
    }
  }) 
}

userForm.registerFormCallback = (data) => {  
  ApiConnector.register(data, response => {
    if(response.success) {
      location.reload()
    }
    else{
      userForm.setRegisterErrorMessage(response.error)
    }  
  })
}

// Вопросы:
// 1. я просто увидел в гивке, что colback для ApiConnector.login() это response, но как я должен был думать, что бы самому понять это?
