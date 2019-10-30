import React, { useState } from 'react';
import { GetAll, GetCountry, GetDepartment } from '../Data/GetFunctions';

function Home() {
  const [country, setCountry] = useState([]);
  const [employees, setEmployees] = useState([]);

  console.log(country);

  const getDepartments = e => {
    GetCountry(e.target.value).then(e => {
      console.log(e);
      setCountry(e);
    });
  };

  const updateEmployees = () => {};

  return (
    <div className='App'>
      <h1>test</h1>
      {country.length !== 0 ? <p>{country.countryName}</p> : <p>Hello</p>}
      <form>
        <select
          className='browser-default custom-select'
          name='country'
          onChange={getDepartments}
        >
          {
            //country.map((specificCountry) => <option key={specificCountry.label} value={specificCountry.value}>{specificCountry.label}</option>)
            <>
              <option key='' value=''>
                Country
              </option>
              <option key='1' value='sweden'>
                Sweden
              </option>
              <option key='2' value='england'>
                England
              </option>
            </>
          }
        </select>
        <select className='browser-default custom-select' name='department'>
          {country.length !== 0 ? (
            <>
              <option value=''>Choose a city</option>
              {country.departments.map((department, index) => (
                <option key={index} value={department.departmentName}>
                  {department.departmentName}
                </option>
              ))}
            </>
          ) : (
            <option value=''>Choose a Country first</option>
          )}
        </select>
      </form>
      <br></br>
      <form>
        <input
          type='searchbar'
          name='searchbar'
          placeholder='Search employee by name or number'
        />
        <button type='submit' id='btn'>
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
