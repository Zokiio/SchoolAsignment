function GetAll() {
  return fetch('http://localhost:37053/').then(result => result.json());
}

function GetCountry(country) {
  return fetch(`http://localhost:37053/${country}/`).then(result =>
    result.json()
  );
}

function GetDepartment(country, department) {
  return fetch(`http://localhost:37053/${country}/${department}/`).then(
    result => result.json()
  );
}

function GetEmployee(country, department, employee) {
  return fetch(
    `http://localhost:37053/${country}/${department}/${employee}`
  ).then(result => result.json());
}

export { GetAll, GetCountry, GetDepartment, GetEmployee };
