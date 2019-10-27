import React from 'react';


function Home ()  {


    
    return (
        <div className="App">
        <h1>test</h1>
        <form>
        <select className="browser-default custom-select" name="country">
            {
                //country.map((specificCountry) => <option key={specificCountry.label} value={specificCountry.value}>{specificCountry.label}</option>)
                <option key="test" value="test">Test1</option>
            }
        </select>
        <select className="browser-default custom-select" name="department">
            {
                //country.map((specificCountry) => <option key={specificCountry.label} value={specificCountry.value}>{specificCountry.label}</option>)
                <option key="test2" value="test2">Test2</option>
            }
        </select>
        </form>
        <br></br>
        <form>
        <input type="searchbar"
        name="searchbar"
        placeholder="Search employee by name or number"
        />
        <button type="submit" id="btn">Search</button>
        </form>
        </div>
        );
    }


export default Home;