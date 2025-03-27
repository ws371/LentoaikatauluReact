import './App.css';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import InFlightsPage from "./pages/InFlightsPage";
import OutFlightsPage from "./pages/OutFlightsPage";
import Layout from "./components/Layout";



function App() {
  return (<Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="InFlightsPage" element={<InFlightsPage />} />
          <Route path="OutFlightsPage" element={<OutFlightsPage />} />
      </Route>
  </Routes>)
}

export default App;
