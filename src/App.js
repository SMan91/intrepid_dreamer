import { Route, Routes } from "react-router-dom";

import {
  Admin,
  Home,
  Login,
  NavBar,
  Footer,
  Register,
  Stories,
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
        <Route path="/Stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
