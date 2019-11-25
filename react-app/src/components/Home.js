import React, { useState, useEffect } from 'react';
import { GetCountryList, GetCountry, GetAll } from '../Data/GetFunctions';

function Home() {
  const [country, setCountry] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmplyees, setSelectedEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDepartments = e => {
    if (e.target.value === 'All') {
      GetAll().then(e => {
        let arr = e.coutries
          .flatMap(department => department.departments
            .flatMap(item => {
              let office = item.departmentName
              let emp = item.employee.map(emp => {
                return { ...emp, office, fullName: `${emp.firstName} ${emp.lastName}` }
              })
              return emp;
            }));

        setSelectedEmployees(arr)
        setEmployees(arr)
        return
      })
    } else {
      GetCountry(e.target.value).then(e => {
        setCountry(e);
        let flat = e.departments.flatMap(item => {
          let office = item.departmentName
          let emp = item.employee.map(emp => {
            return { ...emp, office, fullName: `${emp.firstName} ${emp.lastName}` }
          });
          return emp
        });
        setEmployees(flat)
        setSelectedEmployees(flat)
      });
    }
  };

  const officeChange = (e) => {
    if (e.target.value === '') {
      setSelectedEmployees(employees)
    } else {
      let filtered = employees.filter(item => item.office === e.target.value)
      setSelectedEmployees(filtered)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (countryList.length === 0) {
      GetCountryList().then(json => json.countryName.map(item => item.countryName))
        .then(second => {
          return setCountryList(second)
        })
    }
  }, [employees]);

  const searchForValue = (query, e) => {
    e.preventDefault();

    if (query != '') {
      const newArray = employees.filter(employee =>
        employee.fullName.toLowerCase().includes(query)
      );
      return setSelectedEmployees(newArray);
    } else {
      setSelectedEmployees(employees)
    }

  };

  const table = selectedEmplyees.map((employee, index) => {
    return (<tr key={index}>
      <td>{employee.office}</td>
      <td>{employee.fullName}</td>
      <td>{employee.department}</td>
    </tr>)
  });

  return (
    <div className='App'>
      <h1>test</h1>
      {country.length !== 0 ? <p>{country.countryName}</p> : <p>All</p>}
      <form>
        <select
          className='browser-default custom-select'
          name='country'
          onChange={getDepartments}
        >
          {
            <>
              <option key='01' value='All'>
                Country
              </option>
              <option key='02' value='All'>
                All
              </option>
              {
                countryList !== 0 ? countryList.map(function (item, index) {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>)
                }) : <option>loading...</option>
              }
            </>
          }
        </select>
        <select className='browser-default custom-select' name='department' onChange={officeChange}>
          {country.length !== 0 ? (
            <>
              <option value=''>Choose a office</option>
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
          onChange={e => setSearchValue(e.target.value)}
        />
        <button
          type='submit'
          onClick={e => searchForValue(searchValue, e)}
          id='btn'
        >
          Search
        </button>
      </form>

      {employees.length > 0 && (
        <table className='dataTable'>
          <thead>
            <tr>
              <th>Office</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
