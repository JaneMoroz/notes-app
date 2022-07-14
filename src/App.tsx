import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: grey,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
