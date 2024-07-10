'use strict';

let loginObj = new UserForm();
loginObj.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if(response.success === false){
      loginObj.setLoginErrorMessage(response.error)
    }else {
      location.reload();
    }
  });
};
