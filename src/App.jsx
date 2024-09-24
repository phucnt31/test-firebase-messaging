import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FirebaseMessaging } from "@capacitor-firebase/messaging";
import React from "react";

const App = () => {
  const [token, setToken] = useState("");

  const generateFCMToken = async () => {
    const { token } = await FirebaseMessaging.getToken();
    setToken(token);
  };

  const requestPermissions = async () => {
    await FirebaseMessaging.requestPermissions();
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => generateFCMToken()}>Generate Token</button>
        <p>
          <code>{token}</code>
        </p>
        <p>Click on "Generate Token" to get FCM token</p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
};

export default App;
