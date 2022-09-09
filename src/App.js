import { useContext, useState } from "react";
// import the dependencies packages 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import the components 
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";


// dark and light mode 
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import Exp1 from "./components/experience/Exp1";
import FormImage from "./components/form/FormImage";
import App2 from "./meta-dash-2/App2";


function App() {

  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
     
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add new User" />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new product" />} />
            </Route>

            {/* <Route index element={<Exp1  />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <App2 />
  );
}

export default App;
