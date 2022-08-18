import React from 'react'
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"

export default function Notes(props) {

  const deleteNote=()=>{

    props.deleteItem(props.id);
  }
  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className='btn' onClick={deleteNote}>
        <DeleteOutlinedIcon  className="deleteIcon" />
        </button>


    </div>
  )
}
