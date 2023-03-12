import React from 'react';
import Login from "./pages/Login/login";
import Root from "./pages/Root/root";

export default function App() {
  let isLoggedIn = false;

  if (sessionStorage.getItem("isLoggedIn")! === "true") {
    isLoggedIn = true;
  }

  return (
    <div>
      {isLoggedIn ? <Root/> : <Login/>}
    </div>
  );
}