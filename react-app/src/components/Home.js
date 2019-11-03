import React, { useState, useEffect } from 'react';
import { GetCountry } from '../Data/GetFunctions';


function Home() {
  const [country, setCountry] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const getDepartments = e => {
    console.log('I got clicked, new value is', e.target.value)
    GetCountry(e.target.value).then(e => {
      console.log('func e is', e)
      setCountry(e);
      e.departments.map(item => setEmployees(item.employee));
    });
  };

  useEffect(() => {
    console.log('employees', employees)
  }, [employees]);

  const searchForValue = (query, e) => {
    e.preventDefault()
    console.log(query)
    const newArray = employees.filter(employee => employee.firstName.toLowerCase().includes(query))
    

    return setEmployees(newArray)
  
  }


  const table = () => employees.map((employee, index) => {
    return <tr key={index}>
      <td>{employee.firstName}</td>
    </tr>
  });

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
              <option key='3' value='norway'>
                Norway
              </option>
              <option key='4' value='poland'>
                Poland
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
          type='searchInput'
          name='searchInput'
          value={searchValue}
          placeholder='Search employee by name or number'
          onChange={(e) => setSearchValue(e.target.value)} 
        />
        <button type='submit' onClick={(e)=> searchForValue(searchValue, e)} id='btn'>
          Search
        </button>
      </form>

      {employees.length > 0 && <table className='dataTable'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody >
          {table()}
        </tbody>
      </table>}
    </div>
  );
}

export default Home;
