import '../../assets/css/result-style.css';

function Result({msg, imc}){
    return(
        <>
            <hr />
            <div className="result-container">
                <p className='msg'>{msg}</p>
                <p className='imc-result'>{imc}</p>
            </div>
        </>
    )
}

export default Result;