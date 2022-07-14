import { FC, ReactElement } from "react";
import { Note } from "../models/note";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

interface CategoryProps {
  category: string;
}

const MyCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "category",
})(({ category }: CategoryProps) => ({
  border: category === "work" ? "1px solid red" : "",
}));

interface NoteCardProps {
  note: Note;
  onDeleteNote: (id: number) => void;
}

const NoteCard: FC<NoteCardProps> = ({ note, onDeleteNote }): ReactElement => {
  return (
    <div>
      <MyCard elevation={1} category={note.category}>
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
      </MyCard>
    </div>
  );
};

export default NoteCard;
