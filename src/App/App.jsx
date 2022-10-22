import AppRouter from "./App.Router";
import AppStateProvider from "./App.StateProvider";
import { Route } from "react-router-dom";
import Page from "../components/screens/Page";
import NavBar from "../components/molecules/NavBar";
import Loader from "../components/molecules/Loader";
function App() {
  return (
    <AppStateProvider>
      <Loader />
      <AppRouter NavBar={<NavBar />}>
        <Route path="/*" element={<Page />} />
      </AppRouter>
    </AppStateProvider>
  );
}

export default App;
