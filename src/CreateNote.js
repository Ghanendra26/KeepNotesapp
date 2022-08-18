import React from 'react'
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


export default function CreateNote(props) {


  const [expand, setexpand] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: "",
  }


  )

  const InputEvent = (event) => {
    event.preventDefault();

    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,

      }
    })
    console.log(note);
  }

  const addEvent = () => {
    if (note.title.length > 0 && note.content.length > 0) {

      props.passNote(note);

      setNote({
        title: "",
        content: "",
      });

    }
  }


  const expandit = () => {
    setexpand(true);
  }

  const back2normal = () => {
    setexpand(false);
  }

  return (
    <div className='main_note' onDoubleClick={back2normal}>
      <form action="">
        {expand ? <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='title' autoComplete='off' /> : null}
        <textarea name="content" id="" value={note.content} onChange={InputEvent} onClick={expandit} cols="" rows="" placeholder='write a note...'></textarea>
        {/* <i className="fa-solid fa-plus plus-sign"></i> */}
        {expand ? <Button onClick={addEvent}>
          <AddIcon className='plus_sign'></AddIcon>
        </Button> : null}
      </form>
    </div>
  )
}











