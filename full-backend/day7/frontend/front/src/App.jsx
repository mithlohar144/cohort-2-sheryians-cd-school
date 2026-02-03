import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [notes, setNotes] = useState([

  ])

  function fetchNotes() {
    axios.get('https://notesapp-k7n0.onrender.com/api/notes')
      .then((res) => {
        console.log(res.data.note);
        setNotes(res.data.note)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    const { title, descripation } = e.target.elements

    console.log(title.value, descripation.value);
    axios.post("https://notesapp-k7n0.onrender.com/api/notes", {
      title: title.value,
      descripation: descripation.value
    })
      .then(res => {
        console.log(res.data);
        fetchNotes()

      })

  }

  function handleDelete(noteId) {
    axios.delete("https://notesapp-k7n0.onrender.com/api/notes/" + noteId)
      .then(res => {
        console.log(res.data);
        fetchNotes()
      })


  }

  function editHandler(e, noteId) {
    e.preventDefault()

    const { Modifytitle, Modifydescripation } = e.target.elements
    console.log(Modifytitle.value, Modifydescripation.value);
    axios.patch("https://notesapp-k7n0.onrender.com/api/notes/" + noteId, {
      title: Modifytitle.value,
      descripation: Modifydescripation.value
    })
      .then(res => {
        console.log(res.data);
        fetchNotes()

      })



  }
  return (
    <>

      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='enter Title' />
        <input name='descripation' type="text" placeholder='Enter Decripation' />
        <button>create Node</button>
      </form>

      <div className="notes">
        {
          notes.map((elem, idx) => {
            return <div key={idx} className="note">
              <div>
                <h1>{elem.title}</h1>
                <form onSubmit={(e)=>{
                    editHandler(e, elem._id)
                  }} className='note-create-form1'>
                  <input name='Modifytitle'
                    type="text"
                    placeholder='if you can edit please enter title  '
                    
                  />
                  <input name='Modifydescripation'
                    type="text"
                    placeholder='if you can edit please enter  descripation'
                  />
                  <button >save</button>
                </form>
              </div>
              <p>{elem.descripation}</p>
              <button onClick={() => {
                handleDelete(elem._id)
              }}>delete</button>
            </div>
          })
        }

      </div>
    </>
  )
}

export default App