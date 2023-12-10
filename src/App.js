import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { person } from './data'; 
import DatesCount from './components/DatesCount'
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

function App() {
 const [personData , setPersonData] = useState(person)
 const onDelete=()=> {
    setPersonData([])
 }
 const onViewData=()=> {
  setPersonData(person)
}
useEffect(() => {
  setPersonData([])
},[])

  return (
    <div className="font color-body">
        <Container className="py-5">
          <DatesCount person={personData}/>
          <DatesList person={personData}/>
          <DatesAction deleteData={onDelete} viewData={onViewData}/>
        </Container>
    </div>
  );
}

export default App;
