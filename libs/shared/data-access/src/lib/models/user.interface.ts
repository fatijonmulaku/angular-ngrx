export interface User {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': {
    'street': string,
    'city': string,
    'state': string,
    'zipcode': string
  }
}
