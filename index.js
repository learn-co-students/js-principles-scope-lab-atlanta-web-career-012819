var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not bob';
}
