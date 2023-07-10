import React from "react";
import './App.css'
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import routes from "./routes";
import { useRoutes} from "react-router-dom"


function App() {
  const routeinapp=useRoutes(routes)
  return (
   <>
   <Header/>
   <div className="app-body">
     <Sidebar/>
     {routeinapp}
   </div>
   </>
  );
}

export default App;
