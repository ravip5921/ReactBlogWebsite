import React, { useContext } from "react";
import TopBar from "./components/topBar/topBar";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Login from "./pages/login/login";
import Write from "./pages/write/write";
import Settings from "./pages/user/user";
import { BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom';
import { Context } from "./context/Context";
// import Login2 from "./pages/login/login2";

function App() {
  const currentUser = useContext(Context);
  console.log("sdfs" ,currentUser)
  return (
    
    <Router>
    <TopBar/>
    <Switch>
    {/* Homepage */}

      <Route exact path="/" element={<Home />} />
      
      {/* Register for new user only */}
      <Route exact path="/register" element={currentUser.user? <Home/>:<Register/>} />

      {/* Login if user not logged in */}
      <Route exact path="/login" element={currentUser.user? <Home />:<Login/>} />

      {/* Single Post */}
      <Route exact path="/post/:id" element={<Single/>} />

      {/* New post */}
      <Route exact path="/write" element={currentUser.user? <Write />:<Login/>} />

      {/* User Settings */}
      <Route exact path="/userSettings" element={currentUser.user? <Settings />:<Login/>} />
    </Switch>
    </Router>
  );
}

export default App;


// // concurrently "cd api && yarn start" "cd client && yarn start"


