import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePhoto from "./pages/CreatePhoto";

import Header from "./components/Header";
import Photo from "./pages/Photo";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-photo" element={<CreatePhoto />} />
        <Route path="/photo/:photoId" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}
