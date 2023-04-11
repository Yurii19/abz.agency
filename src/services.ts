export function getUsers(range: number) {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${range}`
  )
    .then((response) => response.json())
   // .then((data) => console.log(data));
}
