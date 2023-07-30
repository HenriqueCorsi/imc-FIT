import '../../assets/css/result-style.css';

function Result({msg, imc}){
    return(
        <>
            <div className="result-container">
                <p className='msg'>{msg}</p>
                <p className='imc-result'>{imc}</p>
                <a href="#" className='info'>
                    Veja a interpretação do IMC
                </a>
            </div>
        </>
    )
}

export default Result;