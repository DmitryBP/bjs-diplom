

const logoutButton = new LogoutButton();
// const apiConnector = new ApiConnector();

// logoutButton.action = () => {ApiConnector.logout()}
logoutButton.logoutClick = ApiConnector.logout(response => {console.log(response, 'До выхода 5 секунд'); setTimeout(() => location.reload(), 5000)})
// logoutButton.action = () => {console.log('test'); location.reload()}