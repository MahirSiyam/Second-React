
import './App.css'
import Count from './count';
import BatsmanRun from './batsmanRun';

function App() {

  const handleClick = () => {
    alert("Wrong Answer");
  }

  const handleClick2 = (num) => {
    let ans = num + 10;
    alert(ans);
  }

  return (
    <>
      <h1>Vite + React</h1>
      
      <button onClick={handleClick}>Click 1</button>

      <button onClick={() => handleClick2(12)}>Click 2</button>

      <Count></Count>

      <BatsmanRun></BatsmanRun>
    </>
  )
}

export default App
