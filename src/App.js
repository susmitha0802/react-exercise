import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import Greetings from './Components/Greetings';
import Parent from './Components/Parent';
import Counter from './Components/Counter';
import { NavBar } from './Components/NavBar';
import { Joke } from './Components/Joke';
import { PostCall } from './Components/PostCall';
import './App.css';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home/:username" element={ <Greetings/> }/>
            <Route path="/login" element={ <Parent/> }/>
            <Route path="/counter" element={ <Counter/> }/>
            <Route path='/joke' element={ <Joke/> }/>
            <Route path='/postCall' element={ <PostCall/> }/>
          </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
