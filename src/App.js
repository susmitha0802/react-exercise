import { Routes, Route } from 'react-router-dom';
import Greetings from './Components/Greetings';
import Parent from './Components/Parent';
import Counter from './Components/Counter';
import { NavBar } from './Components/NavBar';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home/:username" element={<Greetings/>}/>
        <Route path="/login" element={ <Parent/> }/>
        <Route path="/counter" element={ <Counter/> }/>
      </Routes>
    </div>
  );
}

export default App;
