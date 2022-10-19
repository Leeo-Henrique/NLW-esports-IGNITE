import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { FindDuo } from "../components/ConnectDuo";
const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game/:gamename" element={<FindDuo />} />
      </Routes>
    </Router>
  );
};
export default RoutesApp;
