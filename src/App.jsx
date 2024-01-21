import AppRouter from "./components/Router/AppRouter";
import config from "./config/config";

function App() {
  console.log(config.env_vars);

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
