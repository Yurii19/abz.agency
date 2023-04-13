export function loadUsers(range: number) {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${range}`
  ).then((response) => response.json());
  // .then((data) => console.log(data));
}

export function loadToken() {
  return fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  ).then((response) => response.json())
   //.then((data) => console.log(data));
}

export function loadPositionsIds() {
  return fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  ).then((response) => response.json());
  // .then((data) => console.log(data));
}

export const nameRule = (value: string): boolean | string => {
  if (!value) return 'Input a value';
  if (value.length >= 2 && value.length <= 60) return true;
  return 'Username should contain 2-60 characters';
};

export const emailRule = (value: string): boolean | string => {
  if (!value) return 'Input a value';
  if (value.match(emailPattern)) return true;
  return 'User email, must be a valid.';
};

export const phoneRule = (value: string): boolean | string => {
  if (!value) return 'Input a value';
  if (value.match(phonePattern)) return true;
  return 'User phone, must be a valid.';
};

export const addUser = (formData: any, token: any) => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: { Token: token },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const emailPattern =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;
