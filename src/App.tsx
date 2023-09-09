import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SquarePage from "./pages/Square";
import TriangePage from "./pages/Triangle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<SquarePage />}/>
          <Route path="/triangle" element={<TriangePage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
