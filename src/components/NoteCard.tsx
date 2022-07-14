import { FC, ReactElement } from "react";
import { Note } from "../models/note";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  styled,
  Avatar,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

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
          avatar={
            <Avatar
              sx={{
                backgroundColor:
                  note.category === "work"
                    ? yellow[700]
                    : note.category === "hobby"
                    ? pink[200]
                    : note.category === "todos"
                    ? green[500]
                    : blue[500],
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
