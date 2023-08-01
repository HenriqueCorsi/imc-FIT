import React, { useState } from 'react';
import '../../assets/css/form-style.css';
import Result from '../Result/Result';
import ImcTable from '../ImcTable/ImcTable'

function Form() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [msg, setMsg] = useState('Seu IMC é: ');
  const [result, setResult] = useState('');

  function imcCalculator(e) {
    e.preventDefault();
    const weightKg = parseFloat(weight);
    const heightKg = parseFloat(height) / 100;

    if (isNaN(weightKg) || isNaN(heightKg) || weightKg <= 0 || heightKg <= 0) {
      setResult('');
      setMsg('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = weightKg / (heightKg * heightKg);

    setResult(`${imc.toFixed(1)}%`);
    setMsg('Seu IMC é de: ');
  }

  function wipeData(){
    setHeight('');
    setWeight('');
    setMsg('');
    setResult('');
  }

  return (
    <>
      <form className='form'>
        <div className='form-title--box'>
          <h2>Calculadora - IMC</h2>
        </div>
        <hr />
        <div className='form-box'>
          <label>Peso</label>
          <input
            type='text'
            id='weight'
            step='0.1'
            min='0'
            required
            placeholder='kg'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='form-box'>
          <label>Altura</label>
          <input
            type='text'
            id='height'
            step='0.01'
            min='0'
            required
            placeholder='cm'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className='btn-box'>
          <button onClick={imcCalculator}>CALCULAR</button>
          <button onClick={wipeData} id='clear'>Limpar</button>
        </div>
        {result && <Result msg={msg} imc={result} />}
      </form>
      {result &&  <ImcTable/>}
      <div>
       
      </div>
    </>
  );
}

export default Form;
