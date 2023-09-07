import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import CardDetails from "./Components/CardDetails";

const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/details/:id" element={<CardDetails/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
