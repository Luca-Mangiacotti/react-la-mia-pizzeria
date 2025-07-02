import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/*   qui le nostre rotte */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
