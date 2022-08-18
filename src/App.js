import React, { useState } from 'react';
import './App.css';
import CreateNote from './CreateNote';
// import Footer from './Footer';
import Header from './Header';
import Notes from './Notes';


function App() {
  const [additem, setadditem] = useState([])
  const addNote = (note) => {
    
    setadditem((prevData) => {
      return [...prevData, note]
    })
    console.log(note);


  }
  const onDelete = (id) => {

    setadditem((olddata)=>{
      return olddata.filter((currentdata,index)=>{
        return index !==id;
      })
    })


  }
  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />
      {/* <Notes/> */}

      {additem.map((val, index) => {
        return <Notes key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
      })}
      {/* <Footer /> */}

    </>
  );
}


export default App;
