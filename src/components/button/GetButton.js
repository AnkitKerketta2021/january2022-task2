import React, { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import HTTP from "../axiosInstance";

function GetButton(props) {
  const [fetchedData, setfetchedData] = useState([]);

  const fetchData = async () => {
    try{
      const response = await HTTP.get("/users");
      (response.error)?alert(response.error):alert("Data Fetched Successfully")
    setfetchedData(response.data);
    props.setData(response.data);
  }
  catch(err){
    alert(err)
    }
    
  };

  return (
    <div>
      <Button onClick={fetchData}>Get Data</Button>
    </div>
  );
}

export default GetButton;
