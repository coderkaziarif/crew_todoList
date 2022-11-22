import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Notfound from "./components/NotFound/Notfound";


function App() {
  return (
    < >
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
