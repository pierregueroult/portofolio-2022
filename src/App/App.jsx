import AppRouter from "./App.Router";
import AppStateProvider from "./App.StateProvider";
import { Route } from "react-router-dom";
import Page from "../components/screens/Page";
import NavBar from "../components/molecules/NavBar";
import Loader from "../components/molecules/Loader";
import AppHelmet from "./App.Helmet";

function App() {
  return (
    <AppStateProvider>
      <AppHelmet>
        <Loader />
        <AppRouter NavBar={<NavBar />}>
          <Route path="/*" element={<Page />} />
        </AppRouter>
      </AppHelmet>
    </AppStateProvider>
  );
}

export default App;
