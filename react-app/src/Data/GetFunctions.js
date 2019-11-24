const port = 51592;

function GetAll() {
  return fetch(`http://localhost:${port}`).then(result => result.json());
}

function GetCountryList() {
  return fetch(`http://localhost:${port}/countries`).then(result => result.json());
}

function GetCountry(country) {
  return fetch(`http://localhost:${port}/${country}/`).then(result =>
    result.json()
  );
}

function GetDepartment(country, department) {
  return fetch(`http://localhost:${port}/${country}/${department}/`).then(
    result => result.json()
  );
}

function GetEmployee(country, department, employee) {
  return fetch(`http://localhost:${port}/${department}/${employee}`).then(
    result => result.json()
  );
}

export { GetAll, GetCountry, GetDepartment, GetEmployee, GetCountryList };
