import Greetings from './Greetings';
import ListView from './ListView';
function App() {
  return (
    <div className="App">
      <Greetings name = "Beautiful Code"
      />
      <ListView />
      <ListView start={15} end={20}/>
    </div>
  );
}

export default App;
