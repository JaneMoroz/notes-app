import React, { FC, ReactElement } from "react";
import { Note } from "../models/note";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

interface NoteCardProps {
  note: Note;
  onDeleteNote: (id: number) => void;
}

const NoteCard: FC<NoteCardProps> = ({ note, onDeleteNote }): ReactElement => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => onDeleteNote(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
