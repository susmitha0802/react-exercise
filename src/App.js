import Parent from './Parent';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <Parent />
      <Counter/>
      <Counter defaultValue={5}/> 
    </div>
  );
}

export default App;
