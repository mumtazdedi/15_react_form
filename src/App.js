import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: 0,
    bgStudy: "",
    class: "",
    file: "",
    hope: "",
  })

  const [formData, setFormData] = useState([])

  return (
    <>
      <Title />
      <Form data={data} setData={setData} formData={formData} setFormData={setFormData} />
    </>
  );
}

export default App;
