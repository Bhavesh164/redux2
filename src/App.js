import './App.css';
import Header from "./state/containers/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductLisiting from './state/containers/ProductListing';
import ProductDetail from './state/containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
       <Header /> 
       <Routes>
         <Route path="/" exact element={<ProductLisiting/>}/>
         <Route path="/product/:productId" exact element={<ProductDetail/>}/>
         <Route>404 Not found</Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
