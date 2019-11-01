const port = 1065;

function GetAll() {
  return fetch('http://localhost:19505/').then(result => result.json());
}

function GetCountry(country) {
  return fetch(`http://localhost:19505/${country}/`).then(result =>
    result.json()
  );
}

function GetDepartment(country, department) {
  return fetch(`http://localhost:19505/${country}/${department}/`).then(
    result => result.json()
  );
}

function GetEmployee(country, department, employee) {
  return fetch(
    `http://localhost:${port}/19505/${department}/${employee}`
  ).then(result => result.json());
}

export { GetAll, GetCountry, GetDepartment, GetEmployee };
