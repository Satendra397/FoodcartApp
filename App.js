
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import FoodDetails from './Pages/FoodDetails';
import FoodList from './Pages/FoodList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element = {<Login/>}/>
        <Route path='/foodlist' element = {<FoodList/>}/>
        <Route path='/fooddetails/:id' element = {<FoodDetails/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
