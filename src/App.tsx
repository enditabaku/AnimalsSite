// project imports
import Display from "./display";

// 3rd party
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
