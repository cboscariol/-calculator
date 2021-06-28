import './App.css';
import { useState } from 'react'

function App() {
  const [firstValue, setFirstValue] = useState()
  const [secondValue, setSecondValue] = useState()
  const [result, setResult] = useState('')

  function handleFirstValue(event) {
    setFirstValue(Number(event.target.value))
  }

  function handleSecondValue(event) {
    setSecondValue(Number(event.target.value))
  }

  function clear() {
    setFirstValue('')
    setSecondValue('')
    setResult('')
  }

  function somar() {
    setResult(firstValue + secondValue)
  }

  function subtrair() {
    setResult(firstValue - secondValue)
  }

  function dividir() {
    setResult(firstValue / secondValue)
  }

  function multiplicar() {
    setResult(firstValue * secondValue)
  }





  return (
    <div className="App">
      <form action="" className="App">
        <input type="number" value={firstValue} onChange={handleFirstValue} />
        <input type="number" value={secondValue} onChange={handleSecondValue} />
        <div>
          <button type="button" class="btn btn-success" onClick={somar}>+</button>
          <button type="button" class="btn btn-danger" onClick={subtrair}>-</button>
          <button type="button" class="btn btn-warning" onClick={dividir}>/</button>
          <button type="button" class="btn btn-info" onClick={multiplicar}>*</button>
          <button type="button" class="btn btn-secondary" onClick={clear}>C</button>
        </div>

      </form>
      <p>{result}</p>


    </div>
  );
}

export default App;
