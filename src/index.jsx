import axios from "axios";
import "censa_front_end_library/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import config from "./config/config";
import "./css/index.scss";
import { persistor, store } from "./store/store.js";

axios.defaults.baseURL = config.env_vars.APP_API_BASE_URL;
axios.defaults.headers.common["x-access-token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiX2lkXCI6XCI2NGQ1ZTAzZmFmYjg3OTAwMWQwNTVlMDhcIixcInVzZXJJZFwiOlwiNjRkNWUwM2ZhZmI4NzkwMDFkMDU1ZTA4XCIsXCJmaXJzdE5hbWVcIjpcIktycmlzaFwiLFwibGFzdE5hbWVcIjpcIk1LXCIsXCJmdWxsTmFtZVwiOlwiS3JyaXNoIE1LXCIsXCJnZW5kZXJcIjpcIm1hbGVcIixcImVtYWlsXCI6XCJtdXRodWtyaXNobmFuLmt1bWFyQGNlbnNhbmV4dC5jb21cIixcImRlc2lnbmF0aW9uXCI6XCJNYW5hZ2VyXCIsXCJhZG1pblR5cGVcIjpcImFkbWluXCIsXCJlbXBJZFwiOlwiSTAwMTAxOVwiLFwicG9ydGFsVHlwZVwiOlwiZGlzdHJpYnV0b3JcIixcIm5leHRQYXNzd29yZENoYW5nZURhdGVcIjpcIjIwMjQtMDktMjVUMDc6MTY6MTUuMTU3WlwiLFwiY29tcGFueUNvZGVcIjpcIjkyMDBcIixcImNvbXBhbnlOYW1lXCI6XCJOYWdhIExpbWl0ZWQgQ29uc3VtZXJcIixcImNvbXBhbnlOYW1lVG9EaXNwbGF5XCI6XCJOQUdBXCIsXCJ0aW1lWm9uZU9mZnNldFwiOlwiKzA1OjMwXCIsXCJwbGFudFwiOlwiOTI5MlwiLFwiZGlzdHJpYnV0aW9uQ2hhbm5lbFwiOlwiTlZcIixcInNhbGVzT3JnXCI6OTIwMCxcImlzVmFuU2FsZXNcIjpmYWxzZSxcImxvY2F0aW9uXCI6e1wibG9jYXRpb25cIjp7XCJjb29yZGluYXRlc1wiOltdfSxcImNvb3JkaW5hdGVzXCI6Wzc1LjAzNTk5ODIsMTIuNDU1NzQzMV0sXCJ0eXBlXCI6XCJQb2ludFwifSxcInBsYW50TmFtZVwiOlwiVWF0IFdhcmVob3VzZVwiLFwiaXNDcm9zc0RvY2tcIjpmYWxzZSxcInByaW1hcnlQbGFudE5hbWVcIjpcIlwiLFwicHJpbWFyeVBsYW50SWRcIjpcIlwiLFwicGxhbnRfaWRcIjo5MjkyLFwiYW5hbHl0aWNzRW5hYmxlZFwiOjAsXCJkaXN0cmlidXRvcklkXCI6XCI2NGQzNjQ1ZDVlYjBkMmI1ZmM1NTQ5MmZcIixcIndhcmVob3VzZUlkXCI6XCI2NGQzNjNiZGE1YTc4NTQ1OTBlNjJkNmJcIixcImlzU3RhbmRhbG9uZVwiOmZhbHNlLFwiaXNIeWJyaWRcIjpmYWxzZX0iLCJpYXQiOjE3MDU5ODQ1MjMsImV4cCI6MTcwNTk4ODEyM30.ix6-pUKaAfNLufqdBzy_EGSJhuSnuQP57PqQ_FO2U3E";

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
