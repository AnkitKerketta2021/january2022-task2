import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import GetButton from './button/GetButton'
import fetchApi from './fetchApi'
// import DisplayTable from './table/DisplayTable'
const DisplayTable = lazy(()=>import('./table/DisplayTable'))

function MainApp() {
    const [userData, setuserData] = useState([])

 const setData = (fetchedData)=>{
 setuserData(fetchedData)    
 }
    // console.log("Data:",userData);
    return (
        <div>
            <h1>Project-2</h1>
            <GetButton setData={setData}/>
          <Suspense fallback={<h1>Loading...</h1>}>
          <DisplayTable userData={userData}/>
          </Suspense>
        </div>
    )
}

export default MainApp
