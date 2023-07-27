import { useState } from "react";
import "./index.css"

function Calculadora() {
  const [resultado, setResultado] = useState("");
  const handleClick = (e) => setResultado(resultado.concat(e.target.id))
  const clear = () =>setResultado("")
  const delele = () => setResultado(resultado.slice(0, -1))

  const calculate = () =>{
    try {setResultado(eval(resultado).toString())
    } catch(err){
      setResultado("Error");
    }
  }

  return (
    <div className="calculadora">
      <input className="input" type="text" value={resultado} disabled></input>
      <div className="botonesCalculadora">

        <button className="operador" onClick={clear}>AC</button>
        <button className="operador" onClick={delele}>DEL</button>
        
        <button className=""></button>

        <button id="/" className="operador" onClick={handleClick}>/</button>

        <button id="7" className="number" onClick={handleClick}>7</button>
        <button id="8" className="number" onClick={handleClick}>8</button>
        <button id="9" className="number" onClick={handleClick}>9</button>


        <button id="*" className="operador" onClick={handleClick}>x</button>

        <button id="4" className="number" onClick={handleClick}>4</button>
        <button id="5" className="number" onClick={handleClick}>5</button>
        <button id="6" className="number" onClick={handleClick}>6</button>

        <button id="+" className="operador" onClick={handleClick}>+</button>

        <button id="1" className="number" onClick={handleClick}>1</button>
        <button id="2" className="number" onClick={handleClick}>2</button>
        <button id="3" className="number" onClick={handleClick}>3</button>

        <button id="-" className="operador" onClick={handleClick}>-</button>

        <button  className=""></button>
        <button id="0" className="number" onClick={handleClick}>0</button>
        <button id="." className="operador" onClick={handleClick}>.</button>
        <button className="igual" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
export default Calculadora;
