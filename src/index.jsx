import axios from "axios";
import "censa_front_end_library/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import config from "./config/config";
import "./index.scss";
import { persistor, store } from "./store/store.js";

axios.defaults.baseURL = config.env_vars.APP_API_BASE_URL;
axios.defaults.headers.common["x-access-token"] = "auth_token";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {config.env_vars.mode === "dev" ? (
        <React.StrictMode>
          <App />
        </React.StrictMode>
      ) : (
        <App />
      )}
    </PersistGate>
  </Provider>
);
