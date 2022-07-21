import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useState, useLayoutEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import EntryImg from "./components/EntryImg";
import CardSection from "./components/CardSection";
import AboutUs from "./components/AboutUs";
import Std10 from "./components/Std10";
import Std11 from "./components/Std11";
import Std12 from "./components/Std12";
import Btech from "./components/Btech";
import BottomSame from "./components/BottomSame";
import It from "./components/It";
import Login from "./components/Login.jsx";
import Sem1 from "./components/Sem1";
import Sem2 from "./components/Sem2";
import Sem3 from "./components/Sem3";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState({});

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  return (
    <BrowserRouter>
    <Wrapper>
      <Navbar user={user} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <EntryImg /> <CardSection />
            </div>
          }
        />
        {/* <Route path="login" /> */}
        {/* Work here */}

        {/* user&&user._id ? <Navigate to="/" /> :  */}

        <Route exact path="/login" element={<Login user={setUser} />} />
        <Route exact path="/logout" element={<Navigate to="/" />} />
        <Route exact path="/login/register" element={<Register />} />

        <Route path="/ourTeam" element={<AboutUs />} />
        <Route
          path="/class10"
          element={user && user._id ? <Std10 /> : <Navigate to="/login" />}
        />
        <Route
          path="/class11"
          element={user && user._id ? <Std11 /> : <Navigate to="/login" />}
        />
        <Route
          path="/class12"
          element={user && user._id ? <Std12 /> : <Navigate to="/login" />}
        />

        <Route
          exact
          path="/Btech"
          element={user && user._id ? <Btech /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/Btech/it"
          element={user && user._id ? <It /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/Btech/it/sem1"
          element={user && user._id ? <Sem1 /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/Btech/it/sem2"
          element={user && user._id ? <Sem2 /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/Btech/it/sem3"
          element={user && user._id ? <Sem3 /> : <Navigate to="/login" />}
        />
      </Routes>
      <BottomSame />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
