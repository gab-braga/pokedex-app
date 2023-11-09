import "./App.css";
import Dashboard from "./pages/dashboard";
import Data from "./pages/dashboard/data";
import Habilities from "./pages/dashboard/habilities";
import Location from "./pages/dashboard/location";
import Metrics from "./pages/dashboard/metrics";
import Home from "./pages/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash/:id" element={<Dashboard />}>
          <Route path="data" element={<Data />} />
          <Route path="location" element={<Location />} />
          <Route path="metrics" element={<Metrics />} />
          <Route path="habilities" element={<Habilities />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
