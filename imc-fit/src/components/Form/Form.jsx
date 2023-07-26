import '../../assets/css/form-style.css'

function Form(){
    return(
        <>
            <form className='form'>
                <div className='form-title--box'>
                    <h2>Digite seu Dados</h2>
                </div>
                <hr />
                <div className='form-box'>
                   <label>Peso</label>
                   <input type="number" id="weight" step="0.1" min="0" required placeholder='kg' />
                </div>
                <div className='form-box'>
                    <label>Altura</label>
                    <input type="number" id="height" step="0.01" min="0" required placeholder='cm' />
                </div>
                <div className='form-box'>
                    <button>CALCULAR</button>
                </div>
            </form>
        </>
    )
}

export default Form;