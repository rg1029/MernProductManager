import {Routes, Route} from "react-router-dom"
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Main from "./pages/Main";

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:product_id" element={<Details />} />
        <Route path="/products/edit/:product_id" element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;