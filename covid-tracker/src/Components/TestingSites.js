import React, { useState } from 'react';
import axios from "axios";
import TestingSitesIndex from './TestingSitesIndex';
import { useInputs } from "../util/InputHook";

const TestingSites = () => {
  const address = useInputs("")
  const [testing, setTesting] = useState([])

    
    const fetchCoord = async () => {
      try {
        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.value}&key=AIzaSyCpINhVI_CTjIc8xOastGFa5-dHpE-oIgg`)
        getTesting(res.data.results[0].geometry.location)
      } catch (error) {
        console.log(error)
      }
    }
    
    const handleForm = (e)=> {
      e.preventDefault();
      fetchCoord()
    }

      const getTesting = async (e) => {
        let lat = e.lat.toFixed(2);
        let long = e.lng.toFixed(2);
        try {
          let res = await axios.get(`https://discover.search.hereapi.com/v1/discover?apikey=wMLSavWgc02TqKDUC9wfuGEZZ8rP2TCBklwSN9J6h4Y&q=Covid&at=${lat},${long}&limit=5`);
          setTesting(res.data.items)
        } catch (error) {
          console.log(error)
        }
      };

    return(
        <div className="Container">
          <form onSubmit={handleForm}>
            <input type="text" {...address}/>
            <input type="submit" value="Search for Testing Sites"/>
          </form>
            <TestingSitesIndex sites={testing}/>
        </div>
    )
}

export default TestingSites;
