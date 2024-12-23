import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import Header from "./pages/Header";
import PersonalDetails from "./pages/PersonalDetails";
import Table from "./pages/Table";

function App() {
  return (
    <div className="bg-gray-200 flex flex-row h-screen">
      <SideNav/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/details" element={<PersonalDetails/>}/>
        <Route path="/table" element={<Table/>}/>


      </Routes>

    </div>
     
  );
}

export default App;
