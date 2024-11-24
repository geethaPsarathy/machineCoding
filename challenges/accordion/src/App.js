import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Accordion from '../src/components/Accordion/Accordion.js';


const accordionDataValue = Array.from({ length: 1000 }, (_, i) => ({
  title: `Section ${i + 1}`,
  content: `This is the content for section ${i + 1}`,
}));


function App() {
  const [accordionData, setAccordionData] = useState(accordionDataValue);


  useEffect(() => {
    console.log('re-renderind');
  }, []);


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Accordion data={accordionData} />
    </div>
  );
}

export default App;
