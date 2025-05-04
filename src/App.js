import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorPointer = document.getElementById("cursor-pointer");
  
    if (!cursor || !cursorPointer) return; // Prevent error if not found
  
    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorPointer.style.left = e.clientX + "px";
      cursorPointer.style.top = e.clientY + "px";
    };
  
    const handleMouseDown = () => {
      cursor.style.height = "0.5rem";
      cursor.style.width = "0.5rem";
      cursorPointer.style.height = "3rem";
      cursorPointer.style.width = "3rem";
    };
  
    const handleMouseUp = () => {
      cursor.style.height = "0.3rem";
      cursor.style.width = "0.3rem";
      cursorPointer.style.height = "2rem";
      cursorPointer.style.width = "2rem";
    };
  
    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);
  
    // Cleanup to avoid memory leaks
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  

  return (
    <div className="App">
      <div id="cursor" className="cursor-style" />
      <div id="cursor-pointer" className="cursor-pointer-style" />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
