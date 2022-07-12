export interface Note {
  title: string;
  details: string;
  category: "reminders" | "hobby" | "todos" | "work";
  id: number;
}
