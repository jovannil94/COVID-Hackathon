import React, { useState } from "react";
import axios from "axios";

const StatesSearch = () => {
  const [states, setStates] = useState([]);
  let allStates = ['al','ak','az','ar','ca','co','ct','de','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','ma','mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn','tx','ut','vt','va','wa','wv','wi','wy']
  const populateSelect = allStates.map((state, i) => {
    return (
      <option key={i} value={state}>
        {" "}
        {state.toUpperCase()}
      </option>
    );
  });
  return (
    <div>
      <select>
        <option value="" hidden>
          Select A State
        </option>
        {populateSelect}
      </select>
      StatesSearch
    </div>
  );
};
export default StatesSearch;
