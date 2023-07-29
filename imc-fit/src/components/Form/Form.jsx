import { useState } from 'react';
import '../../assets/css/form-style.css'

function Form(){

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    function calculaImc(){
       
    }

    return(
        <>
            <form className='form'>
                <div className='form-title--box'>
                    <h2>Digite seu Dados</h2>
                </div>
                <hr />
                <div className='form-box'>
                   <label>Peso</label>
                   <input 
                    type="number"  
                    id="weight" 
                    step="0.1" 
                    min="0" 
                    required 
                    placeholder='kg' 
                    onChange={(e) => setPeso(e.target.value)}/>
                </div>
                <div className='form-box'>
                    <label>Altura</label>
                    <input 
                        type="number" 
                        id="height" 
                        step="0.01" 
                        min="0" 
                        required 
                        placeholder='cm'
                        onChange={(e) => setAltura(e.target.value)}
                        />
                </div>
                <div className='form-box'>
                    <button onClick={calculaImc}>CALCULAR</button>
                </div>
            </form>
        </>
    )
}

export default Form;