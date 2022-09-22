import { Route, Routes } from "react-router-dom";

import {
  Admin,
  Home,
  Login,
  NavBar,
  Register,
  SingleStory,
} from "./components";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Story/:id" element={<SingleStory />} />
      </Routes>
    </div>
  );
};

export default App;
