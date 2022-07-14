import { useEffect, ReactElement, FC, useState } from "react";
import { Note } from "../models/note";
import { Container } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const Notes: FC = (): ReactElement => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <NoteCard note={note} onDeleteNote={handleDelete} />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default Notes;
