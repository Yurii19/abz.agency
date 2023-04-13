export function loadUsers(range: number) {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${range}`
  ).then((response) => response.json());
  // .then((data) => console.log(data));
}

export function loadToken() {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// export function loadToken() {
//   return  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })
//   ;
// }
