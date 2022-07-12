import React, { useEffect, ReactElement, FC, useState } from "react";
import { Note } from "../models/note";
import { Container, Grid } from "@mui/material";
import NoteCard from "../components/NoteCard";

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

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard note={note} onDeleteNote={handleDelete} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Notes;
