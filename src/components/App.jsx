import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function handleAdd(note) {
    console.log(note);
    setAllNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function handleDelete(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
      F;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {allNotes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
