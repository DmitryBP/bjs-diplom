'use strict';

const logoutButton = new LogoutButton();
logoutButton.action = () => {
  ApiConnector.logout((response) => {
    if (response) {
      location.reload();
    }
  });
};

ApiConnector.current((response) => {
  if (response.success) {
    ProfileWidget.showProfile(response.data);
  }
});

const getCours = () => {
  let ratesBoard = new RatesBoard();
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
    }
  });
};
getCours();
setInterval(() => {
  getCours();
}, 60000);

const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (response) => {
    if (response.success) {
      console.log(response, data);
      ProfileWidget.showProfile(response.data);
      console.log(response);
      moneyManager.setMessage(response.success, 'test');
    }
  });
};
